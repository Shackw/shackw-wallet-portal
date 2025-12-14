import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Stablecoin payments, made simple.</h1>
        <p className="text-muted-foreground">Shackw Wallet is a minimal wallet for low-volatility payments.</p>

        <div className="flex flex-wrap gap-2 pt-2">
          <Button asChild>
            <Link to="/tester">Become a Tester</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/developers">Integrate as a dApp</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Minimal</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">No NFTs, no ads, no noise.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stablecoins only</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">JPYC / USDC / EURC.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Developer-friendly</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">Quote-based flow with native approval.</CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
