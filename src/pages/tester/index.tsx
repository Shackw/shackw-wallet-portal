import { ExternalLink, Smartphone, Shield, Timer } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TesterPage = () => {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge>Step1</Badge>
          <h1 className="text-2xl font-semibold tracking-tight">Tester Program</h1>
        </div>
        <p className="text-muted-foreground">X（旧Twitter）のDMでテスター参加。DB管理なし・最小運用で回す想定。</p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <Smartphone className="h-4 w-4" />
              配布形態
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">iOS: TestFlight / Android: APK（想定）</CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <Timer className="h-4 w-4" />
              目的
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            「使える状態」にして、実運用の手応えと改善点を集める。
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <Shield className="h-4 w-4" />
              注意
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            初期版なので挙動は変わる。テスト目的で利用。
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>参加手順</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal space-y-2 pl-5 text-sm">
            <li>XでShackwにDM（「テスター希望」と送る）</li>
            <li>返信の案内に従ってインストール</li>
            <li>フィードバック（バグ/要望/体験）をDMで送る</li>
          </ol>

          <Separator />

          <div className="flex flex-wrap items-center gap-2">
            <Button asChild>
              {/* ここは後でXのURLに差し替え */}
              <a href="#" target="_blank" rel="noreferrer">
                XでDMする <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/">LPに戻る</Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            ※ ここは最小運用（DBなし）前提。将来、Portal上で申請管理に拡張する可能性あり。
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TesterPage;
