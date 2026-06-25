package aquadig;

import java.io.PrintStream;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;

public final class a extends e {
   private static int ab = Mid.frameMs * 5;
   int a = 0;
   int b_ = 0;
   boolean c_ = false;
   boolean d_ = false;
   private static byte ac = 3;
   int e;
   int f = 0;
   long g_ = 0L;
   long h_ = 0L;
   long i = 0L;
   long j = 0L;
   int k = 0;
   int l = 0;
   boolean m = false;
   boolean n = false;
   boolean o = false;
   boolean p = false;
   int q;
   int r;
   int s;
   public int t = 0;
   public int u = 0;
   public boolean v = false;
   byte[] w = new byte[]{0, 0, 0, 0, 0};
   byte[] x = new byte[]{0, 0, 0};
   boolean[] y = new boolean[]{false, false, false, false};
   int z;
   int A;
   int[] B;
   boolean C = false;
   int D = 0;
   int E = 0;
   boolean F = false;
   int G = -1;
   int H = 0;
   int I = 0;
   g J;
   f K;
   static Image L = Mid.a("/res/subrightleft.png");
   static Image M = Mid.a("/res/blades.png");
   final boolean[] N = new boolean[b.g.length];
   static final boolean[] O = new boolean[4];
   d P;

   public a(g var1, boolean var2, d var3) {
      super(g.a(9), g.a(3));
      this.P = var3;
      this.J = var1;
      this.K = new f();
      this.U = 11;
      this.c_ = true;
      this.v = false;
      this.c();
      this.A = b.a[4][this.w[4]];
      this.B = new int[12];
      this.H = 0;
      this.z = this.g();

      for (int var4 = 0; var4 < this.N.length; var4++) {
         this.N[var4] = false;
      }

      for (int var5 = 0; var5 < O.length; var5++) {
         O[var5] = false;
      }

      this.o = false;
   }

   public final void a() {
      this.k++;
      this.l++;
      this.c();
      this.e = (this.R - 128) / 4;
      if (this.e > this.f) {
         this.f = this.e;
         this.h_ = this.g_;
         Mid.b.c((byte)6);
      }

      if (!d.Y && this.T == g.B) {
         com.vlm.redstar.client.ui.a.a(c.ae, c.br);
         d.Y = true;
      }

      for (int var1 = 0; var1 < this.N.length; var1++) {
         if (!this.N[var1]) {
            if (this.e >= b.g[var1]) {
               for (int var2 = 0; var2 < d.a_.length; var2++) {
                  d.a_[var2] = false;
               }

               com.vlm.redstar.client.ui.a.a(c.aA, c.cc[var1]);
               this.t = this.t + b.h[var1];
               this.N[var1] = true;
            }
            break;
         }
      }

      if (this.e < 1) {
         if (this.d_) {
            this.d_ = false;
            d.a_[0] = false;
            d.a_[1] = false;
            Mid.c(500);
         }

         this.z = this.z + this.g() / 10;
         if (this.z > this.g()) {
            this.z = this.g();
         }

         if (Mid.a == 101 && this.p && this.Q > g.b && this.Q < g.b + g.c_) {
            this.p = false;
            Mid.b.b((byte)106);
            this.X = 0;
         }

         if (this.I > 0) {
            this.I = 0;
         }
      } else {
         this.p = true;
         if (this.T >= 10) {
            g.b = this.Q - g.c_ + 15 + 3;
         }
      }

      if (this.z < 1) {
         for (int var4 = 0; var4 < d.a_.length; var4++) {
            d.a_[var4] = false;
         }

         this.n = false;
         if (this.b_ == 0) {
            this.K.c(this.Q, this.R);
            this.K.V = false;
            this.K.c();
            this.K.b();
         }

         this.b_++;
         if (this.b_ > 50) {
            com.vlm.redstar.client.ui.a.a(c.x, c.aT);
            d.X = true;
            Mid.b.b((byte)107);
            d.aw = true;
            d.ax = false;
            if (com.vlm.redstar.client.ui.d.d && Mid.k != 3) {
               Mid.a((byte)3, 1);
            }

            d.b(false);
         }
      }

      if (this.n) {
         this.u();
      } else {
         if (d.a_[0]) {
            this.c(0, -1);
         } else if (this.I > 0) {
            int var5 = -b.a[1][b.a[1].length - 1] / b.a[1][0];
            this.c(0, var5);
            this.I--;
         }

         if (d.a_[1]) {
            this.c(0, 1);
            this.g(1);
         }

         if (d.a_[2]) {
            if (this.W == 0 && !this.c_) {
               this.A();
            } else {
               this.c(-1, 0);
               this.g(2);
            }
         }

         if (d.a_[3]) {
            if (this.W == 0 && this.c_) {
               this.A();
            } else {
               this.c(1, 0);
               this.g(3);
            }
         }

         long var6;
         if ((var6 = System.currentTimeMillis()) - this.i >= 2500L) {
            this.a(8);
            this.i = var6;
         }

         if (this.l > ab && (d.a_[0] || d.a_[1]) && !this.n && !this.d_ && this.T > 4 && g.d(this.S, this.T + 1)) {
            this.d_ = true;
            d.a(c.aH + c.aI);
         }

         if (this.z >= 1) {
            label209: {
               this.Q = this.Q + this.W;
               this.R = this.R + this.X;
               a var10000;
               int var10001;
               if (this.Q - this.U < 0) {
                  var10000 = this;
                  var10001 = this.U + 1;
               } else {
                  if (this.Q + this.U <= 1024) {
                     break label209;
                  }

                  var10000 = this;
                  var10001 = 1024 - this.U - 2;
               }

               var10000.Q = var10001;
            }

            if (this.R - this.U >= 0 && this.R + this.U > 28800) {
               this.R = 28800 - this.U - 2;
            }

            if (this.T == 898 && !d.aw) {
               d.aw = true;
               d.ax = true;
               if (com.vlm.redstar.client.ui.d.d) {
                  Mid.a((byte)4, 1);
               }

               d.X = true;
               com.vlm.redstar.client.ui.a.a(c.x, c.bl);
            }

            boolean var3 = false;
            if (this.m) {
               this.Z = false;
               this.aa = false;
               if (this.W < 0) {
                  if (this.s()) {
                     var3 = true;
                     this.Z = true;
                  }
               } else if (this.W > 0 && this.t()) {
                  var3 = true;
                  this.aa = true;
               }

               if (var3) {
                  this.Q = this.Q - this.W;
                  this.W = -this.W / 2;
                  var3 = false;
               }

               this.Y = false;
               if (this.X < 0) {
                  if (this.q()) {
                     var3 = true;
                     this.I = 0;
                     this.k = 0;
                     this.l = 0;
                     if (this.d_) {
                        this.d_ = false;
                        d.a_[0] = false;
                        Mid.c(500);
                        d.a(c.aH + c.aJ);
                     }
                  }
               } else if (this.X > 0 && this.r()) {
                  var3 = true;
                  this.Y = true;
                  if (this.d_) {
                     this.d_ = false;
                     d.a_[1] = false;
                     Mid.c(500);
                     d.a(c.aH + c.aJ);
                  }

                  this.k = 0;
                  this.l = 0;
               }

               if (var3) {
                  this.R = this.R - this.X;
                  if (Math.abs(this.X) > 3) {
                     this.X = -this.X / 2;
                  }
               }
            }

            label199: {
               a var7;
               int var9;
               if (this.W < 0) {
                  var7 = this;
                  var9 = this.W + 1;
               } else {
                  if (this.W <= 0) {
                     break label199;
                  }

                  var7 = this;
                  var9 = this.W - 1;
               }

               var7.W = var9;
            }

            a var8;
            int var10;
            if (this.m) {
               if (this.Y) {
                  return;
               }

               if (this.X < this.z()) {
                  if (this.X == 0 && var6 - this.j < 240L) {
                     return;
                  }

                  this.X++;
                  if (this.X == 0 && this.j > -1L) {
                     this.j = System.currentTimeMillis();
                     return;
                  }

                  return;
               }

               var8 = this;
               var10 = this.X - 1;
            } else {
               var8 = this;
               var10 = this.X + 1;
            }

            var8.X = var10;
         }
      }
   }

   public final void b() {
      if (this.n) {
         this.a++;
         if (this.a >= 2) {
            this.a = 0;
         }
      }
   }

   public final void a(Graphics var1) {
      if (this.V) {
         int var2 = this.Q + g.l;
         int var3 = this.R + g.m;
         var2 = var2 - this.U - 3;
         var3 = var3 - this.U - 2;
         if (this.z >= 1) {
            if (this.n) {
               if (this.Q != this.q) {
                  var3 += Mid.a(3) - 1;
               }

               if (this.R != this.r) {
                  var2 += Mid.a(3) - 1;
               }

               int var4;
               int var5;
               int var7;
               int var8;
               int var9;
               int var10;
               label70: {
                  Graphics var28;
                  int var30;
                  int var32;
                  int var10003;
                  byte var10004;
                  label69: {
                     this.c();
                     var4 = g.l + this.S * 32;
                     var5 = g.m + this.T * 32;
                     int var6 = 0;
                     var7 = 0;
                     var8 = 0;
                     var9 = 0;
                     var10 = 0;
                     switch (this.s) {
                        case 1:
                           var7 = var4;
                           var8 = var5;
                           var9 = 32;
                           var10 = var3 + 13 - var5;
                           if (g.c(var6 = this.S + (this.T - 1) * 32) == 0) {
                              var1.setClip(var4, var5 - 3, 32, 3);
                              g.A = true;
                              g.a(var1, var6, var4, var5 - 32, this.s);
                           }

                           if (g.c(var6 = this.S + 1 + this.T * 32) == 0) {
                              var1.setClip(var4 + 32, var5, 3, var10);
                              g.A = true;
                              g.a(var1, var6, var4 + 32, var5, 2);
                           }

                           if (g.c(var6 = this.S - 1 + this.T * 32) != 0) {
                              break label70;
                           }

                           var1.setClip(var4 - 3, var5, 3, var10);
                           g.A = true;
                           var28 = var1;
                           var30 = var6;
                           var32 = var4 - 32;
                           var10003 = var5;
                           var10004 = 3;
                           break label69;
                        case 2:
                           var7 = var2 + 15;
                           var8 = var5;
                           var9 = 32 - (var7 - var4);
                           var10 = 32;
                           if (g.c(var6 = this.S + 1 + this.T * 32) == 0) {
                              var1.setClip(var4 + 32, var5, 3, 32);
                              g.A = true;
                              g.a(var1, var6, var4 + 32, var5, this.s);
                           }

                           if (g.c(var6 = this.S + (this.T - 1) * 32) == 0) {
                              var1.setClip(var7, var5 - 3, var9, 3);
                              g.A = true;
                              g.a(var1, var6, var4, var5 - 32, 1);
                           }

                           if (g.c(var6 = this.S + (this.T + 1) * 32) != 0) {
                              break label70;
                           }

                           var28 = var1;
                           var30 = var7;
                           var32 = var5;
                           break;
                        case 3:
                           var7 = var4;
                           var8 = var5;
                           var9 = var2 + 15 - var4;
                           var10 = 32;
                           if (g.c(var6 = this.S - 1 + this.T * 32) == 0) {
                              var1.setClip(var4 - 3, var5, 3, 32);
                              g.A = true;
                              g.a(var1, var6, var4 - 32, var5, this.s);
                           }

                           if (g.c(var6 = this.S + (this.T - 1) * 32) == 0) {
                              var1.setClip(var4, var5 - 3, var9, 3);
                              g.A = true;
                              g.a(var1, var6, var4, var5 - 32, 1);
                           }

                           if (g.c(var6 = this.S + (this.T + 1) * 32) == 0) {
                              var28 = var1;
                              var30 = var4;
                              var32 = var5;
                              break;
                           }
                        default:
                           break label70;
                     }

                     var28.setClip(var30, var32 + 32, var9, 3);
                     g.A = true;
                     var28 = var1;
                     var30 = var6;
                     var32 = var4;
                     var10003 = var5 + 32;
                     var10004 = 0;
                  }

                  g.a(var28, var30, var32, var10003, var10004);
               }

               var1.setClip(var7, var8, var9, var10);
               g.A = true;
               int var25 = this.S + this.T * 32;
               g.a(var1, var25, var4, var5, -1);
               this.c(var1);
            }

            Graphics var29;
            Image var31;
            int var33;
            if (this.c_) {
               int var13 = var2 - 10;
               int var26 = var3 + 1;
               var1.setClip(var13, var26, 32, 32);
               var13 -= this.a * 32 + 64 * this.w[4];
               if (this.w[4] >= ac) {
                  var13 -= 128;
               }

               var1.drawImage(M, var13, var26, 20);
               var1.setClip(var2, var3, 31, 27);
               var29 = var1;
               var31 = L;
               var33 = var2 - 31;
            } else {
               int var15 = var2 + 31 - 22;
               int var27 = var3 + 1;
               var1.setClip(var15, var27, 32, 32);
               var15 -= this.a * 32 + 64 * this.w[4];
               var1.drawImage(M, var15, var27, 20);
               var1.setClip(var2, var3, 31, 27);
               var29 = var1;
               var31 = L;
               var33 = var2;
            }

            var29.drawImage(var31, var33, var3, 20);
         }
      }
   }

   private void c(int var1, int var2) {
      if (this.m) {
         label71: {
            a var10000;
            boolean var10001;
            if (var1 > 0) {
               if (!this.t()) {
                  this.W += var1;
               }

               var10000 = this;
               var10001 = false;
            } else {
               if (var1 >= 0) {
                  break label71;
               }

               if (!this.s()) {
                  this.W += var1;
               }

               var10000 = this;
               var10001 = true;
            }

            var10000.c_ = var10001;
         }

         label65: {
            PrintStream var3;
            String var5;
            if (var2 > 0) {
               if (!this.r()) {
                  this.X += var2;
                  break label65;
               }

               var3 = System.out;
               var5 = "Digger.engineThrust() we should turn autopilot off here 1";
            } else {
               if (var2 >= 0) {
                  break label65;
               }

               if (!this.q()) {
                  this.X += var2;
                  break label65;
               }

               var3 = System.out;
               var5 = "Digger.engineThrust() we should turn autopilot off here 2";
            }

            var3.println(var5);
         }

         this.W += var1;
         this.X += var2;
         if (this.W > this.y()) {
            this.W = this.y();
         }

         if (this.X > this.y() && this.X > this.z()) {
            this.X = Math.max(this.y(), this.z());
         }

         if (this.W < -this.y()) {
            this.W = -this.y();
         }

         if (this.X < -this.y()) {
            a var4;
            int var6;
            if (this.I < 1) {
               var4 = this;
               var6 = -this.y();
            } else {
               this.X = -(b.a[1][b.a[1].length - 1] / b.a[1][0] * 8);
               if (this.X >= -32) {
                  return;
               }

               var4 = this;
               var6 = -32;
            }

            var4.X = var6;
         }
      }
   }

   private void u() {
      if (!g.c(this.q / 32, this.r / 32)) {
         this.n = false;
         if (h.c % 2 == 0) {
            h.b(this.q, this.r);
         }

         this.a(1);
      } else {
         label82: {
            int var1 = 0;
            int var2 = 0;
            a var10000;
            boolean var10001;
            if (this.Q < this.q) {
               this.A = this.A + this.w();
               if (this.A >= 4) {
                  var1 = this.A / 4;
                  if ((var2 = this.q - this.Q) < var1) {
                     var1 = var2;
                  }

                  this.Q += var1;
                  this.A = 0;
               }

               if (this.q - this.Q <= 2) {
                  break label82;
               }

               var10000 = this;
               var10001 = false;
            } else {
               if (this.Q <= this.q) {
                  break label82;
               }

               this.A = this.A + this.w();
               if (this.A >= 4) {
                  var1 = this.A / 4;
                  if ((var2 = this.Q - this.q) < var1) {
                     var1 = var2;
                  }

                  this.Q -= var1;
                  this.A = 0;
               }

               if (this.Q - this.q <= 2) {
                  break label82;
               }

               var10000 = this;
               var10001 = true;
            }

            var10000.c_ = var10001;
         }

         label70: {
            a var10;
            int var11;
            if (this.R < this.r) {
               this.A = this.A + this.w();
               if (this.A < 4) {
                  break label70;
               }

               int var5 = this.A / 4;
               int var9;
               if ((var9 = this.r - this.R) < var5) {
                  var5 = var9;
               }

               var10 = this;
               var11 = this.R + var5;
            } else {
               if (this.R <= this.r) {
                  break label70;
               }

               this.A = this.A + this.w();
               if (this.A < 4) {
                  break label70;
               }

               int var6 = this.A / 4;
               var10 = this;
               var11 = this.R - var6;
            }

            var10.R = var11;
            this.A = 0;
         }

         this.a(1);
         if (this.Q == this.q && this.R == this.r) {
            g.a(this.S, this.T, true);
            this.n = false;
            this.k = 0;
            this.l = 0;
            this.j = -1L;
            if (this.o) {
               com.vlm.redstar.client.ui.a.a(c.aF, c.aG);
               this.o = false;
            }

            if (g.g(this.S, this.T)) {
               this.n();
               g.b(this.S + this.T * 32, -1, true);
            }

            Mid.b.c((byte)0);
         }

         if (h.c % 2 == 0) {
            h.c(this.q + g.l, this.r + g.m);
         }
      }
   }

   private void g(int var1) {
      if (!this.n && this.Y) {
         this.c();
         int var2 = this.S;
         int var3 = this.T;
         int var4;
         if (g.c(var4 = this.S + (this.T + 1) * 32) != 0) {
            this.s = var1;
            if (var1 == 1) {
               var3++;
            } else if (var1 == 2) {
               if (!this.Z) {
                  return;
               }

               var2--;
            } else {
               if (var1 != 3) {
                  return;
               }

               if (!this.aa) {
                  return;
               }

               var2++;
            }

            if (g.b(var2, var3) && !g.d(var2, var3)) {
               byte var5;
               if ((var5 = g.c(var3 * 32 + var2)) - this.w[4] > 3 && !O[var5 - 4]) {
                  this.o = true;
                  O[var5 - 4] = true;
               }

               this.q = g.a(var2);
               this.r = g.a(var3);
               this.n = true;
            }
         }
      }
   }

   public final void c() {
      this.S = this.Q / 32;
      this.T = this.R / 32;
      a var10000;
      boolean var10001;
      if (this.T * 32 + this.S < 128) {
         var10000 = this;
         var10001 = false;
      } else {
         var10000 = this;
         var10001 = true;
      }

      var10000.m = var10001;
   }

   final void d() {
      if (!this.n && this.x[0] > 0 && this.z > 0 && !this.K.b) {
         this.K.c(this.Q, this.R);
         this.x[0]--;
         d.a(c.bc);
         Mid.b.c((byte)2);
      }
   }

   final void e() {
      if (this.x[1] > 0 && this.z > 0) {
         this.z = this.z + b.b[1];
         this.x[1]--;
         if (this.z > this.g()) {
            this.z = this.g();
         }

         d.a(c.be);
         Mid.b.c((byte)1);
      }
   }

   final void f() {
      if (this.x[2] > 0 && this.z > 0) {
         this.x[2]--;
         this.I = 500;
         d.a(c.bd);
         Mid.b.c((byte)3);
      }
   }

   final void a(int var1) {
      for (int var2 = 0; var2 < var1; var2++) {
         if (Mid.b()) {
            h.a(this.Q + Mid.b(this.U), this.R + Mid.b(this.U));
            this.z--;
            if (this.z < 0) {
               this.z = 0;
            }
         }
      }
   }

   final int g() {
      return b.a[0][this.w[0]];
   }

   private int v() {
      byte var1 = 0;
      if (this.F) {
         var1 = 4;
      }

      return b.a[4][this.w[4]] + var1;
   }

   private int w() {
      int var1 = this.q / 32;
      int var2 = this.r / 32;
      int var3;
      byte var4 = g.c(var3 = var1 + var2 * 32);
      return this.v() / (g.i[var4] + 1);
   }

   private int x() {
      return b.a[1][this.w[1]] / (b.a[1][0] >> 1);
   }

   private int y() {
      int var1;
      if ((var1 = this.k / (Mid.frameMs >> 2) + 4) > this.x() << 1) {
         var1 = this.x() << 1;
      }

      return var1;
   }

   final int h() {
      return b.e[this.w[1]];
   }

   final int i() {
      byte var1 = 0;
      if (this.C) {
         var1 = 20;
      }

      return b.a[2][this.w[2]] + var1;
   }

   private int z() {
      if (this.z < 1) {
         return 0;
      } else {
         int var1 = this.k / (Mid.frameMs >> 2) + 3;
         int var2 = b.a[3][this.w[3]] + (this.D << 1);
         if (var1 > var2) {
            var1 = var2;
         }

         return var1;
      }
   }

   public final void j() {
      this.G = -1;
      int var1 = Integer.MAX_VALUE;

      for (int var2 = 0; var2 < this.B.length; var2++) {
         if (this.B[var2] > 0 && var1 > b.f[var2]) {
            this.G = var2;
            var1 = b.f[var2];
         }
      }

      if (this.G != -1) {
         d.B = true;
         com.vlm.redstar.client.ui.a.a(c.aq, c.aw + c.bV[this.G] + c.ay + " \n" + '\u0000' + " \n" + d.C + " \n" + '\u0001');
      }
   }

   public final void k() {
      this.u = 0;

      for (int var1 = 0; var1 < this.B.length; var1++) {
         int var2 = this.B[var1] * b.f[var1];
         this.t += var2;
         this.u += var2;
         this.B[var1] = 0;
      }

      this.E = this.E + this.H;
      int var4 = this.E;

      for (int var5 = 0; var5 < var4 / 5; var5++) {
         int var3 = Math.abs(Mid.b(8));
         g.a_[var3]++;
         this.E -= 5;
      }

      this.H = 0;
      this.v = true;
   }

   public final boolean l() {
      return this.H > 0;
   }

   public final boolean m() {
      for (int var1 = 0; var1 < this.x.length; var1++) {
         if (this.x[var1] > 0) {
            return true;
         }
      }

      return false;
   }

   public static void b(int var0) {
      Short var1 = new Short((short)var0);
      byte var3;
      d.A = var3 = (Byte)g.k.remove(var1);
      d.au = true;
      com.vlm.redstar.client.ui.a.a(c.bW[var3], c.bX[var3]);
   }

   private void A() {
      this.c_ = !this.c_;
   }

   private void c(Graphics var1) {
      Graphics var18;
      Image var19;
      int var10002;
      int var10003;
      label56: {
         int var2 = this.q / 32;
         int var3 = this.r / 32;
         int var4;
         byte var5 = g.c(var4 = var2 + var3 * 32);
         int var6 = g.l + var2 * 32;
         int var7 = g.m + var3 * 32;
         int var8;
         byte var14;
         int var10001;
         switch (this.s) {
            case 1:
               boolean var11 = false;
               int var13 = this.R + g.m + 13 - var7;
               if (var2 != 31) {
                  var14 = g.c(var4 + 1);
                  if (var5 > var14 && var14 != 0) {
                     var1.setClip(var6 + 32, var7, 3, var13);
                     var1.drawImage(g.s, var6 + 32 - g.i[var14] * 32, g.m + this.r / 32 * 32, 20);
                  }
               }

               if (var2 == 0) {
                  return;
               }

               var14 = g.c(var4 - 1);
               if (var5 <= var14 || var14 == 0) {
                  return;
               }

               var1.setClip(var6 - 3, var7, 3, var13);
               var18 = var1;
               var19 = g.s;
               var10002 = var6 - 3 - g.i[var14] * 32;
               var10003 = g.m + this.r / 32 * 32;
               break label56;
            case 2:
               var8 = var6 + 32 - (this.Q + g.l);
               boolean var12 = false;
               var14 = g.c(var4 - 32);
               if (var5 > var14 && var14 != 0) {
                  var1.setClip(var6 + 32 - var8, var7 - 3, var8, 3);
                  var1.drawImage(g.s, var6 - g.i[var14] * 32, g.m + this.r / 32 * 32 - 3, 20);
               }

               var14 = g.c(var4 + 32);
               if (var5 <= var14 || var14 == 0) {
                  return;
               }

               var18 = var1;
               var10001 = var6 + 32 - var8;
               break;
            case 3:
               var8 = this.Q + g.l - var6;
               boolean var9 = false;
               var14 = g.c(var4 - 32);
               if (var5 > var14 && var14 != 0) {
                  var1.setClip(var6, var7 - 3, var8, 3);
                  var1.drawImage(g.s, var6 - g.i[var14] * 32, g.m + this.r / 32 * 32 - 3, 20);
               }

               var14 = g.c(var4 + 32);
               if (var5 > var14 && var14 != 0) {
                  var18 = var1;
                  var10001 = var6;
                  break;
               }

               return;
            default:
               return;
         }

         var18.setClip(var10001, var7 + 32, var8, 3);
         var18 = var1;
         var19 = g.s;
         var10002 = var6 - g.i[var14] * 32;
         var10003 = g.m + (this.r / 32 + 1) * 32 - 3;
      }

      var18.drawImage(var19, var10002, var10003, 20);
   }

   public final void n() {
      d.a(c.av);
      this.z = this.z - b.a[0][b.a[0].length - 1] / 5;
      this.a(20);
      Mid.c(1000);
      g.a(500L, 6);
   }
}
