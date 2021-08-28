using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Errors;
using API.Extensions;
using AutoMapper;
using Core.Entities.Identity;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager,
            RoleManager<IdentityRole> roleManager, ITokenService tokenService, IMapper mapper)
        {
            _mapper = mapper;
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDTO>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailFromClaimsPrinciple(User);

            return new UserDTO
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
                DisplayName = user.DisplayName
            };
        }

        [HttpGet("emailexists")]
        public async Task<ActionResult<bool>> CheckEmailExistsAsync([FromQuery] string email)
        {
            return await _userManager.FindByEmailAsync(email) != null;
        }

        [Authorize]
        [HttpGet("address")]
        public async Task<ActionResult<AddressDTO>> GetUserAddress()
        {
            var user = await _userManager.FindByEmailWithAddressAsync(User);

            return _mapper.Map<AddressDTO>(user.Address);
        }

        [Authorize]
        [HttpPut("address")]
        public async Task<ActionResult<AddressDTO>> UpdateUserAddress(AddressDTO address)
        {
            var user = await _userManager.FindByEmailWithAddressAsync(User);

            user.Address = _mapper.Map<Address>(address);

            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded) return Ok(_mapper.Map<AddressDTO>(user.Address));

            return BadRequest("Problem updating the user");
        }


        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Unauthorized(new ApiResponse(401));

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded) return Unauthorized(new ApiResponse(401));

            //get user roles
            var roles = _userManager.GetRolesAsync(user).Result;

            return new UserDTO
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
                DisplayName = user.DisplayName,
                Roles = roles
            };
        }

        //[Authorize]
        // [HttpPost("createRole")]
        // public async Task<ActionResult<IdentityResult>> CreateRole(string roleName)
        // {
        //     var newRole = new IdentityRole();
        //     newRole.Name = roleName;

        //     var result = await _roleManager.CreateAsync(newRole);
        //     if (result.Succeeded) return result;
        //     return null;
        // }

        //[Authorize]
        // [HttpPost("AssignRole")]
        // public async Task<ActionResult<IdentityResult>> AssignRole(string email, string roleName)
        // {
        //     var user = await _userManager.FindByEmailAsync(email);
        //     var addUser = await _userManager.AddToRoleAsync(user, roleName);

        //     if(addUser.Succeeded) return addUser;
        //     return null;
        // }

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDto)
        {
            if (CheckEmailExistsAsync(registerDto.Email).Result.Value)
            {
                return new BadRequestObjectResult(new ApiValidationErrorResponse{Errors = new[] {"Email address is in use"}});
            }

            var user = new AppUser
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.Email,
                FoodAllergies = registerDto.FoodAllergies,        
                AgeRange = registerDto.AgeRange,
                CovidVaccinated = registerDto.CovidVaccinated,
                OutdoorExperience = registerDto.OutdoorExperience,
                Mobility = registerDto.Mobility,
                CprCertified = registerDto.CprCertified
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);
            
            if (!result.Succeeded) return BadRequest(new ApiResponse(400));
            //add general user role
            //_userManager.AddToRoleAsync

            //create user profile record?
            
            return new UserDTO
            {
                DisplayName = user.DisplayName,
                Token = _tokenService.CreateToken(user),
                Email = user.Email,
                FoodAllergies = registerDto.FoodAllergies,        
                AgeRange = registerDto.AgeRange,
                CovidVaccinated = registerDto.CovidVaccinated,
                OutdoorExperience = registerDto.OutdoorExperience,
                Mobility = registerDto.Mobility,
                CprCertified = registerDto.CprCertified
            };
        }
    }
}