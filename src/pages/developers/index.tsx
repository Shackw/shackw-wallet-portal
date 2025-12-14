import { Code, KeyRound, ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const DevelopersPage = () => {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge>Step1</Badge>
          <h1 className="text-2xl font-semibold tracking-tight">Developers</h1>
        </div>
        <p className="text-muted-foreground">
          Shackw Wallet を自前アプリ / dApp に組み込むための入口。まずは「dApp登録」と「Quote発行」から。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <Code className="h-4 w-4" />
              Integration
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            dAppがQuote作成 → Nativeで承認 → 送金実行（Nativeが実行主体）
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <KeyRound className="h-4 w-4" />
              API Key
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Step1では API Key 認証（スコープは Quote 作成のみ）。
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <ShieldCheck className="h-4 w-4" />
              Safety
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Quoteは短命（期限が短い）。送金前にNative側で承認。
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Step1で提供するもの（仮）</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>dApp登録（名称・連絡先・用途などの基本情報）</li>
            <li>API Key発行（Quote作成専用）</li>
            <li>統合ガイド（ドキュメント）</li>
          </ul>

          <Separator />

          <div className="flex flex-wrap items-center gap-2">
            <Button asChild>
              <Link to="/app">
                Portalへ進む <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/">LPに戻る</Link>
            </Button>
            <Button variant="outline" disabled>
              Docs（準備中） <FileText className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">※ Step1は「入口を作る」段階。SDKや高度な管理機能は後で拡張。</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DevelopersPage;
