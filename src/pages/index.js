import Navigation from "@/components/Navigation"
import Advertisement from "@/components/Advertisement"
import ShopInfo from "@/components/ShopInfo"
import ExtraAction from "@/components/ExtraAction"
import ShopMenu from "@/components/ShopMenu"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Advertisement />
      <ShopInfo />
      <ExtraAction />
      <ShopMenu />
    </main>
  )
}
