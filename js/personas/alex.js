// replace ALEX with the name of the person. Should be unique between everyones persona json object.

var persona_ALEX = new personaClass({
	
	// average time spent on page
	'average_time_page' : 5.0,
	
	// probability of doing a sort in the beginning of their shopping
	'sort_start' : 0.9,  
	// probability of doing a sort at any time, must be >0 and <1
	'sort' : 0.1,
	// if doing a sort, below indicates probability of sorting on something, each should be >0 and <1
	'sort_color' : 0.8,
	'sort_pattern' : 0.3,
	'sort_size' : 0.9,
	'sort_category' : 0.9,
	'sort_brand' : 0.9,
	'sort_price' : 0.6,
	'sort_shipsfrom' : 0.6,
	'sort_material' : 0.7,
	'sort_likes' : 0.6,
	'sort_views' : 0.6,
	'sort_buys' : 0.6,
	'sort_trending' : 0.5,	
	'sort_sale' : 0.7,
	'sort_new' : 0.6,
	
	// probability of doing a filter in the beginning of their shopping
	'filter_start' : ,  
	// probability of doing a filter at any time, must be >0 and <1
	'filter' : ,   
	// if doing a filter, below indicates probability of filtering on something, each should be >0 and <1
	'filter_color' : ,
	'filter_pattern' : ,
	'filter_size' : ,
	'filter_category' : ,
	'filter_brand' : ,
	'filter_price' : ,
	'filter_shipsfrom' : ,
	'filter_material' : ,
	'filter_likes' : ,
	'filter_views' : ,
	'filter_buys' : ,
	'filter_trending' : ,
	'filter_sale' : ,
	'filter_new' : ,
	
	// each of these probabilties can be in range >0 and <1
	'liking_without_clicking' : ,
	'clicking_when_find_appealing' : ,
	'liking_after_clicking' : ,
	'buying_after_clicking' : ,
	'clicking_when_find_not_appealing' : ,
	'liking_when_find_not_appealing' : ,
	'liking_after_clicking_when_find_not_appealing' : ,
	'buying_when_find_not_appealing' : ,
	
	// each of these probabilties can be in range >0 and <1
	'going_to_bathroom' : ,
	'phone_calls' : ,
	'engages_in_conversation' : ,
	'leave_for_eating' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_red' : ,
	'like_blue' : ,
	'like_green' : ,
	'like_yellow' : ,
	'like_orange' : ,
	'like_purple' : ,
	'like_white' : ,
	'like_black' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_pattern' : ,
	'like_no_pattern' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_xxs' : ,
	'like_xs' : ,
	'like_s' : ,
	'like_m' : ,
	'like_l' : ,
	'like_xl' : ,
	'like_xxl' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_w_Activewear' : ,
	'like_w_Blazers' : ,
	'like_w_Coats & Jackets' : ,
	'like_w_Denim' : ,
	'like_w_Dresses' : ,
	'like_w_Hoodies & Sweatshirts' : ,
	'like_w_Jeans' : ,
	'like_w_Jumpers' : ,
	'like_w_Cardigans' : ,
	'like_w_Lingerie & Nightwear' : ,
	'like_w_Pants' : ,
	'like_w_Shirts & Blouses' : ,
	'like_w_Shoes' : ,
	'like_w_Shorts' : ,
	'like_w_Skirts' : ,
	'like_w_Socks & Tights' : ,
	'like_w_Sweaters' : ,
	'like_w_Swimwear' : ,
	'like_w_T-Shirts' : ,
	'like_w_Tops' : ,
	'like_w_Trousers & Leggings' : ,
	'like_m_Activewear' : ,
	'like_m_Blazers & Vests' : ,
	'like_m_Cardigans' : ,
	'like_m_Coats & Jackets' : ,
	'like_m_Dress shirts' : ,
	'like_m_Jackets' : ,
	'like_m_Jeans' : ,
	'like_m_Long sleeves' : ,
	'like_m_Outerwear' : ,
	'like_m_Pants & Chinos' : ,
	'like_m_Polo shirts' : ,
	'like_m_Shirts' : ,
	'like_m_Shorts' : ,
	'like_m_Sleepwear' : ,
	'like_m_Socks' : ,
	'like_m_Suits' : ,
	'like_m_Sweaters' : ,
	'like_m_Swimwear' : ,
	'like_m_T-Shirts' : ,
	'like_m_Underwear' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_Everlane' : ,
	'like_American Giant' : ,
	'like_Beyond' : ,
	'like_Grown and Sewn' : ,
	'like_Gitman Bros' : ,
	'like_Rogue Territory' : ,
	'like_Self Edge' : ,
	'like_Taylor Stitch' : ,
	'like_ISAORA' : ,
	'like_Need Supply' : ,
	'like_Victor Athletics' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_0_10' : ,
	'like_10_20' : ,
	'like_20_50' : ,
	'like_50_100' : ,
	'like_100_200' : ,
	'like_200_400' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_Cotton' : ,
	'like_Linen' : ,
	'like_Polyester' : ,
	'like_Silk' : ,
	'like_Wool' : ,
	'like_Nylon' : ,
	'like_Rayon' : ,
	'like_Denim' : ,
	'like_Acetate' : ,
	'like_Flannel' : ,
	'like_Fleece' : ,
	'like_Tweed' : ,
	'like_Satin' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_Canada' : ,
	'like_USA' : ,
	'like_Brazil' : ,
	'like_China' : ,
	'like_Taiwan' : ,
	'like_South Korea' : ,
	'like_Singapore' : ,
	'like_UK' : ,
	'like_Italy' : ,
	'like_Japan' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_high_views' : ,
	'like_high_buys' : ,
	'like_high_likes' : ,
	
	// each of these probabilties can be in range >0 and <1
	'like_new' : ,
	'like_sale' : ,
	'like_trending' : 
});