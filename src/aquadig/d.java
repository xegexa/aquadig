package aquadig;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.Vector;
import javax.microedition.lcdui.Canvas;
import javax.microedition.lcdui.Font;
import javax.microedition.lcdui.GameDimensions;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;
import javax.microedition.rms.RecordEnumeration;
import javax.microedition.rms.RecordStore;
import javax.microedition.rms.RecordStoreException;
import javax.microedition.rms.RecordStoreNotFoundException;

public final class d extends Canvas {
   static boolean[] a_ = new boolean[5];
   static int bw;
   static int bh;
   g gWorld;
   static a e;
   static long f = 0L;
   Image gImg;
   Image hImg;
   Image i;
   Image j;
   Image k;
   Image l;
   Image m;
   Image[] n = new Image[3];
   Image[] o = new Image[5];
   private static int aF = 69928;
   final int[] p;
   final int[] q;
   Image r;
   Image s;
   Image t;
   Image u;
   static Image v;
   static Image w;
   static Image x;
   static int y = 0;
   static boolean z = false;
   static int A = -1;
   static boolean B = false;
   static int C = 0;
   static boolean D = false;
   boolean E = false;
   boolean F = false;
   int G = 0;
   Mid H;
   static com.vlm.redstar.client.ui.a I;
   static com.vlm.redstar.client.ui.c J;
   static com.vlm.redstar.client.ui.c K;
   com.vlm.redstar.client.ui.d L;
   int M;
   int N;
   int O;
   int P;
   static int Q = 0;
   boolean R = false;
   private int aG;
   boolean S = false;
   int T;
   byte U;
   boolean V = true;
   boolean W = false;
   static boolean X = false;
   static boolean Y = false;
   static int Z = 0;
   static int aa = 0;
   static int ab = 0;
   static String ac = "";
   static int ad = 0;
   int ae = 0;
   int af = 0;
   int ag;
   private boolean aH = false;
   private Vector aI = null;
   private int aJ;
   private int aK;
   static int ah;
   static int ai;
   public byte aj = 0;
   Image ak;
   Image al;
   Image am;
   Image an;
   static byte ao = -1;
   static boolean ap = true;
   static boolean aq = false;
   static boolean ar = true;
   static boolean as = false;
   boolean at = true;
   static boolean au = false;
   private Image aL;
   private int aM;
   private final int[] aN = new int[]{0, 8671760, 10840856};
   private int aO;
   private int aP;
   private int aQ;
   private int aR;
   private final int[] aS = new int[]{3247359, 1604607};
   private final int[] aT = new int[]{25566, 17052};
   private int aU;
   private final int[] aV = new int[]{11, 23, 36};
   byte av = 100;
   private static short[] aW;
   private static short[] aX;
   private boolean aY = false;
   private boolean aZ = false;
   private static int ba = 0;
   public static boolean aw = false;
   public static boolean ax = false;
   byte ay = 3;
   byte az = -1;
   static boolean aA = false;
   final int[][] aB = new int[][]{{49152, 8454016, 32768}, {16742657, 16751617, 16728833}, {16711680, 16734977, 13181441}};
   final int[] aC = new int[]{16776960, 16711573, 14080000};
   final int[][] aD = new int[][]{{255, 8421631, 128}, {16711680, 16734977, 13181441}};
   private int bb = 0;
   private boolean bc = false;
   private boolean bd = false;
   private int be = 0;
   static boolean aE = false;

   public d(Mid var1) {
      this.H = var1;
      Mid.h = com.vlm.redstar.client.core.csp.a.a(var1, "AquaDig");
      this.s();
      this.aJ = 10;
      this.p = new int[3];
      this.q = new int[3];
      this.applyLayoutDimensions();
      this.t();
      this.u();
      this.a(true, false);
      this.B();
   }

   private void applyLayoutDimensions() {
      bw = GameDimensions.getWidth();
      bh = GameDimensions.getHeight();
      this.aG = bw - 40;
      ai = 10;
      ah = bw - 2 * ai;
      this.aK = bw - (bw / 10 << 1);
      if (this.o != null && this.o[2] != null) {
         this.ag = this.o[2].getHeight();
      }

      this.p[0] = bw / 6;
      this.p[1] = bw / 2;
      this.p[2] = bw * 2 / 3;
      this.q[0] = bh - 80;
      this.q[1] = bh - 73;
      this.q[2] = bh - 79;
      g.y = bw;
      g.z = bh;
      h.a = bw;
      h.b = bh;
   }

   protected final void hideNotify() {
      try {
         if (this.ay != 3) {
            if (this.ay == 0) {
               if (e != null) {
                  if (!e.d_) {
                     for (int var1 = 0; var1 < a_.length; var1++) {
                        a_[var1] = false;
                     }
                  }

                  this.az = Mid.a;
                  this.b((byte)115);
               }

               if (com.vlm.redstar.client.ui.d.d) {
                  Mid.a();
               }
            }
         }
      } catch (Throwable var2) {
      }
   }

   protected final void showNotify() {
      if (!this.H.p) {
         this.H.p = true;
         this.ay = 0;
      } else if (this.ay == 0) {
         this.repaint();
         this.serviceRepaints();
         this.ay = 1;
      } else {
         if (this.ay == 2) {
            if (com.vlm.redstar.client.ui.d.d && com.vlm.redstar.client.ui.d.b()) {
               byte var10000;
               byte var10001;
               if (ao == 6) {
                  var10000 = 1;
                  var10001 = 1;
               } else {
                  var10000 = 0;
                  var10001 = -1;
               }

               Mid.a(var10000, var10001);
            }

            if (com.vlm.redstar.client.ui.d.d && com.vlm.redstar.client.ui.d.b()) {
               byte var1;
               byte var3;
               label87: {
                  if (this.az != 101 && this.az != 108 && this.az != 110 && this.az != 105 && this.az != 103 && this.az != 109) {
                     if (this.az == 107) {
                        var1 = 3;
                        var3 = 1;
                        break label87;
                     }

                     var1 = 2;
                  } else {
                     var1 = 0;
                  }

                  var3 = -1;
               }

               Mid.a(var1, var3);
            }

            this.ay = 0;
            if (com.vlm.redstar.client.ui.d.b()) {
               J.c();
               this.aI = null;
               this.a(false, false);
               return;
            }

            d var2;
            byte var4;
            if (this.az != 108) {
               if (this.at) {
                  var2 = this;
                  var4 = 106;
               } else {
                  var2 = this;
                  var4 = this.az;
               }
            } else if (this.af != this.ae) {
               var2 = this;
               var4 = this.az;
            } else if (aA) {
               var2 = this;
               var4 = 101;
            } else {
               var2 = this;
               var4 = 110;
            }

            var2.b(var4);
         }
      }
   }

   public final void paint(Graphics var1) {
      Z++;
      if (Mid.a == 115) {
         this.q(var1);
      } else if (Mid.f) {
         try {
            switch (Mid.a) {
               case 100:
                  if (com.vlm.redstar.client.ui.d.b()) {
                     this.L.a(var1);
                     h.a(var1);
                     return;
                  }
                  break;
               case 101:
               case 107:
                  this.c(var1);
                  break;
               case 102:
                  this.i(var1);
                  break;
               case 103:
               case 104:
                  this.k(var1);
                  break;
               case 105:
                  this.o(var1);
                  break;
               case 106:
                  this.p(var1);
                  break;
               case 108:
                  this.h(var1);
                  break;
               case 109:
                  this.n(var1);
                  break;
               case 110:
                  this.d(var1);
                  break;
               case 111:
                  this.l(var1);
                  break;
               case 112:
                  this.m(var1);
                  break;
               case 113:
                  this.j(var1);
                  break;
               case 114:
                  this.e(var1);
               case 115:
               case 116:
               default:
                  break;
               case 117:
               case 118:
                  this.f(var1);
            }
         } catch (Throwable var4) {
         }

         try {
            if (com.vlm.redstar.client.ui.a.a()) {
               com.vlm.redstar.client.ui.a.a(var1);
            }
         } catch (Throwable var3) {
         }
      }
   }

   private void c(Graphics var1) {
      g.a(var1);
      g.b(var1);
      e.b();
      e.b(var1);
      g.c(var1);
      h.a(var1);
      if (Mid.a != 110) {
         this.r(var1);
      }

      String var5;
      String var8;
      label18: {
         g(var1);
         boolean var3 = false;
         if (com.vlm.redstar.client.ui.a.a()) {
            var8 = c.Z;
         } else {
            if (Mid.a != 110) {
               var5 = c.G;
               var8 = c.ab;
               break label18;
            }

            var8 = "";
         }

         var5 = var8;
         var8 = "";
      }

      String var6 = var8;
      int var4 = bh - J.g;
      J.a(var1, var5, 3, var4, 4);
      int var7 = bw - 3;
      J.a(var1, var6, var7, var4, 8);
   }

   private void d(Graphics var1) {
      String var2 = c.W;
      String var3 = c.X;
      if (y >= c.ce.length - 1) {
         var2 = c.Y;
         var3 = "";
      }

      this.a(var1, (byte)-1, var2, var3);
      K.a(var1, c.ad, bw >> 1, this.M);
      J.a(var1);
   }

   private void e(Graphics var1) {
      this.a(var1, (byte)-1, c.W, "");
      K.a(var1, c.x, bw >> 1, this.M);
      int var2 = bw >> 1;
      int var3 = this.N + (this.O >> 1) - (J.a(this.aI) >> 1);
      J.a(var1, this.aI, var2, var3, 1);
   }

   private void f(Graphics var1) {
      String var2 = Mid.a == 118 ? (!this.bd ? c.W : c.Y) : c.Y;
      this.a(var1, (byte)120, var2, "");
      K.a(var1, c.aF.toUpperCase(), bw >> 1, this.M);
      J.a(var1);
   }

   private static void g(Graphics var0) {
      if (ad < 20) {
         J.a(var0, ac, aa, ab);
         ad++;
         ab--;
      }
   }

   private void h(Graphics var1) {
      this.a(var1, (byte)-1, "", "");
      int var2 = this.aJ + J.g;
      int var3 = (bh >> 1) - (var2 >> 1);
      J.a(var1, c.aK, bw >> 1, var3);
      var3 += J.g;
      int var4 = (bw >> 1) - (this.aK >> 1);
      a(var1, var4, var3, this.aK, this.aJ, this.aC, 0, this.af, this.ae, false);
   }

   private void i(Graphics var1) {
      int var2 = bw >> 1;
      int var3 = this.M;
      this.a(var1, (byte)102, c.Z, c.V);
      K.a(var1, c.B, var2, var3);
      int var4 = com.vlm.redstar.client.ui.d.I * 5 + 4 * this.P;
      var3 = this.N + (this.O >> 1) - (var4 >> 1);
      int var5 = com.vlm.redstar.client.ui.d.I / 2 - (J.g >> 1);
      int var6 = 0;

      for (int var7 = 0; var7 < 5; var7++) {
         this.a(var1, var3, this.aj == var6);
         J.a(var1, c.ca[var6], var2, var3 + var5);
         var3 += com.vlm.redstar.client.ui.d.I + this.P;
         var6++;
      }
   }

   private void j(Graphics var1) {
      int var2 = bw >> 1;
      int var3 = this.M;
      this.a(var1, (byte)113, c.Z, c.V);
      K.a(var1, c.ca[this.T].toUpperCase(), var2, var3);
      var2 = bw >> 1;
      var3 = this.N;
      J.a(var1, c.cb[this.T][this.aj], var2, var3);
      var3 += J.g;
      J.a(var1, "(" + c.ca[this.T] + " " + (this.aj + 1) + ")", var2, var3);
      J.a(var1);
      if (Mid.n && this.V) {
         var3 = this.N + (this.O >> 1) - (this.l.getHeight() >> 1);
         this.a(var1, 1, var3, true);
         var2 = bw - 1 - (this.l.getWidth() >> 1);
         this.a(var1, var2, var3, false);
      }
   }

   private void k(Graphics var1) {
      String var2;
      String var3;
      label33: {
         var2 = c.V;
         var3 = "";
         String var10000;
         if (e.l()) {
            var10000 = Mid.a == 104 ? c.aa : c.ac;
         } else {
            if (Mid.a != 104) {
               break label33;
            }

            var10000 = c.C;
         }

         var3 = var10000;
      }

      this.a(var1, (byte)120, var3, var2);
      K.a(var1, c.G, bw >> 1, this.M);
      if (e.l()) {
         int var5 = this.N;
         int var4 = bw >> 1;
         J.a(var1, c.aR + a(e.t, true), var4, var5);
         var5 += J.g;
         int var6;
         com.vlm.redstar.client.ui.c var12;
         Graphics var10001;
         String var10002;
         if ((var6 = e.i() - e.H) == 0) {
            var12 = J;
            var10001 = var1;
            var10002 = c.af;
         } else {
            var12 = J;
            var10001 = var1;
            var10002 = var6 + c.ai;
         }

         var12.a(var10001, var10002, var4, var5);
         J.a(var1);
      } else {
         int var10 = this.N + (this.O >> 1) - (J.a(this.aI) >> 1);
         int var7 = bw >> 1;
         J.a(var1, this.aI, var7, var10, 1);
      }

      if (Mid.n && Mid.a != 104) {
         int var11 = this.N + (this.O >> 1) - (this.l.getHeight() >> 1);
         this.a(var1, 1, var11, true);
         int var8 = bw - 1 - (this.l.getWidth() >> 1);
         this.a(var1, var8, var11, false);
      }
   }

   private void l(Graphics var1) {
      int var2 = bw >> 1;
      int var3 = this.M;
      this.a(var1, (byte)104, c.Z, c.V);
      K.a(var1, c.A, var2, var3);
      int var4 = com.vlm.redstar.client.ui.d.I * 3 + 2 * this.P;
      var3 = this.N + (this.O >> 1) - (var4 >> 1);
      int var6 = (com.vlm.redstar.client.ui.d.I >> 1) - (J.g >> 1);
      this.a(var1, var3, this.aj == 0);
      J.a(var1, c.D, var2, var3 + var6);
      var3 += com.vlm.redstar.client.ui.d.I + this.P;
      this.a(var1, var3, this.aj == 1);
      J.a(var1, c.B, var2, var3 + var6);
      var3 += com.vlm.redstar.client.ui.d.I + this.P;
      this.a(var1, var3, this.aj == 2);
      J.a(var1, c.E, var2, var3 + var6);
   }

   private void m(Graphics var1) {
      int var2;
      int var7;
      label17: {
         var2 = bw >> 1;
         var7 = this.M;
         this.a(var1, (byte)112, c.Z, c.V);
         K.a(var1, c.E, var2, var7);
         var7 = this.N + this.P;
         J.a(var1, e(this.aj), var2, var7);
         int var6;
         var7 = (var6 = var7 + J.g) + this.P;
         Graphics var10000;
         Image var10001;
         switch (this.aj) {
            case 0:
               b(var1, var2, var7 + 10, Mid.n);
               var1.setClip(0, 0, bw, bh);
               break label17;
            case 1:
               var1.setClip(0, 0, bw, bh);
               var10000 = var1;
               var10001 = this.al;
               break;
            case 2:
               var1.setClip(0, 0, bw, bh);
               var10000 = var1;
               var10001 = this.ak;
               break;
            default:
               break label17;
         }

         var10000.drawImage(var10001, var2, var7 + 10, 3);
      }

      var7 += 20;
      J.a(var1, this.aI, var2, var7, 1);
      if (Mid.n) {
         var7 = this.N + (this.O >> 1) - (this.l.getHeight() >> 1);
         this.a(var1, 1, var7, true);
         var2 = bw - 1 - (this.l.getWidth() >> 1);
         this.a(var1, var2, var7, false);
      }
   }

   private void n(Graphics var1) {
      this.a(var1, (byte)120, "", c.V);
      K.a(var1, c.H, bw >> 1, this.M);
      if (!e.m()) {
         int var3 = this.N + (this.O >> 1) - (J.a(this.aI) >> 1);
         int var2 = bw >> 1;
         J.a(var1, this.aI, var2, var3, 1);
      } else {
         int var4 = bw >> 1;
         int var6 = this.N;
         J.a(var1, c.aL, var4, var6);
         J.a(var1);
      }

      if (Mid.n) {
         int var7 = this.N + (this.O >> 1) - (this.l.getHeight() >> 1);
         this.a(var1, 1, var7, true);
         int var5 = bw - 1 - (this.l.getWidth() >> 1);
         this.a(var1, var5, var7, false);
      }
   }

   private void o(Graphics var1) {
      int var2 = bw >> 1;
      int var3 = this.M;
      this.a(var1, (byte)105, c.Z, c.V);
      K.a(var1, c.ab.toUpperCase(), var2, var3);
      int var4 = com.vlm.redstar.client.ui.d.I * 4 + 3 * this.P;
      var3 = this.N + (this.O >> 1) - (var4 >> 1);
      int var5 = com.vlm.redstar.client.ui.d.I / 2 - (J.g >> 1);
      this.a(var1, var3, this.aj == 0);
      J.a(var1, c.C, var2, var3 + var5);
      var3 += com.vlm.redstar.client.ui.d.I + this.P;
      this.a(var1, var3, this.aj == 1);
      J.a(var1, c.I + ": " + (com.vlm.redstar.client.ui.d.d ? c.J : c.K), var2, var3 + var5);
      var3 += com.vlm.redstar.client.ui.d.I + this.P;
      this.a(var1, var3, this.aj == 2);
      J.a(var1, c.bt + ": " + (com.vlm.redstar.client.ui.d.e ? c.J : c.K), var2, var3 + var5);
      var3 += com.vlm.redstar.client.ui.d.I + this.P;
      this.a(var1, var3, this.aj == 3);
      J.a(var1, c.z, var2, var3 + var5);
   }

   private void p(Graphics var1) {
      this.a(var1, (byte)120, c.Z, c.V);
      int var2 = bw >> 1;
      int var3 = this.M;
      K.a(var1, c.F, var2, var3);
      int var5 = com.vlm.redstar.client.ui.d.I * 3 + 2 * this.P;
      var3 = this.N + (this.O >> 1) - (var5 >> 1);
      int var6 = com.vlm.redstar.client.ui.d.I / 2 - (J.g >> 1);
      this.a(var1, var3, this.aj == 0);
      J.a(var1, c.C, var2, var3 + var6);
      var3 += com.vlm.redstar.client.ui.d.I + this.P;
      this.a(var1, var3, this.aj == 1);
      J.a(var1, c.A, var2, var3 + var6);
      var3 += com.vlm.redstar.client.ui.d.I + this.P;
      this.a(var1, var3, this.aj == 2);
      J.a(var1, c.y, var2, var3 + var6);
   }

   private void q(Graphics var1) {
      this.a(var1, (byte)120, "", "");
      K.a(var1, c.C, bw >> 1, this.M);
      int var2 = this.N + (this.O >> 1) - (J.a(this.aI) >> 1);
      int var3 = bw >> 1;
      J.a(var1, this.aI, var3, var2, 1);
   }

   public final void keyPressed(int var1) {
      try {
         if (Mid.a == 115) {
            this.ay = 2;
            this.showNotify();
            return;
         }

         if (com.vlm.redstar.client.ui.d.b()) {
            this.L.a(var1);
            return;
         }

         if (com.vlm.redstar.client.ui.a.a()) {
            this.j(var1);
            return;
         }

         switch (Mid.a) {
            case 101:
               this.b(var1);
               break;
            case 102:
               this.k(var1);
               break;
            case 103:
            case 104:
               this.m(var1);
               break;
            case 105:
               this.n(var1);
               break;
            case 106:
               this.o(var1);
               break;
            case 109:
               this.c(var1);
               break;
            case 110:
               this.d(var1);
               break;
            case 111:
               this.e(var1);
               break;
            case 112:
               this.f(var1);
               break;
            case 113:
               this.l(var1);
               break;
            case 114:
               this.g(var1);
               break;
            case 117:
               this.i(var1);
            case 107:
            case 108:
            case 115:
            case 116:
            default:
               return;
            case 118:
               this.h(var1);
         }
      } catch (Throwable var3) {
      }
   }

   private void b(int var1) {
      if (e != null) {
         boolean var2 = false;
         if (e.d_) {
            if ((var1 != -2 && var1 != 56 || !a_[1])
               && (var1 != -1 && var1 != 50 || !a_[0])
               && var1 != 42
               && var1 != 48
               && var1 != 35
               && var1 != -6
               && var1 != -7) {
               if (a_[0] && (var1 == -2 || var1 == 50)) {
                  e.k = 0;
                  e.l = 0;
               }

               e.d_ = false;
               Mid.c(500);

               for (int var3 = 0; var3 < a_.length; var3++) {
                  a_[var3] = false;
               }

               a(c.aH + c.aJ);
            } else {
               var2 = true;
            }
         }

         if (!var2
            && (var1 == -2 || var1 == -1 || var1 == -3 || var1 == -4 || var1 == 50 || var1 == 52 || var1 == 54 || var1 == 56 || var1 == -7 || var1 == -6)) {
            for (int var4 = 0; var4 < a_.length; var4++) {
               a_[var4] = false;
            }
         }

         switch (var1) {
            case -7:
               this.b((byte)105);
               return;
            case -6:
               this.b((byte)103);
               return;
            case -5:
            case 53:
               a_[4] = true;
               return;
            case -4:
            case 54:
               a_[3] = true;
               return;
            case -3:
            case 52:
               a_[2] = true;
               return;
            case -2:
            case 56:
               e.l = 0;
               if (!e.d_) {
                  a_[1] = true;
               }

               return;
            case -1:
            case 50:
               e.l = 0;
               if (!e.d_) {
                  a_[0] = true;
                  e.k = 0;
               }

               return;
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 49:
            case 51:
            case 55:
            default:
               return;
            case 35:
               e.f();
               return;
            case 42:
               e.d();
               return;
            case 48:
               e.e();
         }
      }
   }

   private void c(int var1) {
      d var10000;
      byte var10001;
      switch (var1) {
         case -7:
            var10000 = this;
            var10001 = 101;
            break;
         case -4:
         case -3:
         case 52:
         case 54:
            var10000 = this;
            var10001 = 103;
            break;
         case -2:
         case 56:
            if (com.vlm.redstar.client.ui.c.a(false)) {
               return;
            }

            return;
         case -1:
         case 50:
            if (com.vlm.redstar.client.ui.c.a(true)) {
               return;
            }

            return;
         default:
            return;
      }

      var10000.b(var10001);
   }

   private void d(int var1) {
      switch (var1) {
         case -7:
            if (y >= c.ce.length - 1) {
               return;
            }
            break;
         case -6:
         case -5:
         case 53:
            if (y < c.ce.length - 1) {
               y++;
               this.a(c.ce[y], false);
               return;
            }
            break;
         case -2:
         case 56:
            if (com.vlm.redstar.client.ui.c.a(false)) {
               return;
            }

            return;
         case -1:
         case 50:
            if (com.vlm.redstar.client.ui.c.a(true)) {
               return;
            }

            return;
         default:
            return;
      }

      this.at = true;
      this.b((byte)101);
      f = Mid.clockMs;
   }

   private void e(int var1) {
      switch (var1) {
         case -7:
            this.b((byte)106);
            return;
         case -6:
         case -5:
         case 53:
            switch (this.aj) {
               case 0:
                  this.b((byte)104);
                  return;
               case 1:
                  this.b((byte)102);
                  return;
               case 2:
                  this.b((byte)112);
                  this.d(this.aj);
                  return;
               default:
                  return;
            }
         case -2:
         case 56:
            this.aj++;
            if (this.aj > 2) {
               this.aj = 0;
               return;
            }
            break;
         case -1:
         case 50:
            this.aj--;
            if (this.aj < 0) {
               this.aj = 2;
               return;
            }
      }
   }

   private void f(int var1) {
      d var10000;
      switch (var1) {
         case -7:
            this.b((byte)111);
            return;
         case -6:
         case -5:
         case 53:
            label35: {
               byte var10001;
               switch (this.aj) {
                  case 0:
                     var10000 = this;
                     var10001 = 9;
                     break;
                  case 1:
                     var10000 = this;
                     var10001 = 5;
                     break;
                  case 2:
                     var10000 = this;
                     var10001 = 4;
                     break;
                  default:
                     break label35;
               }

               var10000.be = var10001 - e.x[this.aj];
            }

            if (this.be == 0) {
               com.vlm.redstar.client.ui.a.a(c.aP, c.bg + e(this.aj));
               return;
            }

            if (e.t >= f(this.aj)) {
               D = true;
               String var2 = c.aq;
               String var3 = c.ax + e(this.aj) + "(s)" + c.az + " \n" + '\u0000' + " \n" + C + " \n" + '\u0001' + " \n" + "$" + C * f(this.aj);
               com.vlm.redstar.client.ui.a.a(var2, var3);
               return;
            }

            com.vlm.redstar.client.ui.a.a(c.ao, c.bU);
            return;
         case -4:
         case 54:
            this.aj++;
            if (this.aj > 2) {
               this.aj = 0;
            }

            var10000 = this;
            break;
         case -3:
         case 52:
            this.aj--;
            if (this.aj < 0) {
               this.aj = 2;
            }

            var10000 = this;
            break;
         default:
            return;
      }

      var10000.d(this.aj);
   }

   private void g(int var1) {
      switch (var1) {
         case -6:
         case -5:
         case 53:
            this.a(false, true);
      }
   }

   private void h(int var1) {
      switch (var1) {
         case -6:
         case -5:
         case 53:
            d var10000;
            byte var10001;
            if (!this.bd) {
               var10000 = this;
               var10001 = 117;
            } else {
               var10000 = this;
               var10001 = 101;
            }

            var10000.b(var10001);
         default:
            return;
         case -2:
         case 56:
            com.vlm.redstar.client.ui.c.a(false);
            return;
         case -1:
         case 50:
            com.vlm.redstar.client.ui.c.a(true);
      }
   }

   private void i(int var1) {
      switch (var1) {
         case -6:
         case -5:
         case 53:
            this.b((byte)101);
         default:
            return;
         case -2:
         case 56:
            com.vlm.redstar.client.ui.c.a(false);
            return;
         case -1:
         case 50:
            com.vlm.redstar.client.ui.c.a(true);
      }
   }

   public final void keyReleased(int var1) {
      if (e != null) {
         try {
            switch (var1) {
               case -5:
               case 53:
                  a_[4] = false;
                  return;
               case -4:
               case 54:
                  a_[3] = false;
                  return;
               case -3:
               case 52:
                  a_[2] = false;
                  return;
               case -2:
               case 56:
                  if (!e.d_) {
                     a_[1] = false;
                  }

                  return;
               case -1:
               case 50:
                  if (!e.d_) {
                     a_[0] = false;
                     e.k = 0;
                  }

                  return;
            }
         } catch (Throwable var3) {
         }
      }
   }

   private void j(int var1) {
      if (B || D) {
         boolean var2 = false;
         if (var1 == -1 || var1 == 50) {
            int var5;
            label142: {
               boolean var3 = false;
               int var10000;
               if (D) {
                  if ((var5 = e.t / f(this.aj)) <= this.be) {
                     break label142;
                  }

                  var10000 = this.be;
               } else {
                  var10000 = e.B[e.G];
               }

               var5 = var10000;
            }

            if (C < var5) {
               C++;
               var2 = true;
            }
         } else if ((var1 == -2 || var1 == 56) && C > 0) {
            C--;
            var2 = true;
         }

         if (var2) {
            String var6 = (D
                  ? new StringBuffer()
                     .append(c.ax)
                     .append(e(this.aj))
                     .append("(s)")
                     .append(c.az)
                     .append(" \n")
                     .append('\u0000')
                     .append(" \n")
                     .append(C)
                     .append(" \n")
                     .append('\u0001')
                     .append(" \n")
                     .append("$")
                     .append(C * f(this.aj))
                  : new StringBuffer()
                     .append(c.aw)
                     .append(c.bV[e.G])
                     .append(c.ay)
                     .append(" \n")
                     .append('\u0000')
                     .append(" \n")
                     .append(C)
                     .append(" \n")
                     .append('\u0001'))
               .toString();
            com.vlm.redstar.client.ui.a.b(c.aq, var6);
         }
      }

      byte var4;
      label160: {
         var4 = 2;
         int var7;
         if (var1 == -3 || var1 == 52) {
            var7 = com.vlm.redstar.client.ui.a.b;
         } else if (var1 != -4 && var1 != 54) {
            if (var1 != -5 && var1 != 53 && var1 != -6) {
               break label160;
            }

            var7 = com.vlm.redstar.client.ui.a.d;
         } else {
            var7 = com.vlm.redstar.client.ui.a.c;
         }

         var4 = com.vlm.redstar.client.ui.a.a(var7);
      }

      if (var4 != 2) {
         switch (var4) {
            case 0:
               if (z) {
                  e.t = e.t - b.c[this.T][this.aj];
                  e.w[this.T] = this.aj;
                  z = false;
                  this.b((byte)102);
               } else if (B) {
                  e.B[e.G] = e.B[e.G] - C;
                  e.H = e.H - C;
                  e.G = -1;
                  C = 0;
                  B = false;
                  this.x();
               } else {
                  if (this.E) {
                     com.vlm.redstar.client.ui.a.a(c.y, c.bq, 5000);
                     this.repaint();
                     this.serviceRepaints();
                     v();
                     b(true);
                     this.E = false;
                     return;
                  }

                  if (this.F) {
                     this.F = false;
                     if (!aw) {
                        this.aY = true;
                     }

                     this.a(false, false);
                  } else if (X) {
                     X = false;
                     this.aY = false;
                     z();
                     this.b((byte)114);
                  } else if (D) {
                     D = false;
                     e.x[this.aj] = (byte)(e.x[this.aj] + C);
                     if (!e.y[this.aj] && C > 0) {
                        com.vlm.redstar.client.ui.a.a(c.aB, c.cd[this.aj]);
                        e.y[this.aj] = true;
                     }

                     e.t = e.t - f(this.aj) * C;
                     C = 0;
                     this.d(this.aj);
                  } else if (A > -1) {
                     if (au) {
                        au = false;
                        String var8;
                        String var10001;
                        if (A == 5) {
                           e.t = -Mid.a(2000);
                           var8 = c.bW[A];
                           var10001 = c.bY[A] + a(e.t, true);
                        } else {
                           var8 = c.bW[A];
                           var10001 = c.bY[A];
                        }

                        com.vlm.redstar.client.ui.a.b(var8, var10001);
                        return;
                     }

                     switch (A) {
                        case 0:
                           e.C = true;
                           break;
                        case 1:
                           e.t += 7000;
                           break;
                        case 2:
                           e.t += 10000;
                           break;
                        case 3:
                           e.t += 15000;
                           break;
                        case 4:
                           e.F = true;
                        case 5:
                        case 8:
                        case 9:
                        default:
                           break;
                        case 6:
                           e.t += 3000;
                           break;
                        case 7:
                           e.t += 2500;
                           break;
                        case 10:
                           e.D++;
                     }

                     A = -1;
                  } else if (aq) {
                     aq = false;
                     if (ar) {
                        ar = false;
                        as = true;
                        com.vlm.redstar.client.ui.a.a(c.af, c.bf, false);
                        return;
                     }
                  } else if (as) {
                     ap = true;
                     as = false;
                  }
               }
               break;
            case 1:
               if (as) {
                  ap = false;
               }

               as = false;
               z = false;
               B = false;
               this.E = false;
               this.F = false;
         }

         com.vlm.redstar.client.ui.a.b();
      }
   }

   private void k(int var1) {
      d var10000;
      byte var10001;
      switch (var1) {
         case -7:
            var10000 = this;
            var10001 = 111;
            break;
         case -6:
         case -5:
         case 53:
            if (t(this.aj) == 4) {
               com.vlm.redstar.client.ui.a.a(c.ar, c.as);
               return;
            }

            this.T = this.aj;
            var10000 = this;
            var10001 = 113;
            break;
         case -2:
         case 56:
            this.aj++;
            if (this.aj > 4) {
               this.aj = 0;
               return;
            }

            return;
         case -1:
         case 50:
            this.aj--;
            if (this.aj < 0) {
               this.aj = 4;
               return;
            }

            return;
         default:
            return;
      }

      var10000.b(var10001);
   }

   private void l(int var1) {
      switch (var1) {
         case -7:
            this.b((byte)102);
            return;
         case -6:
         case -5:
         case 53:
            if (e.t >= c((byte)this.T, this.aj)) {
               z = true;
               String var2 = c.bR + "'" + b((byte)this.T, this.aj) + "' " + c.ca[this.T] + "?";
               com.vlm.redstar.client.ui.a.a(c.aq, var2, (byte)2, false);
               return;
            }

            com.vlm.redstar.client.ui.a.a(c.ao, c.bT);
            break;
         case -4:
         case 54:
            if (!this.V) {
               return;
            }

            this.aj++;
            if (this.aj > 4) {
               this.aj = this.U;
            }

            this.u(this.aj);
            return;
         case -3:
         case 52:
            if (!this.V) {
               return;
            }

            this.aj--;
            if (this.aj < this.U) {
               this.aj = 4;
            }

            this.u(this.aj);
            return;
         case -2:
         case 56:
            if (com.vlm.redstar.client.ui.c.a(false)) {
               return;
            }
            break;
         case -1:
         case 50:
            if (com.vlm.redstar.client.ui.c.a(true)) {
               return;
            }
      }
   }

   private void m(int var1) {
      switch (var1) {
         case -7:
            if (Mid.a == 104) {
               this.b((byte)111);
               return;
            }

            this.b((byte)101);
            return;
         case -6:
         case -5:
         case 53:
            if (!e.l()) {
               if (Mid.a == 104) {
                  this.b((byte)101);
                  return;
               }

               return;
            }

            if (Mid.a == 103) {
               e.j();
               return;
            }

            e.k();
            break;
         case -4:
         case -3:
         case 52:
         case 54:
            if (Mid.a != 103) {
               return;
            }

            this.b((byte)109);
            break;
         case -2:
         case 56:
            if (com.vlm.redstar.client.ui.c.a(false)) {
               return;
            }

            return;
         case -1:
         case 50:
            if (com.vlm.redstar.client.ui.c.a(true)) {
               return;
            }

            return;
         default:
            return;
      }

      this.x();
   }

   private void n(int var1) {
      d var10000;
      byte var10001;
      switch (var1) {
         case -7:
            this.b((byte)101);
            return;
         case -6:
         case -5:
         case 53:
            switch (this.aj) {
               case 0:
                  this.b((byte)101);
                  return;
               case 1:
                  com.vlm.redstar.client.ui.d.d = !com.vlm.redstar.client.ui.d.d;
                  if (!com.vlm.redstar.client.ui.d.d) {
                     this.l();
                  } else {
                     this.e();
                  }

                  return;
               case 2:
                  com.vlm.redstar.client.ui.d.e = !com.vlm.redstar.client.ui.d.e;
                  return;
               case 3:
                  com.vlm.redstar.client.ui.a.a(c.aq, c.bQ, (byte)2, false);
                  this.F = true;
               default:
                  return;
            }
         case -2:
         case 56:
            this.aj++;
            if (this.aj <= 3) {
               return;
            }

            var10000 = this;
            var10001 = 0;
            break;
         case -1:
         case 50:
            this.aj--;
            if (this.aj < 0) {
               var10000 = this;
               var10001 = 3;
               break;
            }

            return;
         default:
            return;
      }

      var10000.aj = var10001;
   }

   private void o(int var1) {
      d var10000;
      byte var10001;
      switch (var1) {
         case -7:
            this.b((byte)101);
            return;
         case -6:
         case -5:
         case 53:
            switch (this.aj) {
               case 0:
                  this.b((byte)101);
                  return;
               case 1:
                  this.b((byte)111);
                  return;
               case 2:
                  if (!aw) {
                     com.vlm.redstar.client.ui.a.a(c.aq, c.bP, (byte)2, false);
                     this.E = true;
                     return;
                  }

                  com.vlm.redstar.client.ui.a.a(c.x, c.bm);
                  return;
               default:
                  return;
            }
         case -2:
         case 56:
            this.aj++;
            if (this.aj <= 2) {
               return;
            }

            var10000 = this;
            var10001 = 0;
            break;
         case -1:
         case 50:
            this.aj--;
            if (this.aj < 0) {
               var10000 = this;
               var10001 = 2;
               break;
            }

            return;
         default:
            return;
      }

      var10000.aj = var10001;
   }

   private void r(Graphics var1) {
      var1.setClip(0, 0, bw, bh);
      var1.drawImage(this.aL, 0, 0, 20);
      int var3 = 1 + this.an.getWidth() + 1;
      int var4 = 0;
      boolean var5 = false;
      boolean var6 = false;
      if (e.z < e.g() / 3) {
         var5 = true;
      }

      if (e.z < e.g() >> 2 && Mid.n) {
         var6 = true;
      }

      int[][] var10005;
      byte var10006;
      if (!var5) {
         var10005 = this.aD;
         var10006 = 0;
      } else {
         var10005 = this.aD;
         var10006 = 1;
      }

      a(var1, var3, 1, this.aU, 7, var10005[var10006], 0, e.z, e.g(), var6);
      var3 = 1 + this.an.getWidth() + 1;
      int var7;
      var7 = (var7 = a(e.H, e.i())) < 50 ? 0 : (var7 < 75 ? 1 : 2);
      var6 = e.H == e.i() && Mid.n;
      a(var1, var3, 10, this.aU, this.aM, this.aB[var7], 0, e.H, e.i(), var6);
      var3 = this.aO;
      var4 = this.aQ;
      String var8 = Integer.toString(e.e) + "m";
      J.a(var1, var8, var3, var4, 4);
      var3 = this.aP;
      var4 = this.aR;
      var8 = a(e.g_, false);
      J.a(var1, var8, var3, var4, 4);
      var3 = bw - 1 - 45;
      J.a(var1, e.x[0] + "", var3 + this.aV[0], 14);
      J.a(var1, e.x[1] + "", var3 + this.aV[1], 14);
      J.a(var1, e.x[2] + "", var3 + this.aV[2], 14);
      var1.drawImage(this.am, 1, 34, 20);
      var3 = 1 + this.am.getWidth() + 1;
      var4 = 34 + ((this.am.getHeight() >> 1) - (J.g >> 1));
      J.a(var1, a(e.t, false), var3, var4, 4);
   }

   public final boolean a(Graphics var1, byte var2, String var3, String var4) {
      int var5 = 0;
      int var6 = 0;
      var1.setClip(0, 0, bw, bh);
      int var10000 = 0;

      while (true) {
         int var7 = var10000;
         if (var10000 >= bw) {
            if (this.n[0].getHeight() < bh - 64) {
               var1.setColor(aF);
               var1.fillRect(0, this.n[0].getHeight(), bw, bh - 64 - this.n[0].getHeight());
            }

            var5 = 0;
            var6 = bh - 64;

            for (int var14 = 0; var14 < bw / this.o[0].getWidth() + 1; var14++) {
               var1.drawImage(this.o[0], var5, var6, 20);
               var5 += this.o[0].getWidth();
            }

            for (int var15 = 0; var15 < 1; var15++) {
               int var10 = 0;
               var6 += 32;

               for (int var8 = 0; var8 < bw / 32 + 1; var8++) {
                  var1.drawImage(this.o[4], var10, var6, 20);
                  var10 += 32;
               }
            }

            for (int var16 = 0; var16 < this.p.length; var16++) {
               var1.drawImage(this.o[1], this.p[var16], this.q[var16], 20);
            }

            if (var2 != 6 && Mid.a != 108) {
               byte var17 = (byte)(this.o[3].getWidth() / 3);
               a(var1, this.o[3], var17, 0, 0, bw);
            }

            if (Mid.a != 108) {
               if (com.vlm.redstar.client.ui.a.a()) {
                  var3 = c.Z;
                  var4 = "";
               }

               this.a(var1, var3, var4);
            }

            if (Mid.a != 108) {
               h.effectFrame++;

               for (int var18 = 0; var18 < 10; var18++) {
                  var5 = Mid.b(bw);
                  var6 = bh - 64;
                  if (Mid.b() && h.effectFrame % 15 == 0) {
                     h.a(var5 + Mid.b(6), var6 + Mid.b(6));
                  }
               }
            }

            return true;
         }

         var1.drawImage(this.n[0], var7, 0, 20);
         var10000 = var7 + this.n[0].getWidth();
      }
   }

   private void a(Graphics var1, String var2, String var3) {
      int var5 = 0;
      int var6 = bh - (this.ag >> 1) - (J.g >> 1);
      if (var2 != null && var2 != "") {
         J.a(var1, var2, 2, var6, 4);
      }

      if (var3 != null && var3 != "") {
         var5 = bw - 2;
         J.a(var1, var3, var5, var6, 8);
      }
   }

   public final int a(Graphics var1, int var2, boolean var3) {
      var1.setClip(0, 0, bw, bh);
      int var5 = 0;
      var5 = (bw >> 1) - (this.aG >> 1);
      if (var3 && !this.a()) {
         if (this.k == null) {
            this.k = Mid.a("/res/selected.png");
         }

         int var6 = this.k.getWidth() / 3;
         a(var1, this.k, (byte)var6, var5, var2, this.aG);
      }

      var1.setClip(0, 0, bw, bh);
      return bw >> 1;
   }

   public final boolean a() {
      return this.S;
   }

   public final void a(Graphics var1) {
      var1.setClip(0, 0, bw, bh);
      int var2 = 0;
      int var3 = 0;
      int var10000 = 0;

      while (true) {
         int var4 = var10000;
         if (var10000 >= bw) {
            if (this.n[0].getHeight() < bh) {
               var1.setColor(aF);
               var1.fillRect(0, this.n[0].getHeight(), bw, bh - this.n[0].getHeight());
            }

            var2 = bw - this.n[1].getWidth() >> 1;
            var3 = bh - this.n[1].getHeight() >> 1;
            var1.drawImage(this.n[1], var2, var3, 20);
            var2 = bw - this.n[2].getWidth() >> 1;
            var3 = bh + this.n[1].getHeight() >> 1;
            var1.drawImage(this.n[2], var2, var3, 20);
            var2 = (bw - this.n[1].getWidth() >> 1) + 79;
            var3 = (bh + this.n[1].getHeight() >> 1) - 27;
            var1.setClip(var2, var3, 31, a.L.getHeight());
            var1.drawImage(a.L, var2, var3, 20);

            for (int var13 = 0; var13 < 1; var13++) {
               if (Mid.b()) {
                  h.effectFrame++;
                  if (h.effectFrame % 5 == 0) {
                     h.a(var2 + Mid.b(6), var3 + Mid.b(6));
                  }
               }
            }

            for (int var14 = 0; var14 < 10; var14++) {
               var2 = Mid.b(bw);
               var3 = bh;
               if (Mid.b() && h.effectFrame % 8 == 0) {
                  h.a(var2 + Mid.b(6), var3 + Mid.b(6));
               }
            }

            var1.setClip(0, 0, bw, bh);
            return;
         }

         var1.drawImage(this.n[0], var4, 0, 20);
         var10000 = var4 + this.n[0].getWidth();
      }
   }

   public final String[] b() {
      return null;
   }

   private void a(boolean var1, boolean var2) {
      if (this.aY) {
         z();
         this.aY = false;
      }

      if (var2 || !var1) {
         this.gWorld = null;
         if (e != null) {
            e.a(e);
            e = null;
            System.gc();
         }
      }

      try {
         this.r();
         this.L = new com.vlm.redstar.client.ui.d(this, bw, bh, J, K, var1 ? -1 : (!var2 ? 2 : 8));
         this.M = com.vlm.redstar.client.ui.d.q;
         this.N = bh - com.vlm.redstar.client.ui.d.O;
         this.P = com.vlm.redstar.client.ui.d.m;
         this.O = bh - (this.ag + this.N + 4);
         if (com.vlm.redstar.client.ui.d.d && var2) {
            this.e();
         }

         this.b((byte)100);
      } catch (Throwable var4) {
         this.c();
      }
   }

   private void r() {
      com.vlm.redstar.client.ui.d.p = 18;
      com.vlm.redstar.client.ui.d.q = 5;
      com.vlm.redstar.client.ui.d.L = new byte[]{2, 3, 1, 4, 0};
      com.vlm.redstar.client.ui.d.p += 5;
      com.vlm.redstar.client.ui.d.r = 1;
      com.vlm.redstar.client.ui.d.k = 2;
      com.vlm.redstar.client.ui.d.K = this.aG - 10;

      try {
         if (this.k == null) {
            this.k = Mid.a("/res/selected.png");
         }

         com.vlm.redstar.client.ui.d.I = this.k.getHeight();
      } catch (Throwable var2) {
      }

      com.vlm.redstar.client.ui.d.F = true;
      com.vlm.redstar.client.ui.d.J = 1;
      com.vlm.redstar.client.ui.d.h = 10;
      com.vlm.redstar.client.ui.d.R = new int[]{49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 42, 35, -1, -2, -3, -4, -6, -7, -5, -8};
   }

   public final void c() {
      this.H.destroyApp(false);
   }

   public final void b(Graphics var1) {
      int var2 = J.a(this.aI);
      int var3 = (bh >> 1) - (var2 >> 1);
      int var4 = this.G;
      int var5 = com.vlm.redstar.client.ui.d.r;
      var1.setClip(0, 0, bw, bh - this.ag);
      J.a(var1, this.aI, bw >> 1, var4, 1);
      if (this.G > var3) {
         this.G -= var5;
         if (this.G < var3) {
            this.G = var3;
         }
      }
   }

   public final void d() {
      Q = bh;
   }

   public final boolean a(Graphics var1, byte var2) {
      return this.R ? h.a(var1, var2) : true;
   }

   public final void e() {
      Mid.a((byte)0, -1);
   }

   public final void a(byte var1, byte var2) {
      if (var1 == 4) {
         if (var2 == 1) {
            com.vlm.redstar.client.ui.d.M = true;
         } else {
            com.vlm.redstar.client.ui.d.M = false;
         }
      } else if (var1 == 6) {
         this.G = bh;
         this.aH = true;
         this.aI = J.a(c.d + " \n" + c.c + " \n\n" + c.e + ": " + this.H.l + " \n" + c.f + ": " + this.H.m, bw - 20);
         Mid.a((byte)1, 1);
      } else if (this.aH) {
         this.aH = false;
         if (this.aI != null) {
            this.aI = null;
         }
      }

      if (var1 == 0) {
         h.b();
      }

      aE = var1 == 1;
      if (ao == 6) {
         Mid.a((byte)0, -1);
      }

      ao = var1;
   }

   public final void a(boolean var1) {
      if (this.L != null) {
         this.L.a();
         this.L = null;
         System.gc();
      }

      aA = var1;
      this.b((byte)116);
   }

   private void s() {
      this.gImg = Mid.a("/res/vlmintro.png");
      this.hImg = Mid.a("/res/updownarrows.png");
      this.i = Mid.a("/res/menuIcons.png");
      this.l = Mid.a("/res/menuArrows.png");
      this.j = Mid.a("/res/secondaryMenuIcons.png");
      this.k = Mid.a("/res/selected.png");
      this.n[0] = Mid.a("/res/splash_gradient.png");
      this.n[1] = Mid.a("/res/splash_title.png");
      this.n[2] = Mid.a("/res/splash_subtitle.png");
      Image var1 = Mid.a("/res/seabed.png");
      this.o[0] = Image.createImage(var1, 0, 0, 32, 32, 0);
      this.o[4] = Image.createImage(var1, 32, 0, 32, 32, 0);
      this.o[1] = Mid.a("/res/seaweed.png");
      this.o[2] = Mid.a("/res/lowerbar.png");
      this.o[3] = Mid.a("/res/upperbar.png");
      this.an = Mid.a("/res/o2tank.png");
      v = Mid.a("/res/depth.png");
      w = Mid.a("/res/clock.png");
      x = Mid.a("/res/bomb.png");
      this.ak = Mid.a("/res/booster.png");
      this.al = Mid.a("/res/oxygenTankSmall.png");
      this.am = Mid.a("/res/coins.png");
      Mid.a("/res/scope.png");
      System.gc();
   }

   private void t() {
      try {
         String var1 = "_!#$%*,-./0123456789:;<=>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()'+@àâçéñôäöüáí¡ó¿úÀÄßÜÁÉÓùèïÍÈÜêÚ\u0000\u0001òÖŽžÃãÕýŠšÇõ";
         short[] var2 = new short[]{
            0,
            7,
            11,
            20,
            30,
            40,
            48,
            53,
            59,
            63,
            69,
            77,
            82,
            90,
            98,
            106,
            114,
            122,
            129,
            137,
            144,
            148,
            153,
            159,
            166,
            172,
            179,
            187,
            195,
            203,
            211,
            219,
            227,
            235,
            243,
            247,
            254,
            262,
            269,
            280,
            288,
            296,
            304,
            312,
            320,
            328,
            336,
            344,
            352,
            363,
            371,
            379,
            387,
            394,
            401,
            408,
            415,
            422,
            428,
            435,
            442,
            446,
            451,
            458,
            462,
            472,
            479,
            486,
            493,
            500,
            506,
            513,
            519,
            526,
            533,
            543,
            550,
            557,
            563,
            569,
            575,
            578,
            585,
            595,
            602,
            609,
            616,
            623,
            630,
            637,
            644,
            651,
            658,
            665,
            669,
            673,
            680,
            687,
            694,
            702,
            710,
            718,
            726,
            734,
            742,
            750,
            757,
            764,
            769,
            775,
            783,
            791,
            798,
            806,
            815,
            824,
            831,
            839,
            847,
            853,
            861,
            868,
            876,
            883,
            891,
            898,
            906
         };
         J = new com.vlm.redstar.client.ui.c(Mid.a("/res/smallFont.png"), this.hImg, var1, var2, 0, 3, bw, bh);
         var1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-.ÇÜÍÁÚÕÃ";
         var2 = new short[]{
            0,
            15,
            28,
            40,
            52,
            63,
            74,
            86,
            99,
            104,
            115,
            128,
            140,
            156,
            169,
            181,
            193,
            205,
            218,
            230,
            242,
            255,
            268,
            286,
            299,
            312,
            324,
            332,
            336,
            348,
            361,
            366,
            381,
            394,
            406
         };
         K = new com.vlm.redstar.client.ui.c(Mid.a("/res/titleFont.png"), this.hImg, var1, var2, 1, 3, bw, bh);
      } catch (Throwable var3) {
      }
   }

   private void u() {
      this.m = Mid.a("/res/popupArrows.png");
      this.r = Mid.a("/res/left.png");
      this.s = Mid.a("/res/right.png");
      this.t = Mid.a("/res/top.png");
      this.u = Mid.a("/res/bottom.png");
      I = new com.vlm.redstar.client.ui.a(J, this.t, this.u, this.r, this.s, this.m, bw, bh, 28415, (byte)0);
      com.vlm.redstar.client.ui.a.a((byte)15);
   }

   final void f() {
      if (I != null) {
         com.vlm.redstar.client.ui.a.c();
         I = null;
      }

      this.gWorld = null;
      e = null;
      J = null;
      K = null;
      this.gImg = null;
      this.hImg = null;
      this.m = null;
      this.l = null;
      this.n = null;
      this.o = null;
      this.r = null;
      this.s = null;
      this.t = null;
      this.u = null;
      v = null;
      w = null;
      this.ak = null;
      this.al = null;
      x = null;
      this.an = null;
      this.am = null;
      this.aL = null;
      Mid.i = null;
      Mid.k = -1;
      if (this.L != null) {
         this.L.a();
         this.L = null;
      }

      e.o();
      com.vlm.redstar.client.core.csp.a.a();
      System.gc();
   }

   private static void a(Graphics var0, Image var1, byte var2, int var3, int var4, int var5) {
      int var8 = var1.getHeight();
      int var9 = var5 - var2;
      int var11 = var2;
      int var7 = var4;
      var0.setClip(var3, var4, var2, var8);
      var0.drawImage(var1, var3, var4, 20);
      int var10 = var2 + var2;
      int var6;
      int var10000 = var6 = var3 + var2;

      while (true) {
         int var12 = var10000;
         if (var10000 >= var3 + var5 - var2) {
            var6 = var3 + var5;
            var0.setClip(var6 - var2, var7, var2, var8);
            var0.drawImage(var1, var6, var7, 24);
            var0.setClip(0, 0, bw, bh);
            return;
         }

         if (var10 > var9) {
            var11 = var5 - var10;
         }

         var0.setClip(var12, var7, var11, var8);
         var0.drawImage(var1, var12 - var2, var7, 20);
         var10 += var2;
         var10000 = var12 + var2;
      }
   }

   public final boolean g() {
      try {
         RecordStore var1;
         RecordEnumeration var2 = (var1 = RecordStore.openRecordStore("AD_RMS_SAVED", false)).enumerateRecords(null, null, false);
         ByteArrayInputStream var3 = new ByteArrayInputStream(var2.nextRecord());
         DataInputStream var4 = new DataInputStream(var3);

         try {
            this.W = var4.readBoolean();
         } catch (IOException var6) {
         }

         var1.closeRecordStore();
      } catch (RecordStoreNotFoundException var7) {
         b(false);
      } catch (RecordStoreException var8) {
      }

      return this.W;
   }

   static void b(boolean var0) {
      try {
         ByteArrayOutputStream var1 = new ByteArrayOutputStream();
         new DataOutputStream(var1).writeBoolean(var0);

         try {
            RecordStore.deleteRecordStore("AD_RMS_SAVED");
         } catch (RecordStoreException var4) {
         }

         RecordStore var3;
         (var3 = RecordStore.openRecordStore("AD_RMS_SAVED", true)).addRecord(var1.toByteArray(), 0, var1.size());
         var3.closeRecordStore();
      } catch (Throwable var5) {
      }
   }

   private static void v() {
      try {
         ByteArrayOutputStream var6 = new ByteArrayOutputStream();
         DataOutputStream var7;
         (var7 = new DataOutputStream(var6)).writeShort(g.b);
         var7.writeByte(e.w[0]);
         var7.writeByte(e.w[1]);
         var7.writeByte(e.w[2]);
         var7.writeByte(e.w[3]);
         var7.writeByte(e.w[4]);
         var7.writeBoolean(e.C);
         var7.writeByte(e.D);
         var7.writeInt(e.t);
         var7.writeInt(e.H);
         var7.writeLong(e.g_);
         var7.writeInt(e.f);
         var7.writeInt(e.E);

         for (int var8 = 0; var8 < e.B.length; var8++) {
            var7.writeInt(e.B[var8]);
         }

         for (int var14 = 0; var14 < e.x.length; var14++) {
            var7.writeByte(e.x[var14]);
         }

         for (int var15 = 0; var15 < g.a_.length; var15++) {
            var7.writeByte(g.a_[var15]);
         }

         for (int var16 = 0; var16 < e.N.length; var16++) {
            var7.writeBoolean(e.N[var16]);
         }

         var7.writeLong(g.h_);
         Object[] var17;
         byte[] var9 = (byte[])(var17 = g.a(true))[0];
         short[] var10 = (short[])var17[1];
         var7.writeInt(var9.length);

         for (int var11 = 0; var11 < var9.length; var11++) {
            var7.writeByte(var9[var11]);
            var7.writeShort(var10[var11]);
         }

         System.gc();
         if (!aw) {
            com.vlm.redstar.client.ui.a.b(c.ak, c.aj);
         }

         try {
            RecordStore.deleteRecordStore("AD_RMS");
         } catch (RecordStoreException var12) {
         }

         RecordStore var18;
         (var18 = RecordStore.openRecordStore("AD_RMS", true)).addRecord(var6.toByteArray(), 0, var6.size());
         var18.closeRecordStore();
      } catch (Throwable var13) {
      }
   }

   private void w() {
      try {
         RecordStore var1;
         RecordEnumeration var2 = (var1 = RecordStore.openRecordStore("AD_RMS", false)).enumerateRecords(null, null, false);
         ByteArrayInputStream var3 = new ByteArrayInputStream(var2.nextRecord());
         DataInputStream var4 = new DataInputStream(var3);

         try {
            g.b = var4.readShort();
            e.w[0] = var4.readByte();
            e.w[1] = var4.readByte();
            e.w[2] = var4.readByte();
            e.w[3] = var4.readByte();
            e.w[4] = var4.readByte();
            e.C = var4.readBoolean();
            e.D = var4.readByte();
            e.t = var4.readInt();
            e.H = var4.readInt();
            e.g_ = var4.readLong();
            e.f = var4.readInt();
            e.E = var4.readInt();

            for (int var5 = 0; var5 < e.B.length; var5++) {
               e.B[var5] = var4.readInt();
            }

            for (int var12 = 0; var12 < e.x.length; var12++) {
               e.x[var12] = var4.readByte();
            }

            for (int var13 = 0; var13 < g.a_.length; var13++) {
               g.a_[var13] = var4.readByte();
            }

            for (int var14 = 0; var14 < e.N.length; var14++) {
               e.N[var14] = var4.readBoolean();
            }

            this.bc = true;
            g.h_ = var4.readLong();
            int var15;
            byte[] var6 = new byte[var15 = var4.readInt()];
            short[] var7 = new short[var15];

            for (int var8 = 0; var8 < var15; var8++) {
               var6[var8] = var4.readByte();
               var7[var8] = var4.readShort();
            }

            g.a(true, var6, var7);
            System.gc();
            g.b(true);
            this.bd = true;
            System.gc();
         } catch (Throwable var9) {
         }

         var1.closeRecordStore();
      } catch (RecordStoreNotFoundException var10) {
      } catch (RecordStoreException var11) {
         if (!this.bc) {
            this.d(false);
         }

         if (!this.bd) {
            this.d(true);
         }
      }
   }

   static String a(int var0, boolean var1) {
      StringBuffer var2;
      for (int var3 = (var2 = new StringBuffer(Integer.toString(Math.abs(var0)))).length() - 3; var3 > 0; var3 -= 3) {
         var2.insert(var3, ",");
      }

      return var1 ? (var0 < 0 ? "-" : "") + "$" + var2.toString() : (var0 < 0 ? "-" : "") + var2.toString();
   }

   private void p(int var1) {
      this.b((byte)108);
      this.ae = var1;
      this.af = 0;
   }

   public final void h() {
      this.af++;
      this.repaint();
      this.serviceRepaints();
   }

   private static String a(long var0, boolean var2) {
      Object var3 = null;
      long var4 = 1000L;
      long var6 = 60L * var4;
      long var8 = 60L * var6;
      long var10 = var0 / var8;
      long var18;
      long var12 = (var18 = var0 - var10 * var8) / var6;
      long var14 = (var0 = var18 - var12 * var6) / var4;
      long var20;
      long var16 = var20 = var0 - var14 * var4;
      return (var2
            ? new StringBuffer().append(var10).append("h ").append(var12).append("m ").append(var14).append("s ").append(var16)
            : (var10 > 0L
                  ? new StringBuffer().append(var10).append("h ").append(var12).append("m ")
                  : (var12 > 0L ? new StringBuffer().append(var12).append("m ") : new StringBuffer()))
               .append(var14)
               .append("s"))
         .toString();
   }

   static void a(int var0) {
      byte var2 = g.d(var0);
      String var1;
      a(var1 = c.bV[var2], var0);
   }

   static void a(String var0) {
      int var1 = e.T * 32 + e.S;
      a(var0, var1);
   }

   private static void a(String var0, int var1) {
      label14: {
         int var2 = var1 / 32;
         int var3;
         aa = (var3 = var1 % 32) * 32 + g.l + 16;
         ab = var2 * 32 + g.m - 13;
         ac = var0;
         int var4 = J.a(ac);
         int var10000;
         if (aa - (var4 >> 1) < 0) {
            var10000 = (var4 >> 1) + 2;
         } else {
            if (aa + (var4 >> 1) <= bw) {
               break label14;
            }

            var10000 = bw - (var4 >> 1) - 2;
         }

         aa = var10000;
      }

      ad = 0;
   }

   public final void i() {
      b(false);

      for (int var1 = 0; var1 < 7; var1++) {
         aW[var1] = 0;
      }

      ba = 0;
      z();
   }

   public final String[] j() {
      return new String[]{
         c.L,
         c.M,
         c.V,
         c.Z,
         c.N,
         c.O,
         c.P,
         c.Q,
         c.R,
         c.U,
         c.bQ,
         c.J,
         c.K,
         c.I,
         c.aS,
         c.S,
         c.bu,
         c.bv,
         c.bw,
         c.bx,
         c.by,
         c.bz,
         c.aK,
         c.bB,
         c.bA,
         c.bC,
         c.bD,
         c.bE,
         c.bF,
         c.bG,
         c.bH,
         c.bI,
         c.bJ,
         c.bK,
         c.bL,
         c.bu,
         "use the up and down keys to enter name:",
         c.aO,
         c.bt,
         c.aM,
         c.aV,
         c.j,
         c.j,
         c.T,
         c.z,
         c.w,
         c.P,
         c.Q,
         c.I,
         c.bv,
         c.bM,
         c.bs,
         c.g,
         c.o,
         c.h,
         c.p,
         c.i,
         c.q,
         c.j,
         c.r,
         c.k,
         c.s,
         c.l,
         c.t,
         c.m,
         c.u,
         c.n,
         c.v
      };
   }

   public final String k() {
      if (!this.aZ) {
         this.B();
      }

      String var1 = "";

      for (int var2 = 0; var2 < 7; var2++) {
         if (var2 != 0) {
            var1 = var1 + " \n\n";
         }

         var1 = var1 + c.cf[var2];
         var1 = var1 + " \n" + aW[var2];
         if (var2 == 6) {
            var1 = var1 + "m";
         }
      }

      return var1 + " \n\n" + c.cf[7] + " \n" + a(ba, false) + "pts";
   }

   public final void a(byte var1) {
      Mid.c = new c(var1);
   }

   public final void l() {
      this.c(false);
   }

   public final void c(boolean var1) {
      if (!var1) {
         Mid.a();
      }
   }

   private static void a(Graphics var0, int var1, int var2, int var3, int var4, int[] var5, int var6, int var7, int var8, boolean var9) {
      int var10 = var1 + 1;
      int var11 = var2 + 1;
      int var12 = var7 == 0 ? 0 : var7 * (var3 - 2) / var8;
      int var13 = var4 - 2;
      var0.setClip(0, 0, bw, bh);
      var0.setColor(var6);
      var0.drawRect(var1, var2, var3, var4);
      if (!var9 && var12 > 0) {
         var0.setColor(var5[0]);
         var0.fillRect(var10, var11, var12 + 1, var13);
         var0.setColor(var5[1]);
         var0.drawLine(var10, var11, var10 + var12, var11);
         var0.setColor(var5[2]);
         var11 += var13;
         var0.drawLine(var10, var11, var10 + var12, var11);
      }
   }

   private static int a(int var0, int var1) {
      if (var0 != 0 && var0 != 50 && var0 != 100) {
         boolean var2 = false;
         int var3 = b(r(var0), r(var1));
         return q(c(r(100), var3)) + 1;
      } else {
         return var0;
      }
   }

   private static int q(int var0) {
      return var0 >> 16;
   }

   private static int r(int var0) {
      return var0 << 16;
   }

   private static int b(int var0, int var1) {
      return var1 == 0 ? Integer.MAX_VALUE : (int)(((long)var0 << 32) / var1 >> 16);
   }

   private static int c(int var0, int var1) {
      return (int)((long)var0 * var1 >> 16);
   }

   private void x() {
      String var1 = "";
      boolean var3 = true;
      if (Mid.a == 109) {
         if (e.m()) {
            byte var15 = 0;

            for (int var17 = 0; var17 < e.x.length; var17++) {
               if ((var15 = e.x[var17]) > 0) {
                  if (!var3) {
                     var1 = var1 + " \n\n";
                  }

                  var1 = var1 + var15 + "x " + " ";
                  var1 = var1 + e((byte)var17) + " \n";
                  var1 = var1 + c.aY + c.b[var17] + ")";
                  var3 = false;
               }
            }

            int var18 = this.N + J.g + (J.g >> 1);
            int var6 = this.O - (J.g + (J.g >> 1));
            J.a(var1, ai, var18, ah, var6, true);
         } else {
            var1 = c.aX + " \n\n" + c.aN + a(e.t, true);
            this.aI = J.a(var1, ah);
         }
      } else if (!e.l()) {
         if (e.v) {
            var1 = c.aW + a(e.u, true) + " \n\n" + c.aN + a(e.t, true);
            this.aI = J.a(var1, ah);
         } else {
            var1 = c.ah + " \n\n" + (e.i() - e.H) + c.ai + " \n\n" + c.aN + a(e.t, true);
            this.aI = J.a(var1, ah);
         }
      } else {
         for (int var4 = 0; var4 < e.B.length; var4++) {
            int var2;
            if ((var2 = e.B[var4]) > 0) {
               if (!var3) {
                  var1 = var1 + " \n\n";
               }

               var1 = var1 + var2 + "x " + " ";
               var1 = var1 + c.bV[var4];
               var1 = var1 + " \n(" + a(b.f[var4] * var2, true) + " " + c.aU + ")";
               var3 = false;
            }
         }

         int var14 = this.N + J.g * 2 + (J.g >> 1);
         int var5 = bh - var14 - this.ag;
         J.a(var1, ai, var14, ah, var5, true);
      }
   }

   private void a(String var1, boolean var2) {
      com.vlm.redstar.client.ui.c var10000;
      String var10001;
      if (var1 != null && var1 != "") {
         var10000 = J;
         var10001 = var1;
      } else {
         var10000 = J;
         var10001 = "INVALID TEXT PASSED";
      }

      var10000.a(var10001, ai, this.N, ah, this.O, var2);
   }

   private void a(Graphics var1, int var2, int var3, boolean var4) {
      var1.setClip(var2, var3, this.l.getWidth() >> 1, this.l.getHeight());
      int var7 = var4 ? 0 : this.l.getWidth() >> 1;
      var1.drawImage(this.l, var2 - var7, var3, 20);
   }

   public final void b(byte var1) {
      this.av = Mid.a;
      Mid.a = var1;
      J.c();
      this.aI = null;
      this.aj = 0;
      d var10000;
      String var10001;
      switch (var1) {
         case 101:
            e.v = false;
            e.c_ = false;
            if (this.at) {
               e.z = e.g();
               e.Q = g.b + g.c_ - 15 - 3;
               e.R = g.a(3);
               e.k = 0;
               this.at = false;
               g.p = true;
               g.a(e, true);
            }

            if (this.av == 106 || this.av == 104) {
               if (com.vlm.redstar.client.ui.d.d) {
                  this.e();
               }

               return;
            }

            return;
         case 102:
         case 105:
         case 107:
         case 108:
         case 111:
         case 112:
         case 116:
         default:
            return;
         case 103:
         case 104:
         case 109:
            this.x();
            return;
         case 106:
            this.at = true;
            ad = 21;
            if (com.vlm.redstar.client.ui.d.d && Mid.k != 2) {
               this.c(false);
               Mid.a((byte)2, -1);
               return;
            }

            return;
         case 110:
            y = 0;
            this.at = true;
            var10000 = this;
            var10001 = c.ce[y];
            break;
         case 113:
            this.U = (byte)t(this.T);
            this.U++;
            this.aj = this.U;
            boolean var7;
            if (this.U == 4) {
               var10000 = this;
               var7 = false;
            } else {
               var10000 = this;
               var7 = true;
            }

            var10000.V = var7;
            this.u(this.aj);
            return;
         case 114:
            this.bb = C();
            this.c((byte)7);
            String var2 = ax ? c.aQ : c.bh;
            var2 = var2 + " \n\n" + c.bi + a(this.bb, false) + "pts";
            var2 = var2 + " \n\n" + c.bk + a(e.f, false) + "m";
            var2 = var2 + " \n\n" + c.bj + a(e.h_, false);
            this.aI = J.a(var2, ah);
            return;
         case 115:
            this.aI = J.a(c.bn, ah);
            return;
         case 117:
            var10000 = this;
            var10001 = c.bp;
            break;
         case 118:
            var10000 = this;
            var10001 = c.bo;
      }

      var10000.a(var10001, false);
   }

   private void d(byte var1) {
      this.aI = J.a(g(var1) + " \n\n" + c.am + a(f(var1), true) + " \n(" + s(var1) + c.aZ + ")" + " \n\n" + c.aN + a(e.t, true), ah);
   }

   private void d(boolean var1) {
      if (var1) {
         this.gWorld = new g(false);
         if (e.f / 8 > 10) {
            g.f(e.S, e.f / 8);
            return;
         }
      } else {
         e = new a(this.gWorld, false, this);
      }
   }

   private static String b(byte var0, byte var1) {
      return c.cb[var0][var1];
   }

   private static int c(byte var0, byte var1) {
      return b.c[var0][var1];
   }

   private static String e(byte var0) {
      return c.bN[var0];
   }

   private static int f(byte var0) {
      return b.d[var0];
   }

   private static String g(byte var0) {
      return c.bO[var0];
   }

   private static int s(int var0) {
      return e.x[var0];
   }

   private static int t(int var0) {
      return e.w[var0];
   }

   private void u(int var1) {
      String var2 = "";
      var2 = var2 + c.am + a(c((byte)this.T, this.aj), true);
      var2 = var2 + " \n" + c.aR + a(e.t, true);
      var2 = var2 + " \n\n" + c.an + b.a[this.T][var1] + c.bZ[this.T];
      int var3 = b.a[this.T][var1] - b.a[this.T][t(this.T)];
      var2 = var2 + " \n\n" + c.ba + c.ca[this.T] + c.bb;
      var2 = var2 + var3 + c.bZ[this.T] + c.cg[this.T];
      int var4 = this.N + J.g * 2 + (J.g >> 1);
      int var5 = this.O - (J.g * 2 + (J.g >> 1));
      J.a(var2, ai, var4, ah, var5, false);
   }

   private static void b(Graphics var0, int var1, int var2, boolean var3) {
      int var4 = x.getHeight();
      int var5 = x.getWidth() >> 1;
      int var6 = var3 ? 0 : var5;
      var1 -= var5 >> 1;
      var2 -= var4 >> 1;
      var0.setClip(var1, var2, var5, var4);
      var0.drawImage(x, var1 - var6, var2, 20);
   }

   private Image y() {
      Image var4;
      Graphics var5;
      (var5 = (var4 = Image.createImage(bw, 33)).getGraphics()).setColor(16761889);
      var5.fillRect(0, 0, var4.getWidth(), var4.getHeight());

      for (int var6 = 0; var6 < this.aN.length; var6++) {
         int var2 = var4.getHeight() - 1 - var6;
         var5.setColor(this.aN[var6]);
         var5.drawLine(0, var2, var4.getWidth(), var2);
      }

      int var1 = 0;
      var5.drawImage(this.an, 1, 1, 20);
      var5.drawImage(g.x, 1, 10, 20);
      this.aM = g.x.getHeight() - 1;
      int var9 = 10 + this.aM + 1 + 1;
      var5.drawImage(v, 1, var9, 20);
      int var10 = (v.getHeight() >> 1) - (J.g >> 1);
      this.aO = 1 + v.getWidth() + 1;
      this.aQ = var9 + var10;
      var1 = 1 + v.getWidth() + 1 + J.a("0000m") + 1;
      var5.drawImage(w, var1, var9, 20);
      this.aP = var1 + w.getWidth() + 1;
      this.aR = this.aQ;
      var1 = bw - 1 - 45;
      var5.setColor(0);
      var5.fillRect(var1, 1, 45, 28);
      var5.setColor(27647);
      var5.fillRect(var1 + 1, 1, 43, 28);
      var5.setColor(this.aS[0]);
      var5.drawLine(var1 + 1, 1, var1 + 1, 28);
      var5.setColor(this.aS[1]);
      var5.drawLine(var1 + 2, 1, var1 + 2, 28);
      var5.setColor(this.aT[0]);
      var5.drawLine(var1 + 45 - 3, 1, var1 + 45 - 3, 28);
      var5.setColor(this.aT[1]);
      var5.drawLine(var1 + 45 - 2, 1, var1 + 45 - 2, 28);
      var5.setClip(var1, 1, 45, 2);
      var5.drawImage(this.t, var1 - 9, -18, 20);
      var5.setClip(var1, 24, 45, 5);
      var5.drawImage(this.u, var1 - 9, 24, 20);
      this.aU = bw - 2 - (1 + this.an.getWidth() + 1 + 45 + 1);
      b(var5, var1 + this.aV[0], 10, true);
      var5.setClip(0, 0, var4.getWidth(), var4.getHeight());
      var5.drawImage(this.al, var1 + this.aV[1], 10, 3);
      var5.drawImage(this.ak, var1 + this.aV[2], 10, 3);
      return var4;
   }

   public final boolean m() {
      return true;
   }

   public final byte[] n() {
      try {
         ByteArrayOutputStream var1 = new ByteArrayOutputStream();
         DataOutputStream var2;
         (var2 = new DataOutputStream(var1)).writeInt(this.bb);
         var2.writeShort(aX[0]);
         var2.writeShort(aX[5]);
         return var1.toByteArray();
      } catch (IOException var3) {
         return new byte[]{0};
      }
   }

   public final void c(byte var1) {
      if (!aw || var1 == 7) {
         switch (var1) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
               aX[var1]++;
               aW[var1]++;
               return;
            case 6:
               aX[var1] = (short)e.f;
               if (aW[var1] < e.f) {
                  aW[var1] = (short)e.f;
                  return;
               }
               break;
            case 7:
               if (this.bb > ba) {
                  ba = this.bb;
                  z();
               }
         }
      }
   }

   private static void z() {
      try {
         ByteArrayOutputStream var0 = new ByteArrayOutputStream();
         DataOutputStream var1 = new DataOutputStream(var0);

         for (int var2 = 0; var2 < 7; var2++) {
            var1.writeShort(aW[var2]);
         }

         var1.writeInt(ba);

         try {
            RecordStore.deleteRecordStore("AD_STATS");
         } catch (RecordStoreException var3) {
         }

         RecordStore var6;
         (var6 = RecordStore.openRecordStore("AD_STATS", true)).addRecord(var0.toByteArray(), 0, var0.size());
         var6.closeRecordStore();
      } catch (RecordStoreNotFoundException var4) {
      } catch (Throwable var5) {
      }
   }

   private void A() {
      try {
         RecordStore var1;
         RecordEnumeration var2 = (var1 = RecordStore.openRecordStore("AD_STATS", false)).enumerateRecords(null, null, false);
         ByteArrayInputStream var3 = new ByteArrayInputStream(var2.nextRecord());
         DataInputStream var4 = new DataInputStream(var3);

         try {
            for (int var5 = 0; var5 < aW.length; var5++) {
               aW[var5] = var4.readShort();
            }

            ba = var4.readInt();
            this.aZ = true;
         } catch (IOException var6) {
         }

         var1.closeRecordStore();
      } catch (RecordStoreNotFoundException var7) {
         ba = 0;
         z();
      } catch (RecordStoreException var8) {
      }
   }

   private void B() {
      aW = new short[7];
      aX = new short[7];

      for (int var1 = 0; var1 < 7; var1++) {
         aW[var1] = 0;
         aX[var1] = 0;
      }

      this.A();
   }

   public final void o() {
      this.bc = false;
      this.bd = false;

      try {
         this.p(g.g.length + 4);
         this.gImg = null;
         this.i = null;
         this.j = null;
         System.gc();
         if (this.gWorld != null) {
            this.gWorld = null;
            System.gc();
         }

         if (e != null) {
            e = null;
            System.gc();
         }

         this.gWorld = new g(aA);
         if (Mid.f) {
            e = new a(this.gWorld, false, this);
            if (Mid.f) {
               g.a(e, true);
               if (Mid.f) {
                  if (aA) {
                     this.w();
                  } else {
                     this.bc = true;
                     this.bd = true;
                  }

                  if (Mid.f) {
                     this.B();
                     ap = true;
                     aq = false;
                     ar = true;
                     this.aL = this.y();
                     aw = aA && aw;
                     X = false;
                     Y = false;
                     this.h();
                     if (Mid.f) {
                        d var10000;
                        byte var10001;
                        if (aA) {
                           if (!this.bc) {
                              var10000 = this;
                              var10001 = 118;
                           } else if (!this.bd) {
                              var10000 = this;
                              var10001 = 117;
                           } else {
                              this.at = true;
                              var10000 = this;
                              var10001 = 101;
                           }
                        } else {
                           var10000 = this;
                           var10001 = 110;
                        }

                        var10000.b(var10001);
                        g.p = true;
                        this.bb = 0;
                     }
                  }
               }
            }
         }
      } catch (Throwable var2) {
      }
   }

   private static int C() {
      long var0 = 100000L;
      long var2 = 0L;
      var2 = e.f * var0 / (10000L + e.h_ / 1000L);
      int var4 = g.g[2].length;
      int var5 = 3600 / var4;
      int var6 = e.f / var5 + 1;
      var2 *= var6;
      if (ax) {
         var2 *= 2L;
      }

      long var9;
      return (int)(var9 = var2 + e.t);
   }

   public final int p() {
      return 0;
   }

   public final Image[] q() {
      Image[] var1 = new Image[5];
      if (this.i == null) {
         this.i = Mid.a("/res/menuIcons.png");
      }

      if (this.j == null) {
         this.j = Mid.a("/res/secondaryMenuIcons.png");
      }

      var1[0] = this.i;
      var1[1] = this.j;
      var1[2] = this.l;
      var1[3] = Mid.a("/res/updownarrows.png");
      var1[4] = this.gImg;
      return var1;
   }

   static {
      Font.getFont(0, 1, 8);
   }
}
