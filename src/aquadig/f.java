package aquadig;

import javax.microedition.lcdui.Graphics;

public final class f extends e {
   static final long a = Mid.frameMs * 2;
   boolean b;
   static int c;
   private int d_ = 0;

   public f() {
      super(-999, -999);
      this.b = false;
      c = d.x.getHeight();
   }

   public final void a() {
      if (this.b) {
         this.d_++;
         this.c();
         this.Q = this.Q + this.W;
         this.R = this.R + this.X;

         boolean var1;
         for (var1 = false; this.r(); this.R--) {
            var1 = true;
         }

         if (var1) {
            this.X = -this.X / 3;
         }

         this.X++;
         if (this.X > 32) {
            this.X = 32;
         }

         if (this.d_ > a) {
            this.b();
         }
      }
   }

   public final void c(int var1, int var2) {
      if (!this.b) {
         this.d_ = 0;
         this.b = true;
         this.V = true;
         this.Q = var1;
         this.R = var2;
      }
   }

   public final void a(Graphics var1) {
      int var2 = 0;
      if (h.c % 10 < 5) {
         var2 = c;
      }

      int var3 = this.Q + g.l - c / 2;
      int var4 = this.R + g.m - c / 2;
      var1.setClip(var3, var4, c, c);
      var1.drawImage(d.x, var3 - var2, var4, 20);
   }

   public final void b() {
      try {
         g.a(500L, 6);
         Mid.c(1000);
         boolean var1 = false;
         boolean var2 = false;

         for (int var3 = this.S - 1; var3 < this.S + 1 + 1; var3++) {
            for (int var4 = this.T - 1; var4 < this.T + 1 + 1; var4++) {
               if (var3 >= 0 && var3 < 32 && var4 >= 0 && var4 < 900) {
                  if (d.e.S == var3 && d.e.T == var4) {
                     int var5 = this.S - var3;
                     int var6 = 160 / (Math.abs(var5) + 1);
                     d.e.a(var6);
                  }

                  g.a(var3, var4);
                  if (!var2 && g.g(var3, var4)) {
                     d.e.n();
                     g.b(this.S + (this.T - 1) * 32, -1, true);
                     if (this.S != 0) {
                        g.b(this.S - 1 + (this.T - 1) * 32, -1, true);
                     }

                     if (this.S < 31) {
                        g.b(this.S + 1 + (this.T - 1) * 32, -1, true);
                        g.b(this.S + 1 + this.T * 32, -1, true);
                     }

                     if (this.T < 899) {
                        g.b(this.S + (this.T + 1) * 32, -1, true);
                     }

                     if (this.S != 0 && this.T < 899) {
                        g.b(this.S - 1 + (this.T + 1) * 32, -1, true);
                     }

                     if (this.S < 31 && this.T < 899) {
                        g.b(this.S + 1 + (this.T + 1) * 32, -1, true);
                     }

                     if (this.S != 0) {
                        g.b(this.S - 1 + this.T * 32, -1, true);
                     }

                     var2 = true;
                  }
               }
            }
         }

         h.e(this.Q, this.R);
         this.b = false;
         this.Q = -999;
         this.R = -999;
         this.W = 0;
         this.X = 0;
         this.V = false;
      } catch (Throwable var7) {
      }
   }
}
