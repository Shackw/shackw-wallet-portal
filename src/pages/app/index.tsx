import { ArrowRight, KeyRound, Users, Wand2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PortalHomePage = () => {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge>Portal</Badge>
          <h1 className="text-2xl font-semibold tracking-tight">Shackw Wallet Portal</h1>
        </div>
        <p className="text-muted-foreground">
          ここは将来「ログイン後の管理画面」になる想定。Step1では“箱”だけ作って、順次機能を埋める。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <KeyRound className="h-4 w-4" />
              dApp登録 / API Key
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            dApp登録して、Quote発行専用のAPI Keyを発行（予定）
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <Users className="h-4 w-4" />
              組織機能
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">Step2で拡張：組織アドレス帳・一括送金など</CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <Wand2 className="h-4 w-4" />
              認証
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            WC接続 → メッセージ署名 → サーバ検証（予定）
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Step1: 仮置きメニュー</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <Card className="border-dashed">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Login（準備中）</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                WalletConnectでログインできるUIをここに置く
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Create dApp（準備中）</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">登録フォーム→API Key発行へ繋ぐ</CardContent>
            </Card>
          </div>

          <Separator />

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="default" disabled>
              ログインして開始 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground">※ いまは骨組みだけ。まずはLP/テスター導線を完成させる。</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortalHomePage;
