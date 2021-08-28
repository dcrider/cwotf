using API.DTOs;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ProductTypeUrlResolver : IValueResolver<ProductType, ProductTypeToReturnDTO, string>
    {
        private readonly IConfiguration _config;
        public ProductTypeUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(ProductType source, ProductTypeToReturnDTO destination, string destMember,
        ResolutionContext context)
        {
            if(!string.IsNullOrEmpty(source.ImageUrl))
            {
                return _config["ApiUrl"] + source.ImageUrl;
            }

            return null;
        }
    }
}