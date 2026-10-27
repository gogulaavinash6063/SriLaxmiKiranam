import {
  Carrot, Wheat, Bean, Droplet, Cookie, CupSoda, Milk, SprayCan, Candy,
  Flame, Sparkles, Flower2, PartyPopper, Fuel, Cable, ShoppingBasket,
} from "lucide-react";

const icons = {
  vegetables: Carrot,
  rice: Wheat,
  pulses: Bean,
  oil: Droplet,
  snacks: Cookie,
  beverages: CupSoda,
  milk: Milk,
  household: SprayCan,
  chocolates: Candy,
  spices: Flame,
  care: Sparkles,
  pooja: Flower2,
  crackers: PartyPopper,
  petrol: Fuel,
  wire: Cable,
};

function CategoryIcon({ name, size = 28 }) {
  const Icon = icons[name] || ShoppingBasket;
  return <Icon size={size} strokeWidth={2} aria-hidden="true" />;
}

export default CategoryIcon;
