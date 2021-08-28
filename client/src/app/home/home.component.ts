import { Component, OnInit, TemplateRef } from '@angular/core';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from '../shop/shop.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  eventList: IType[];
  eventRepeater: IType[];
  shopParams: ShopParams;
  teamMembers: Array<any> = [
    {
      name: "Erin Crider",
      title: "Shenanigator",
      image: "assets/images/Dowell_-61.jpeg",
      instagram: "https://instagram.com/bigfootwrangler?utm_medium=copy_link",
      facebook: "",
      email: "erin@coloradowotf.com",
      bio: "<p>Erin has always been connected to the outdoors and had a hunger to learn more.  She learned to fly fish after moving to Colorado from Missouri in 2014.  Grandma put a rod in her hand at a very young age and they reeled in crappie and catfish together.  Back then, she would try and put them back, now, she understands why Grandma cooked them up.  Catch and release was a new concept when she started fly fishing in 2015.  It was almost impossible to find other women that fly fished and would let her tag along.  She joined a club, but it just was not her vibe, so she looked around and found a group &quot;Colorado Women on the Fly&quot; that was inactive on Facebook.  Reviving the group, she soon traveled the state fishing with other women.  Then she took an interest in hunting birds, which seemed very intimidating.  She became an adult onset hunter and harvested her first duck in 2019.  Then came pheasants and chukar, then came the Covid turkey.  Finally…</p>"
          +"<p>Pre-Covid she took a break from her career as a financial planner to get her in touch with her mental health and explore more of the Rocky Mountains.  Life changing to say the least!  She is constantly busy connecting with people and finding shenanigans to empower and help others.  She loves to fish in different fundraisers such as the Denver Trout Unlimited Carp Slam where she has never caught a carp (Carpless Crider) but enjoys raising money for the Denver South Platte, which in turn, is used by farmers and ranchers out East.  Her education is in sustainable beef and dairy production.  The folks out East and now the habitat out in Eastern Colorado are very important to her, the waterfowl, and the local producers.  She also enjoys fishing the “25 on the Fly” for the benefit of the Mayfly Project and the ”8 River Rodeo“ benefiting Project Healing Waters and Colorado Trout Unlimited.</p>"
          +"<p>Erin sits on the board of Colorado Trout Unlimited, West Denver Trout Unlimited, the East Slope Angler Representative for the Colorado Wildlife Council, and participates in the Colorado Farm Bureau Elite Leaders Academy.  Board meetings are about the only activity where she’s not applying sunscreen.  These organizations are important to her because there is only so much land out there and we all need to work together to protect it.</p>"
          +"She loves to get outside, learn new skills, protect the environment, and meet new people."
    },
    {
      name: "April Ferzoco",
      title: "Fish Farmer & Casting Director",
      image: "assets/images/IMG_0588v2.png",
      instagram: "https://instagram.com/ap.fair?utm_medium=copy_link",
      facebook: "",
      email: "",
      bio: "<p>April began her fly fishing journey after she moved to Colorado in 2016. Her first experience fly fishing was at a back country alpine lake. After hooking up with some native cutthroat trout, the adrenaline rush and beauty of the sport instantly attracted her attention. She has since lived in a few areas in Colorado, close by to gold metal waters. Spending majority of her free time on the river with her boyfriend Cole and their dog Linnette. April’s  time on the river started adding up. After becoming a proficient angler she took on the challenge of fishing Saltwater in several countries. Targeting large and small species like Bonefish, Triggerfish and Parrotfish. The challenge of fly fishing is what excites April the most because &quot;the tug is the drug&quot;. </p>"
        + "<p>April’s favorite time of year to fish is the winter, she loves the solitude and peacefulness of the snow and rising fish. You will most likely always see April on the water with her furry side-kick Linnette. Listening to Linnie’s beautiful river song’s always puts a smile on everyones face. When April is fishing she loves to always pack lots of snacks and will make you ramen if you get to go on a trip with her.</p>"
    },
    {
      name: "Anh Thai",
      title: "Fly Tier & High Alpine Hiker",
      image: "assets/images/IMG_0584v2.png",
      instagram: "https://instagram.com/summit_air?utm_medium=copy_link",
      facebook: "",
      email: "Anht.photos@gmail.com",
      bio: "<p>Anh started fly fishing on the Front Range streams near her home of Boulder, Colorado.  Her passion for the outdoors has come hand in hand with exploring the high country for wild trout.  While she fishes and ties flies year-round, backpacking to high alpine lakes or mountain streams in search of Cutthroat Trout is her favorite summer persuit.  Anh also enjoys building and restoring bamboo and graphite rods.  When she isn't exploring new waters Anh can be found mountaineering, climbing, birdwatching, or foraging for wild mushrooms.</p>"
    },
    {
      name: "Geri Reffel",
      title: "Shenanigator Wrangler",
      image: "assets/images/IMG_3128v2.heic",
      instagram: "",
      facebook: "https://www.facebook.com/geri.reffel",
      email: "",
      bio: "<p>Geri has been fishing since she could walk.  She grew up pike fishing and now her kids and grandkids share the same passion.  Geri is known to get there before the crowds, and stays until everyone else has gone home.  She is involved in Kiwanis and Colorado Trout Unlimited.  You can usually find her in Eleven Mile Canyon yelling at Erin to get &quot;down from that rock!&quot; or &quot;out of my cooler!&quot, which is always filled with awesome snacks and homemade wraps.</p>"
    },
    {
      name: "Madi Shaheen",
      title: "Certified Therapist & Naturalist",
      image: "assets/images/IMG_0603.JPG",
      instagram: "",
      facebook: "",
      email: "Madi@resilience1220.org",
      bio: "<p>Madi has a love of life and of all that is alive; her passion is to foster and further growth in people, a plant, an idea and a social group.  Her background in Forest therapy and stress-reduction theory drive her work to synchronize our rhythms with those of the environment.</p>"
          +"<p>Madi believes dirt can heal, and that time spent in nature lowers anxiety and aids in survival and of human fulfillment.<p>"  
          +"<p>Madi engages in Nature-walks, and edible and medicinal plant foraging are her expertise; she also guides in proper backpack and shoe fitting, and believes correct walking techniques and being in-tuned with the body are essential for achieving best results for being in nature</p>"
    },
    {
      name: "Emma Brown",
      title: "Horse Wrangler & Fishing Instructor",
      image: "assets/images/IMG_0591.jpg",
      instagram: "https://instagram.com/emmabrowntrout?utm_medium=copy_link",
      facebook: "",
      email: "",
      bio: ""
    },
    {
      name: "Draya Grangroth",
      title: "Archery Hunter & Photographer",
      image: "assets/images/IMG_0589v3.png",
      instagram: "https://instagram.com/whats_your_wild?utm_medium=copy_link",
      facebook: "",
      email: "drayagrangroth@gmail.com",
      bio: "<p>Having grown up in a hunter gatherer lifestyle Draya has always been drawn to relying on nature to feed and emotionally support her. Spending the majority of her time in the wild as a young girl she fostered her love for all things in nature, as it was food for her soul, and to this day it still is. As a entrepreneur    Draya seeks to help like minded women find their calling in the wild. As an avid hunter and advocate for mental health, conservation and public lands, she hopes to educate and support women as they do so as well. With 18 years of hunting experience and 3 years of professional guiding under her belt, her calling is backed up with experiences and lessons learned in the field.</p>"
    },
    {
      name: "Kerrie Beyer",
      title: "Wilderness Medical Professional",
      image: "assets/images/IMG_0568v2.jpg",
      instagram: "https://instagram.com/nurse_kerrie?utm_medium=copy_link",
      facebook: "",
      email: "",
      bio: ""
    },
    {
      name: "Lisa Le",
      title: "Water & Ice Fishinator ",
      image: "assets/images/lisa_and_dog.jpg",
      instagram: "https://instagram.com/cptn_plnt?utm_medium=copy_link",
      facebook: "",
      email: "",
      bio: "<p>Lisa is an Oklahoma native and grew up spin rod fishing. It wasn’t until her move to Colorado did she pick up fly fishing. She quickly became obsessed from the very moment she picked up a fly rod. She fly fishes all 4 seasons, but  loves high alpine lake fishing and especially loves the tranquility of winter fishing. If she's not fly fishing in the winter, you can find her ice fishing all over Colorado. A sport her bernedoodle, Traveler, goes insane over.<p>"
            +"<p>She is a pediatric echocardiographer by trade, director-at-large for Colorado Trout Unlimited, and a mentor for The Mayfly Project. An organization that takes foster children fly fishing in hopes to make a meaningful connection with nature. She loves sharing her passion for the sport and nature with the younger generation. Fly fishing has improved her mental health and practically saved her life from stress induced Grave's Disease. Fly fishing has given her so much and in return she hopes she can pass on it's positive impacts to others.</p>"
            +"<p>She is a fly tier, novice hunter & mushroom forager, dog lover, and obsessed sourdough baker. If you see a 5 foot 1 inch woman dancing on the water after netting a fish. It's most likely this gal.</p>"
    }

  ];
  
  constructor(private shopService: ShopService, public modalService: BsModalService) { 
    this.shopParams = this.shopService.getShopParams();
  }

  ngOnInit(): void {
    this.getTypes();
  }

  openModal(template: TemplateRef<any>, teamMember: any[]) {
    this.modalRef = this.modalService.show(template, { initialState: teamMember});
 }

  getTypes() {
    this.shopService.getTypes().subscribe(response => {
      this.eventRepeater = [...response];
      this.eventList = [{id: 0, name: 'All', imageUrl: '', order: 0}, ...response];
    }, error => {
      console.log(error);
    })
  }

}
