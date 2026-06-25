package com.vlm.redstar.client.ui;

import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.Vector;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;

public final class d {
   private int T;
   private int U;
   private int V;
   private int W;
   private int X;
   private int Y;
   private int Z;
   private int aa;
   private int ab;
   private int ac;
   private int ad;
   private int ae;
   private int af;
   private int ag;
   private int ah;
   private int ai;
   private int aj;
   private int ak;
   protected aquadig.d a;
   private com.vlm.redstar.client.ui.c al;
   private com.vlm.redstar.client.ui.c am;
   private com.vlm.redstar.client.core.csp.a an;
   private String ao;
   byte b;
   private byte ap;
   private byte aq;
   private byte ar = 0;
   int c = 0;
   private byte as;
   private int at;
   private byte[] au;
   private byte[] av;
   private byte[] aw;
   private byte[] ax;
   private static boolean ay = false;
   public static boolean d = true;
   private boolean az = true;
   private boolean aA = false;
   private boolean aB = false;
   private boolean aC = false;
   private boolean aD = false;
   private boolean aE = false;
   private boolean aF = false;
   private boolean aG = false;
   public static boolean e = true;
   private boolean aH = false;
   private boolean aI = false;
   private boolean aJ = false;
   private static boolean aK = false;
   private boolean aL = false;
   private boolean aM = false;
   private boolean aN = false;
   private boolean aO = false;
   private boolean aP = false;
   private boolean aQ = false;
   private boolean aR = false;
   private boolean aS = false;
   private boolean aT = false;
   private Image[] aU;
   private Image aV;
   private Image aW;
   private Image aX;
   private Image aY;
   private String[] aZ;
   private String[] ba;
   private int bb;
   private byte bc;
   private byte bd;
   private byte be;
   private boolean bf = false;
   private static long bg = 400L;
   static long f;
   static boolean g = false;
   private long bh;
   private int bi;
   private long bj = 0L;
   private int bk = 2000;
   private byte bl = -1;
   public static int h = 8;
   private int bm = 0;
   private char[] bn = null;
   private String bo;
   public String i;
   private String bp;
   private boolean bq = false;
   private int br;
   public static int[] j = null;
   public static byte k = 1;
   public byte l = 0;
   // In-memory replacement for the disabled RMS persistence (l()/m()): the chosen
   // language must survive across menu instances, otherwise a rebuilt in-game menu
   // loads no strings and crashes on a null page title.
   private static byte savedLang = 0;
   private static boolean savedBs = false;
   private boolean bs = false;
   private boolean bt = false;
   private boolean[] bu;
   private byte[] bv;
   private byte bw;
   private int bx = 0;
   private int by = 0;
   public static byte m = 2;
   public static int n = 5;
   public static int o = Integer.MIN_VALUE;
   public static int p = 20;
   private int bz;
   public static int q = 7;
   private int bA;
   private int bB;
   private int bC;
   private int bD;
   private int bE;
   private int bF;
   public static int r = 3;
   private Vector bG;
   private int bH = 0;
   private int bI = 0;
   public static int s = 1;
   private int bJ = 0;
   private int bK = 0;
   public static int t = 1;
   private long bL = 0L;
   private int bM = 0;
   private int bN = 5;
   private int bO = 0;
   private boolean bP = true;
   private byte bQ = 4;
   private byte bR;
   private boolean bS = false;
   private boolean bT = false;
   private boolean bU = false;
   private int bV;
   private boolean bW = false;
   private boolean bX = false;
   private boolean bY = false;
   private boolean bZ = false;
   private boolean ca = false;
   private Vector cb = null;
   private int cc = 0;
   private boolean cd = false;
   private Vector ce = null;
   private int cf = 0;
   private Vector cg = null;
   private int ch = 0;
   private int ci = 1;
   private int cj = 0;
   private int ck = 0;
   private boolean cl = true;
   private int cm = 0;
   private int cn = 0;
   private int co;
   private byte[] cp = null;
   private int cq;
   private String cr = "";
   private boolean cs = false;
   private String ct;
   private String cu;
   private String cv;
   private String cw;
   private String cx;
   private String cy;
   private String cz;
   private String cA;
   private String cB;
   private String cC;
   private String cD;
   private String cE;
   private String cF;
   private String cG;
   private String cH;
   private String cI;
   private String[] cJ;
   String u;
   private String cK;
   private String cL;
   private String cM;
   private String cN;
   private String cO;
   private String cP;
   private String cQ;
   private String cR;
   private String cS;
   private String cT;
   private String cU;
   private String cV;
   private String cW;
   private String cX;
   private String cY;
   private String cZ;
   private String da;
   private String db;
   private String dc;
   private String dd;
   private String de;
   private String df;
   String v;
   String w;
   String x;
   String y;
   String z;
   String A;
   String B;
   private String dg;
   private String[] dh;
   String C;
   String D;
   String E;
   public static boolean F = true;
   public static boolean G = false;
   public static int H = -1;
   public static int I = 30;
   public static byte J = 1;
   public static int K = 200;
   public static byte[] L = new byte[]{0};
   public static boolean M = false;
   public static int N = Integer.MIN_VALUE;
   public static int O = Integer.MIN_VALUE;
   public static int P = Integer.MIN_VALUE;
   public static String Q;
   public static int[] R = new int[]{49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 42, 35, 1, 6, 2, 5, 9, 10, 8, 11};
   String S = "msd";

   public d(aquadig.d var1, int var2, int var3, com.vlm.redstar.client.ui.c var4, com.vlm.redstar.client.ui.c var5, int var6) throws Exception {
      if (var1 == null) {
         throw new Exception("GameMenus(): ErrorCode 1");
      } else {
         this.a = var1;
         this.C();
         boolean var7 = var6 == -1;
         this.bt = false;
         this.an = com.vlm.redstar.client.core.csp.a.a((javax.microedition.midlet.MIDlet)null, (String)null);
         if (this.an == null) {
            throw new Exception("GameMenus(): ErrorCode 2");
         } else {
            this.m();
            this.bu = new boolean[9];
            byte[] var8 = L;
            if (L != null && var8.length != 0) {
               this.cJ = new String[var8.length];
               if (var8.length == 1) {
                  this.l = var8[0];
                  this.bs = true;
               } else {
                  for (int var9 = 0; var9 < var8.length; var9++) {
                     this.bu[var9] = false;
                  }

                  for (int var13 = 0; var13 < var8.length; var13++) {
                     this.bu[var8[var13]] = true;
                  }

                  this.bv = new byte[var8.length];
                  int var14 = 0;

                  for (int var10 = 0; var10 < this.bu.length; var10++) {
                     if (this.bu[var10]) {
                        label145: {
                           String[] var10000;
                           int var10001;
                           String var10002;
                           switch (var10) {
                              case 0:
                                 var10000 = this.cJ;
                                 var10001 = var14;
                                 var10002 = "ENGLISH";
                                 break;
                              case 1:
                                 var10000 = this.cJ;
                                 var10001 = var14;
                                 var10002 = "ITALIANO";
                                 break;
                              case 2:
                                 var10000 = this.cJ;
                                 var10001 = var14;
                                 var10002 = "FRANCAIS";
                                 break;
                              case 3:
                                 var10000 = this.cJ;
                                 var10001 = var14;
                                 var10002 = "DEUTSCH";
                                 break;
                              case 4:
                                 var10000 = this.cJ;
                                 var10001 = var14;
                                 var10002 = "ESPANOL";
                                 break;
                              case 5:
                                 var10000 = this.cJ;
                                 var10001 = var14;
                                 var10002 = "POLSKI";
                                 break;
                              case 6:
                                 var10000 = this.cJ;
                                 var10001 = var14;
                                 var10002 = "CZECH";
                                 break;
                              case 7:
                                 var10000 = this.cJ;
                                 var10001 = var14;
                                 var10002 = "PORTUGUESE";
                                 break;
                              case 8:
                                 var10000 = this.cJ;
                                 var10001 = var14;
                                 var10002 = "TURKISH";
                                 break;
                              default:
                                 break label145;
                           }

                           var10000[var10001] = var10002;
                        }

                        this.bv[var14] = (byte)var10;
                        var14++;
                     }
                  }
               }

               if (this.bs) {
                  this.a(this.l);
               } else {
                  this.bt = false;
               }

               if (var4 == null) {
                  throw new Exception("GameMenus() : ErrorCode 4");
               } else if (var5 == null) {
                  throw new Exception("GameMenus() : ErrorCode 5");
               } else {
                  this.al = var4;
                  this.am = var5;
                  Image[] var15 = this.a.q();
                  this.aW = var15[0];
                  if (this.aW == null) {
                     throw new Exception("GameMenus() - Main Menu Icon strip is NULL!");
                  } else {
                     this.aX = var15[1];
                     if (this.aX == null) {
                        throw new Exception("GameMenus() - Secondary Main Menu Icon strip is NULL!");
                     } else {
                        this.aY = var15[2];
                        if (this.aY == null) {
                           throw new Exception("GameMenus() - Selection Arrows (left/right arrows) was passed as NULL!");
                        } else {
                           this.bD = this.aY.getWidth() >> 1;
                           this.bE = this.aY.getHeight();
                           if (var15 != null && var15[3] != null) {
                              this.aV = var15[3];
                              this.bC = this.aV.getHeight() >> 1;
                              if (var7) {
                                 if (var15[4] != null && var15.length > 4) {
                                    this.az = true;
                                    this.aU = new Image[var15.length - 4];
                                    System.arraycopy(var15, 4, this.aU, 0, var15.length - 4);
                                    if (j != null) {
                                       if (j.length != this.aU.length) {
                                          throw new Exception("GameMenus() : ErrorCode 5");
                                       }
                                    } else {
                                       j = new int[this.aU.length];
                                    }

                                    this.bk = 1000 * k;
                                 } else {
                                    this.az = false;
                                 }
                              }

                              this.bx = var2;
                              this.by = var3;
                              this.bA = 5;
                              this.bB = this.bx - this.bA * 2;
                              com.vlm.redstar.client.ui.d var16;
                              int var18;
                              if (H > this.al.g + 2) {
                                 var16 = this;
                                 var18 = H;
                              } else {
                                 var16 = this;
                                 var18 = this.al.g + 2;
                              }

                              var16.bz = var18;
                              if (N == Integer.MIN_VALUE) {
                                 N = this.by - this.bz - 1;
                              }

                              if (p == Integer.MIN_VALUE) {
                                 p = q + this.am.g + m;
                              }

                              if (O == Integer.MIN_VALUE) {
                                 O = this.by - (p + m + this.bz);
                              }

                              if (o == Integer.MIN_VALUE) {
                                 o = p;
                              }

                              if (P == Integer.MIN_VALUE) {
                                 P = p + m;
                              }

                              f = System.currentTimeMillis();
                              this.bj = System.currentTimeMillis();
                              byte var11 = d();
                              this.au = new byte[var11];
                              this.aw = new byte[var11];
                              this.ax = new byte[var11];
                              this.av = new byte[var11];

                              for (int var12 = 0; var12 < var11; var12++) {
                                 this.au[var12] = 0;
                                 this.aw[var12] = 0;
                                 this.ax[var12] = 0;
                                 this.av[var12] = 0;
                              }

                              this.bM = this.s();
                              this.bO = this.bM * this.bN;
                              this.bT = true;
                              byte var19;
                              if (var7) {
                                 var16 = this;
                                 var19 = this.g();
                              } else if (var6 == 8) {
                                 if (Q == null) {
                                    Q = "";
                                 }

                                 var16 = this;
                                 var19 = 8;
                              } else if (var6 == 6) {
                                 var16 = this;
                                 var19 = 6;
                              } else {
                                 var16 = this;
                                 var19 = 2;
                              }

                              var16.a(var19, false);
                              aK = true;
                           } else {
                              throw new Exception("GameMenus() : ErrorCode 6");
                           }
                        }
                     }
                  }
               }
            } else {
               throw new Exception("GameMenus(): ErrorCode 3");
            }
         }
      }
   }

   /** Updates menu layout when the game canvas is resized (dynamic resolution). */
   public void syncScreenDimensions(int width, int height) {
      this.bx = width;
      this.by = height;
      this.bB = this.bx - this.bA * 2;
      int var18 = H > this.al.g + 2 ? H : this.al.g + 2;
      this.bz = var18;
      N = this.by - this.bz - 1;
      O = this.by - (p + m + this.bz);
      o = p;
      P = p + m;
      this.bi = this.by;
      this.bF = this.by + this.al.g;
   }

   private static byte d() {
      return 26;
   }

   private void a(byte var1, boolean var2) {
      if (!this.bT) {
         if (this.bQ == 4) {
            this.b(var1, var2);
            return;
         }
      } else {
         this.bT = false;
      }

      this.aF = var2;
      if (this.b != var1) {
         this.au[this.b] = this.ap;
         this.aw[this.b] = this.bc;
         this.ax[this.b] = this.bd;
         this.av[this.b] = this.aq;
      }

      this.bw = this.b;
      this.b = var1;
      aquadig.d var10000;
      byte var10001;
      if (this.aD) {
         var10000 = this.a;
         var10001 = 4;
      } else {
         var10000 = this.a;
         var10001 = this.b;
      }

      var10000.a(var10001, this.au[this.bw]);
      com.vlm.redstar.client.ui.d var3;
      if (!this.aF) {
         this.ap = 0;
         var3 = this;
         var10001 = 0;
      } else {
         this.ap = this.au[this.b];
         var3 = this;
         var10001 = this.av[this.b];
      }

      var3.aq = var10001;
      this.ar = 0;
      this.bb = 0;
      this.j();
      h();
      this.aG = false;
      this.k();
      this.t();
      if (this.bU) {
         this.z();
         this.bU = false;
      }

      this.as = J;
      this.at = K;
      switch (this.b) {
         case 0:
            this.bl++;
            if (this.bl >= this.aU.length) {
               this.aA = true;
               this.aU = null;
               System.gc();
               this.a(this.g(), false);
            }
            break;
         case 1:
            this.cs = false;
            this.cr = this.dg;
            this.bG = null;
            if (this.cr != null) {
               this.bG = this.al.a(this.cr, this.bB);
               h();
               this.bi = this.by;
            }

            this.bj = System.currentTimeMillis() + 300L;
            break;
         case 2:
            this.ao = this.x;
            this.aq = 5;
            this.aq++;
            this.aN = false;
            this.aM = this.a.g();
            if (!this.aM && !this.aF) {
               this.ap++;
            }

            this.aq++;
            this.aq++;
            this.n();
            this.aB = false;
            this.aI = false;
            this.aP = false;
            this.bW = false;
            this.bX = false;
            this.bY = false;
            this.bZ = false;
            this.ca = false;
            this.ce = null;
            this.cg = null;
            break;
         case 3:
            this.ao = this.y;
            this.aq = 1;
            this.aq++;
            this.aq++;
            if (this.cJ.length > 1) {
               this.aq++;
            }

            this.aq++;
            this.n();
            this.aB = true;
            break;
         case 4:
            this.ao = this.z;
            this.aD = false;
            this.aq = (byte)this.aZ.length;
            this.n();
            break;
         case 5:
            if (this.aD) {
               this.ao = this.aZ[this.au[this.bw]];
               this.a(this.ba[this.au[this.bw]], M);
            }
            break;
         case 6:
            this.bG = this.al.a(this.C, this.bB);
            this.aE = false;
            this.bF = this.by + this.al.g;
            break;
         case 7:
            this.ao = this.A;
            this.bG = this.al.a(this.cH, this.bB);
            break;
         case 8:
            this.ao = Q;
            this.aP = true;
            this.bW = false;
            this.aq = 2;
            this.aq++;
            this.n();
            if (!this.aI) {
               if (this.a.m()) {
                  this.a(this.a.n());
               }

               this.aI = true;
            }
            break;
         case 9:
            this.aI = false;
            this.a.c(true);
            aK = false;
            break;
         case 10:
            com.vlm.redstar.client.ui.d var4;
            String var7;
            if (this.bt) {
               var4 = this;
               var7 = this.cI.toUpperCase();
            } else {
               var4 = this;
               var7 = "";
            }

            var4.ao = var7;
            this.aq = (byte)this.cJ.length;
            this.n();
            break;
         case 11:
            this.ao = this.B;
            this.br = Integer.MAX_VALUE;
            this.bG = this.al.a("Enter your name SMS-style with the keypad:", this.bB);
            this.e();
            break;
         case 12:
            this.ao = this.u;
            if (this.bw == 13) {
               this.ce = null;
            }

            if (!this.aF) {
               this.ca = false;
               this.bZ = false;
               this.an.e();
            } else {
               this.bY = true;
               this.bX = false;
               this.n();
            }
            break;
         case 13:
            if (!this.bW) {
               this.ao = (String)this.cg.elementAt(this.cq * 6 + 1 + 1);
            }

            if (!this.bW) {
               this.an.a((Integer)this.cg.elementAt(this.cq * 6 + 0 + 1), this.ci, this.A());
            }

            this.bY = false;
            this.bZ = false;
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
         default:
            break;
         case 25:
            this.ao = this.D.toUpperCase();
            this.a(this.a.k(), F);
      }

      this.ao = this.ao == null ? "" : this.ao.toUpperCase();
      this.bJ = this.am.a(this.ao);
      if (this.bJ >= this.bx) {
         this.aG = true;
      }

      this.aF = false;
      if (this.b == 9) {
         boolean var8;
         if (this.aN) {
            this.aN = false;
            var10000 = this.a;
            var8 = true;
         } else {
            var10000 = this.a;
            var8 = false;
         }

         var10000.a(var8);
      }
   }

   public final void a(Graphics var1) {
      if (this.b != 9) {
         this.bH++;

         try {
            if (this.b != 0 && this.b != 1) {
               this.c(var1);
            }
         } catch (Throwable var5) {
         }

         try {
            switch (this.b) {
               case 0:
                  this.d(var1);
                  break;
               case 1:
                  this.e(var1);
                  break;
               case 2:
                  this.f(var1);
                  break;
               case 3:
                  this.b(var1);
                  break;
               case 4:
                  this.b(var1);
                  break;
               case 5:
                  this.al.a(var1);
                  break;
               case 6:
                  this.g(var1);
                  break;
               case 7:
                  this.al.a(var1, this.bG, this.bx >> 1, (this.by >> 1) - (this.al.a(this.bG) >> 1), 1);
                  break;
               case 8:
                  this.h(var1);
               case 9:
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
               default:
                  break;
               case 10:
                  this.b(var1);
                  break;
               case 11:
                  this.i(var1);
                  break;
               case 12:
                  this.j(var1);
                  break;
               case 13:
                  this.k(var1);
                  break;
               case 25:
                  if (com.vlm.redstar.client.ui.c.b()) {
                     this.al.a(var1);
                  } else {
                     this.al.a(var1, this.f() - (this.al.a() >> 1));
                  }
            }
         } catch (Throwable var4) {
         }

         try {
            if (this.y()) {
               boolean var2;
               if ((var2 = this.a.a(var1, this.bQ)) && this.bQ == 0) {
                  this.a(this.bR, this.bS);
                  this.bQ = 2;
               } else if (var2 && this.bQ == 2) {
                  this.bQ = 4;
                  if (this.b == 0) {
                     this.bj = System.currentTimeMillis();
                  }
               }
            }
         } catch (Throwable var6) {
         }

         try {
            if (com.vlm.redstar.client.ui.a.a()) {
               com.vlm.redstar.client.ui.a.a(var1);
            }
         } catch (Throwable var3) {
         }
      }
   }

   private void b(Graphics var1) {
      int var2 = this.f();
      if (this.bf) {
         var2 = this.a(var1, var2, true);

         for (int var5 = this.bc; var5 < this.bd; var5++) {
            var2 = this.a(var1, this.c((byte)var5), var2, this.ap == var5);
         }

         this.a(var1, var2, false);
      } else {
         for (int var3 = 0; var3 < this.aq; var3++) {
            var2 = this.a(var1, this.c((byte)var3), var2, this.ap == var3);
         }
      }
   }

   private void c(Graphics var1) {
      var1.setClip(0, 0, this.bx, this.by);
      boolean var2 = false;

      try {
         Object var3 = null;
         var2 = this.a.a(var1, this.b, this.b(true), this.b(false));
      } catch (Throwable var5) {
      }

      if (this.ao != null && this.ao != "") {
         try {
            this.ao = this.ao.toUpperCase();
            if (this.aG) {
               this.am.a(var1, this.ao, this.bx - this.bI, q, 4);
               this.bI = this.bI + s;
               if (this.bx - this.bI + this.bJ < 0) {
                  this.k();
               }
            } else {
               this.am.a(var1, this.ao, this.bx >> 1, q);
            }
         } catch (Throwable var4) {
         }
      }

      if (!var2) {
         try {
            this.a(var1, this.b(true), true);
            this.a(var1, this.b(false), false);
            return;
         } catch (Throwable var6) {
         }
      }
   }

   private void a(Graphics var1, String var2, boolean var3) {
      if (var2 != null && var2 != "") {
         if (var3) {
            this.al.a(var1, var2, 2, N + 2, 4);
         } else {
            this.al.a(var1, var2, this.bx - 2, N + 2, 8);
         }
      }
   }

   private void d(Graphics var1) {
      this.bh = System.currentTimeMillis();
      if (this.bh < this.bj + this.bk && this.bQ == 4) {
         var1.setClip(0, 0, this.bx, this.by);
         var1.setColor(j[this.bl]);
         var1.fillRect(0, 0, this.bx, this.by);
         var1.drawImage(this.aU[this.bl], this.bx >> 1, this.by >> 1, 3);
      } else {
         if (!this.y()) {
            this.a(this.g(), false);
         }
      }
   }

   private void e(Graphics var1) {
      this.aR = true;
      this.a.a(var1);
      if (this.bG != null) {
         var1.setClip(0, 0, this.bx, this.by);
         if (System.currentTimeMillis() > this.bj) {
            if (this.bi > this.by - (this.al.a(this.bG) + this.al.g)) {
               this.bi -= 2;
            } else {
               this.cs = true;
               i();
               if (!g) {
                  return;
               }
            }

            this.al.a(var1, this.bG, this.bx >> 1, this.bi, 1);
         }
      }
   }

   private void f(Graphics var1) {
      int var2 = this.f();
      this.al.a(var1, this.c(this.ap), this.bx >> 1, var2);
      var2 += this.al.g + m;
      this.a(var1, var2, this.ap, false);
      this.a(var1, var2, (byte)this.a(true), true);
      this.a(var1, var2, (byte)this.a(false), false);
   }

   private void a(Graphics var1, int var2, byte var3, boolean var4) {
      int var6 = this.bx >> 1;
      int var7 = this.aW.getWidth() / this.aq;
      int var8 = this.aW.getHeight();
      if (var3 == this.ap) {
         var6 -= var7 >> 1;
         var1.setClip(var6, var2, var7, var8);
         var1.drawImage(this.aW, var6 - var3 * var7, var2, 20);
         var1.setClip(0, 0, this.bx, this.by);
      } else {
         int var9 = this.aX.getWidth() / this.aq;
         int var10 = this.aX.getHeight();
         var6 = var4 ? (this.bx >> 1) - (var7 >> 1) - n - var9 : (this.bx >> 1) + (var7 >> 1) + n;
         int var5 = var2 + (var8 - var10 >> 1);
         var1.setClip(var6, var5, var9, var10);
         var1.drawImage(this.aX, var6 - var3 * var9, var5, 20);
         var1.setClip(0, 0, this.bx, this.by);
         var5 = var2 + (var8 - this.bE >> 1);
         var6 = var4 ? var6 - (n + this.bD) : var6 + var9 + n + this.bD;
         this.b(var1, var6, var5, var4);
      }

      var1.setClip(0, 0, this.bx, this.by);
   }

   private int a(boolean var1) {
      byte var2 = this.ap;
      if (var1) {
         if (var2 == 0) {
            return this.aq - 1;
         } else if (var2 == 1) {
            return this.aM ? var2 - 1 : this.aq - 1;
         } else {
            return var2 - 1;
         }
      } else if (var2 == this.aq - 1) {
         return this.aM ? 0 : 1;
      } else {
         return var2 + 1;
      }
   }

   private void g(Graphics var1) {
      if (!this.aE) {
         var1.setClip(0, 0, this.bx, this.by - this.bz);
         this.al.a(var1, this.bG, this.bx >> 1, this.bF, 1);
         var1.setClip(0, 0, this.bx, this.by);
         this.bF = this.bF - r;
         if (this.bF + this.al.a(this.bG) < 0) {
            this.aE = true;
            return;
         }
      } else {
         this.a.b(var1);
      }
   }

   private void h(Graphics var1) {
      this.b(var1);
   }

   private void i(Graphics var1) {
      int var2 = this.f();
      this.al.a(var1, this.bG, this.bx >> 1, var2, 1);
      var2 = var2 + this.al.a(this.bG) + this.al.g;
      var1.setColor(0);
      var1.fillRect(this.bA, var2, this.bx - this.bA * 2 - 1, this.al.g * 2);
      var1.setColor(-1);
      var1.drawRect(this.bA, var2, this.bx - this.bA * 2 - 1, this.al.g * 2);
      var2 += this.al.g >> 1;
      int var3 = this.bx >> 1;
      this.bp = String.valueOf(this.bn);
      int var4 = this.al.a(' ');
      this.al.f = this.al.a('_');
      var3 -= this.al.a(this.bp) >> 1;

      for (int var5 = 0; var5 < this.bn.length; var5++) {
         if (var5 == this.bm) {
            i();
            if (g) {
               this.al.a(var1, this.bn[var5] == ' ' ? '_' : this.bn[var5], var3, var2);
            } else {
               this.al.a(var1, ' ', var3, var2);
            }
         } else {
            this.al.a(var1, this.bn[var5] == ' ' ? '_' : this.bn[var5], var3, var2);
         }

         com.vlm.redstar.client.ui.c var10001;
         char var10002;
         if (this.bn[var5] == ' ') {
            var10001 = this.al;
            var10002 = '_';
         } else {
            var10001 = this.al;
            var10002 = this.bn[var5];
         }

         var3 += var10001.a(var10002);
      }

      this.al.f = var4;
   }

   private void j(Graphics var1) {
      if (this.aq == 0 && this.bZ) {
         this.al.a(var1, this.bG, this.bx >> 1, this.f() - (this.al.a(this.bG) >> 1), 1);
      } else if (this.aq == 0 && !this.ca) {
         this.a(var1, this.cQ);
      } else if (this.aq > 0 || !this.ca) {
         this.b(var1);
      } else if (this.bG != null) {
         this.al.a(var1, this.bG, this.bx >> 1, this.f() - (this.al.a(this.bG) >> 1), 1);
      } else {
         this.al.a(var1, "NO SCORE SETS", this.bx >> 1, this.f());
      }
   }

   private void k(Graphics var1) {
      if (this.aq == 0 && this.bX) {
         this.al.a(var1, this.bG, this.bx >> 1, this.f(), 1);
      } else if (this.aq == 0 && !this.bY) {
         this.a(var1, this.cQ);
      } else if (this.aq <= 0 && this.bY) {
         this.al.a(var1, this.da, this.bx >> 1, this.f());
      } else {
         this.aJ = true;
         int var2 = p + 4;
         int var3 = this.bM * this.cm;
         var2 = this.ci <= 1 && this.co <= 1 && var3 <= 0 && this.cm <= 0 ? var2 + this.bC : this.a(var1, var2, true);
         int var4 = 0;

         for (int var5 = var3; var5 < var3 + this.bM; var5++) {
            if (var5 <= this.aq - 1) {
               var4++;
               var2 = this.a(var1, var2, var5, var4 >= this.bM);
            }
         }

         if ((Integer)this.ce.elementAt(var3 * 4 + 0 + 6) + var4 < this.cj) {
            this.a(var1, var2, false);
         }

         var2 = this.by - this.bz - this.al.g;
         com.vlm.redstar.client.ui.c var10000;
         Graphics var10001;
         String var10002;
         if (this.ck > 0) {
            String var8 = this.db + this.ck;
            var10000 = this.al;
            var10001 = var1;
            var10002 = var8;
         } else {
            var10000 = this.al;
            var10001 = var1;
            var10002 = this.dc;
         }

         var10000.a(var10001, var10002, this.bx >> 1, var2);
         this.aJ = false;
      }
   }

   private int a(Graphics var1, String var2, int var3, boolean var4) {
      aquadig.d var10000 = this.a;
      this.al.a(var2);
      int var5 = var10000.a(var1, var3, var4);
      int var6 = var3 + (this.b(this.b) >> 1) - (this.al.g >> 1);
      this.a(var1, var2, var5, var6, this.as == 1, var4);
      return var3 + this.b(this.b) + m;
   }

   private int a(Graphics var1, int var2, int var3, boolean var4) {
      int var6 = 0;
      var6 = (Integer)this.ce.elementAt(var3 * 4 + 0 + 6);
      this.al.a(var1, "" + var6, this.bA, var2, 4);
      int var5 = var2 + this.al.g;
      String var7 = (String)this.ce.elementAt(var3 * 4 + 1 + 6);
      var7 = this.b(var7, this.bx - 2 * this.bA);
      this.al.a(var1, var7, this.bA, var5, 4);
      var5 += this.al.g;
      var6 = (Integer)this.ce.elementAt(var3 * 4 + 2 + 6);
      this.al.a(var1, var6 + " " + (String)this.ce.elementAt(5), this.bx - this.bA, var5, 8);
      if (!var4) {
         var5 += this.al.g;
         var1.setColor(255, 255, 255);
         var1.drawLine(this.bA, var5, this.bx - this.bA, var5);
      }

      return var2 + this.b(this.b) + m;
   }

   private int a(Graphics var1, int var2, boolean var3) {
      i();
      Graphics var10000;
      Image var10001;
      int var10002;
      int var10003;
      byte var10004;
      if (var3) {
         if (this.bc <= 0 && !this.aJ || !g) {
            return var2 + this.bC;
         }

         var1.setClip(0, var2, this.bx, this.bC);
         var10000 = var1;
         var10001 = this.aV;
         var10002 = this.bx / 2;
         var10003 = var2;
         var10004 = 17;
      } else {
         var2 -= m;
         if (this.bd >= this.aq && !this.aJ || !g) {
            return var2 + this.bC;
         }

         var1.setClip(0, var2, this.bx, this.bC);
         var10000 = var1;
         var10001 = this.aV;
         var10002 = this.bx / 2;
         var10003 = var2 + this.bC - 1;
         var10004 = 33;
      }

      var10000.drawImage(var10001, var10002, var10003, var10004);
      var1.setClip(0, 0, this.bx, this.by);
      return var2 + this.bC;
   }

   private void b(Graphics var1, int var2, int var3, boolean var4) {
      i();
      Graphics var10000;
      Image var10001;
      int var10002;
      int var10003;
      byte var10004;
      if (var4) {
         if (!g) {
            return;
         }

         var1.setClip(var2, var3, this.bD, this.bE);
         var10000 = var1;
         var10001 = this.aY;
         var10002 = var2;
         var10003 = var3;
         var10004 = 20;
      } else {
         if (!g) {
            return;
         }

         var1.setClip(var2 - this.bD, var3, this.bD, this.bE);
         var10000 = var1;
         var10001 = this.aY;
         var10002 = var2;
         var10003 = var3;
         var10004 = 24;
      }

      var10000.drawImage(var10001, var10002, var10003, var10004);
      var1.setClip(0, 0, this.bx, this.by);
   }

   private void a(Graphics var1, String var2) {
      int var3 = (this.bx >> 1) - (this.al.a(var2) >> 1);
      int var4 = this.by >> 1;
      this.al.a(var1, var2, var3, var4, 4);
      var3 += this.al.a(var2);
      int var5 = this.bH % 4;

      for (int var6 = 0; var6 < var5; var6++) {
         this.al.a(var1, '.', var3 + var6 * 3, var4);
      }
   }

   public final void a(int var1) {
      if (this.b != 9) {
         if (!this.y()) {
            if (!this.a.a()) {
               if (com.vlm.redstar.client.ui.a.a()) {
                  if (var1 == this.aj) {
                     var1 = this.ah;
                  }

                  this.b(var1);
               } else {
                  switch (this.b) {
                     case 0:
                        this.a((byte)0, false);
                        return;
                     case 1:
                        if (this.bG != null) {
                           if (this.cs) {
                              this.a((byte)2, false);
                              return;
                           }
                        } else if (System.currentTimeMillis() > this.bj) {
                           this.a((byte)2, false);
                           return;
                        }
                        break;
                     case 2:
                        this.e(var1);
                        return;
                     case 3:
                        if (!this.c(var1)) {
                           this.f(var1);
                           return;
                        }
                        break;
                     case 4:
                        this.g(var1);
                        return;
                     case 5:
                        this.h(var1);
                        return;
                     case 6:
                        if (var1 == this.ai) {
                           this.a((byte)2, true);
                           return;
                        }
                        break;
                     case 7:
                        this.i(var1);
                        return;
                     case 8:
                        if (!this.c(var1)) {
                           this.k(var1);
                           return;
                        }
                     case 9:
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
                     default:
                        break;
                     case 10:
                        if (!this.c(var1)) {
                           this.o(var1);
                           return;
                        }
                        break;
                     case 11:
                        this.l(var1);
                        return;
                     case 12:
                        if (!this.c(var1)) {
                           this.m(var1);
                           return;
                        }
                        break;
                     case 13:
                        this.n(var1);
                        break;
                     case 25:
                        if (!this.d(var1)) {
                           this.j(var1);
                           return;
                        }
                  }
               }
            }
         }
      }
   }

   private void b(int var1) {
      byte var2;
      label79: {
         var2 = 2;
         int var10000;
         if (var1 == this.af || var1 == this.W) {
            var10000 = com.vlm.redstar.client.ui.a.b;
         } else if (var1 != this.ag && var1 != this.Y) {
            if (var1 != this.ah && var1 != this.X) {
               break label79;
            }

            var10000 = com.vlm.redstar.client.ui.a.d;
         } else {
            var10000 = com.vlm.redstar.client.ui.a.c;
         }

         var2 = com.vlm.redstar.client.ui.a.a(var10000);
      }

      if (var2 != 2) {
         switch (var2) {
            case 0:
               if (this.aT) {
                  this.aT = false;
                  this.a.c();
                  return;
               }

               if (this.aL) {
                  this.aL = false;
                  this.a.i();
                  this.a(this.a.k(), true);
               }

               if (this.aO) {
                  this.aO = false;
                  com.vlm.redstar.client.ui.a.b();
                  this.aN = true;
                  this.a((byte)9, false);
                  return;
               }

               if (this.aQ) {
                  this.v();
                  return;
               }

               if (this.cd) {
                  this.cc++;
                  if (this.cc <= this.cb.size() - 1) {
                     com.vlm.redstar.client.ui.a.a("ALERT", (String)this.cb.elementAt(this.cc));
                     return;
                  }

                  this.cd = false;
                  this.cc = 0;
                  this.cb = null;
               }

               if (this.aS) {
                  this.aS = false;
               }
               break;
            case 1:
               if (this.aL) {
                  this.aL = false;
               }

               if (this.aQ) {
                  this.aQ = false;
               }

               if (this.aO) {
                  this.aO = false;
                  this.aN = false;
                  this.a((byte)9, false);
               }
         }

         com.vlm.redstar.client.ui.a.b();
      }
   }

   private boolean c(int var1) {
      if (var1 != this.U && var1 != this.ad) {
         if (var1 != this.aa && var1 != this.ae) {
            return false;
         } else {
            com.vlm.redstar.client.ui.d var2;
            if (this.bf) {
               if (this.ap == this.bd - 1) {
                  if (this.bd - 1 < this.aq - 1) {
                     this.bc++;
                     this.bd++;
                     this.ap++;
                  } else {
                     this.ap = 0;
                     this.bc = 0;
                     this.bd = (byte)(this.bc + this.be);
                  }

                  return true;
               }

               var2 = this;
            } else {
               var2 = this;
            }

            var2.p();
            return true;
         }
      } else {
         com.vlm.redstar.client.ui.d var10000;
         if (this.bf) {
            if (this.ap == this.bc) {
               if (this.bc > 0) {
                  this.bc--;
                  this.bd--;
                  this.ap--;
               } else {
                  this.bd = this.aq;
                  this.bc = (byte)(this.bd - this.be);
                  this.ap = (byte)(this.bd - 1);
               }

               return true;
            }

            var10000 = this;
         } else {
            var10000 = this;
         }

         var10000.q();
         return true;
      }
   }

   private boolean d(int var1) {
      if (var1 != this.U && var1 != this.ad) {
         if ((var1 == this.aa || var1 == this.ae) && com.vlm.redstar.client.ui.c.a(false)) {
            return true;
         }
      } else if (com.vlm.redstar.client.ui.c.a(true)) {
         return true;
      }

      return false;
   }

   private boolean a(int var1, boolean var2) {
      return var1 == this.X || var1 == this.ah ? true : var2 && var1 == this.aj;
   }

   private void e(int var1) {
      if (var1 == this.W || var1 == this.af) {
         this.q();
      } else if (var1 == this.Y || var1 == this.ag) {
         this.p();
      } else if (this.a(var1, true)) {
         int var2 = 0;
         var2++;
         if (this.ap == 0) {
            this.aN = true;
            this.a((byte)9, false);
         } else {
            if (this.c != -1 && this.ap >= this.c) {
               if (this.ap == this.c) {
                  return;
               }

               var2++;
            }

            if (this.ap == var2++) {
               this.a((byte)9, false);
            } else if (this.ap == var2++) {
               this.bU = true;
               this.bW = false;
               this.a((byte)12, false);
            } else if (this.ap == var2++) {
               this.a((byte)3, false);
            } else if (this.ap == var2++) {
               this.a((byte)25, false);
            } else if (this.ap == var2++) {
               this.a((byte)4, false);
            } else if (this.ap == var2++) {
               this.a((byte)6, false);
            } else if (this.ap == var2) {
               this.aT = true;
               com.vlm.redstar.client.ui.a.a(this.cC.toUpperCase() + "?", this.cD, (byte)2, false);
            }
         }
      }
   }

   private void f(int var1) {
      if (this.a(var1, true)) {
         int var2 = 0;
         if (this.c != -1 && this.ap >= this.c) {
            if (this.ap == this.c) {
               return;
            }

            var2++;
         }

         if (this.ap == var2++) {
            d = !d;
            this.l();
            if (aK) {
               if (d) {
                  this.a.e();
                  return;
               }

               this.a.l();
            }

            return;
         }

         if (this.ap == var2++) {
            e = !e;
            ay = true;
            return;
         }

         if (this.ap == var2++) {
            this.aB = true;
            this.a((byte)11, false);
            return;
         }

         if (this.cJ.length > 1 && this.ap == var2++) {
            this.a((byte)10, false);
            return;
         }

         if (this.ap == var2) {
            this.w();
            return;
         }
      }

      if (var1 == this.ai) {
         this.a((byte)2, true);
      }
   }

   private void g(int var1) {
      if (!this.c(var1)) {
         if (this.a(var1, true)) {
            this.aD = true;
            this.a((byte)5, false);
         } else if (var1 == this.ai) {
            this.a((byte)2, true);
         }
      }
   }

   private void h(int var1) {
      if (this.aD) {
         if (this.d(var1)) {
            return;
         }

         if (var1 == this.ai) {
            this.a((byte)4, true);
            return;
         }
      }
   }

   private void i(int var1) {
      if (var1 == this.aj || var1 == this.ah || var1 == this.X) {
         d = true;
         this.aC = true;
         this.a.e();
      } else if (var1 == this.ai) {
         d = false;
         this.aC = true;
      }

      if (this.aC) {
         this.l();
         this.a(this.g(), false);
      }
   }

   private void j(int var1) {
      if (var1 == this.ai) {
         this.a((byte)2, true);
      }
   }

   private void k(int var1) {
      if (this.a(var1, true)) {
         if (this.ap == 0) {
            this.a((byte)9, false);
            return;
         }

         if (this.ap == 1) {
            this.a((byte)12, false);
            return;
         }

         if (this.ap == 2) {
            this.a((byte)2, false);
            return;
         }
      }
   }

   private void l(int var1) {
      if (var1 == this.ai) {
         if (this.aB) {
            this.a((byte)3, true);
         }
      } else if (var1 == this.aj) {
         String var4 = String.valueOf(this.bn);
         if (this.a(var4)) {
            var4 = var4.trim();
            this.i = var4;
            this.l();
            this.aH = true;
            com.vlm.redstar.client.ui.d var19;
            byte var31;
            boolean var40;
            if (!this.aB) {
               var19 = this;
               var31 = this.g();
               var40 = false;
            } else {
               var19 = this;
               var31 = 3;
               var40 = true;
            }

            var19.a(var31, var40);
         }
      } else if (var1 == this.ak) {
         this.bn[this.bm] = ' ';
         if (this.bm > 0) {
            this.bm--;
         }

         this.bq = true;
      } else {
         if (this.br == Integer.MAX_VALUE) {
            this.br = var1;
         } else if (var1 != this.br && this.br != this.af && this.br != this.ag && var1 != this.af && var1 != this.ag) {
            com.vlm.redstar.client.ui.d var10000;
            int var10001;
            if (this.bm < h - 1) {
               var10000 = this;
               var10001 = this.bm + 1;
            } else {
               var10000 = this;
               var10001 = 0;
            }

            var10000.bm = var10001;
         }

         if (var1 == this.ad) {
            int var3;
            label238: {
               byte var18;
               if ((var3 = this.bn[this.bm] + 1) > 90) {
                  var18 = 32;
               } else if (var3 > 32 && var3 < 48) {
                  var18 = 48;
               } else {
                  if (var3 <= 57 || var3 >= 65) {
                     break label238;
                  }

                  var18 = 65;
               }

               var3 = var18;
            }

            this.bn[this.bm] = (char)var3;
            this.bq = true;
         } else if (var1 != this.ae) {
            if (var1 == this.af) {
               com.vlm.redstar.client.ui.d var17;
               int var30;
               if (this.bm > 0) {
                  var17 = this;
                  var30 = this.bm;
               } else {
                  var17 = this;
                  var30 = h;
               }

               var17.bm = var30 - 1;
               this.br = var1;
            } else if (var1 == this.ag) {
               com.vlm.redstar.client.ui.d var16;
               int var29;
               if (this.bm < h - 1) {
                  var16 = this;
                  var29 = this.bm + 1;
               } else {
                  var16 = this;
                  var29 = 0;
               }

               var16.bm = var29;
               this.br = var1;
            } else if (var1 == this.T) {
               this.bn[this.bm] = '1';
               this.bq = true;
               this.br = var1;
            } else if (var1 == this.U) {
               char[] var15;
               int var28;
               byte var39;
               if (this.bn[this.bm] == 'A') {
                  var15 = this.bn;
                  var28 = this.bm;
                  var39 = 66;
               } else if (this.bn[this.bm] == 'B') {
                  var15 = this.bn;
                  var28 = this.bm;
                  var39 = 67;
               } else if (this.bn[this.bm] == 'C') {
                  var15 = this.bn;
                  var28 = this.bm;
                  var39 = 50;
               } else {
                  var15 = this.bn;
                  var28 = this.bm;
                  var39 = 65;
               }

               var15[var28] = (char)var39;
               this.bq = true;
               this.br = var1;
            } else if (var1 == this.V) {
               char[] var14;
               int var27;
               byte var38;
               if (this.bn[this.bm] == 'D') {
                  var14 = this.bn;
                  var27 = this.bm;
                  var38 = 69;
               } else if (this.bn[this.bm] == 'E') {
                  var14 = this.bn;
                  var27 = this.bm;
                  var38 = 70;
               } else if (this.bn[this.bm] == 'F') {
                  var14 = this.bn;
                  var27 = this.bm;
                  var38 = 51;
               } else {
                  var14 = this.bn;
                  var27 = this.bm;
                  var38 = 68;
               }

               var14[var27] = (char)var38;
               this.bq = true;
               this.br = var1;
            } else if (var1 == this.W) {
               char[] var13;
               int var26;
               byte var37;
               if (this.bn[this.bm] == 'G') {
                  var13 = this.bn;
                  var26 = this.bm;
                  var37 = 72;
               } else if (this.bn[this.bm] == 'H') {
                  var13 = this.bn;
                  var26 = this.bm;
                  var37 = 73;
               } else if (this.bn[this.bm] == 'I') {
                  var13 = this.bn;
                  var26 = this.bm;
                  var37 = 52;
               } else {
                  var13 = this.bn;
                  var26 = this.bm;
                  var37 = 71;
               }

               var13[var26] = (char)var37;
               this.bq = true;
               this.br = var1;
            } else if (var1 == this.X) {
               char[] var12;
               int var25;
               byte var36;
               if (this.bn[this.bm] == 'J') {
                  var12 = this.bn;
                  var25 = this.bm;
                  var36 = 75;
               } else if (this.bn[this.bm] == 'K') {
                  var12 = this.bn;
                  var25 = this.bm;
                  var36 = 76;
               } else if (this.bn[this.bm] == 'L') {
                  var12 = this.bn;
                  var25 = this.bm;
                  var36 = 53;
               } else {
                  var12 = this.bn;
                  var25 = this.bm;
                  var36 = 74;
               }

               var12[var25] = (char)var36;
               this.bq = true;
               this.br = var1;
            } else if (var1 == this.Y) {
               char[] var11;
               int var24;
               byte var35;
               if (this.bn[this.bm] == 'M') {
                  var11 = this.bn;
                  var24 = this.bm;
                  var35 = 78;
               } else if (this.bn[this.bm] == 'N') {
                  var11 = this.bn;
                  var24 = this.bm;
                  var35 = 79;
               } else if (this.bn[this.bm] == 'O') {
                  var11 = this.bn;
                  var24 = this.bm;
                  var35 = 54;
               } else {
                  var11 = this.bn;
                  var24 = this.bm;
                  var35 = 77;
               }

               var11[var24] = (char)var35;
               this.bq = true;
               this.br = var1;
            } else if (var1 == this.Z) {
               char[] var10;
               int var23;
               byte var34;
               if (this.bn[this.bm] == 'P') {
                  var10 = this.bn;
                  var23 = this.bm;
                  var34 = 81;
               } else if (this.bn[this.bm] == 'Q') {
                  var10 = this.bn;
                  var23 = this.bm;
                  var34 = 82;
               } else if (this.bn[this.bm] == 'R') {
                  var10 = this.bn;
                  var23 = this.bm;
                  var34 = 83;
               } else if (this.bn[this.bm] == 'S') {
                  var10 = this.bn;
                  var23 = this.bm;
                  var34 = 55;
               } else {
                  var10 = this.bn;
                  var23 = this.bm;
                  var34 = 80;
               }

               var10[var23] = (char)var34;
               this.bq = true;
               this.br = var1;
            } else if (var1 == this.aa) {
               char[] var9;
               int var22;
               byte var33;
               if (this.bn[this.bm] == 'T') {
                  var9 = this.bn;
                  var22 = this.bm;
                  var33 = 85;
               } else if (this.bn[this.bm] == 'U') {
                  var9 = this.bn;
                  var22 = this.bm;
                  var33 = 86;
               } else if (this.bn[this.bm] == 'V') {
                  var9 = this.bn;
                  var22 = this.bm;
                  var33 = 56;
               } else {
                  var9 = this.bn;
                  var22 = this.bm;
                  var33 = 84;
               }

               var9[var22] = (char)var33;
               this.bq = true;
               this.br = var1;
            } else if (var1 == this.ab) {
               char[] var8;
               int var21;
               byte var32;
               if (this.bn[this.bm] == 'W') {
                  var8 = this.bn;
                  var21 = this.bm;
                  var32 = 88;
               } else if (this.bn[this.bm] == 'X') {
                  var8 = this.bn;
                  var21 = this.bm;
                  var32 = 89;
               } else if (this.bn[this.bm] == 'Y') {
                  var8 = this.bn;
                  var21 = this.bm;
                  var32 = 90;
               } else if (this.bn[this.bm] == 'Z') {
                  var8 = this.bn;
                  var21 = this.bm;
                  var32 = 57;
               } else {
                  var8 = this.bn;
                  var21 = this.bm;
                  var32 = 87;
               }

               var8[var21] = (char)var32;
               this.bq = true;
               this.br = var1;
            } else if (var1 == this.ac) {
               char[] var7;
               int var20;
               byte var10002;
               if (this.bn[this.bm] == '0') {
                  var7 = this.bn;
                  var20 = this.bm;
                  var10002 = 32;
               } else {
                  var7 = this.bn;
                  var20 = this.bm;
                  var10002 = 48;
               }

               var7[var20] = (char)var10002;
               this.bq = true;
               this.br = var1;
            }
         } else {
            int var2;
            label250: {
               byte var6;
               if ((var2 = this.bn[this.bm] - 1) < 32) {
                  var6 = 90;
               } else if (var2 > 32 && var2 < 48) {
                  var6 = 32;
               } else {
                  if (var2 <= 57 || var2 >= 65) {
                     break label250;
                  }

                  var6 = 57;
               }

               var2 = var6;
            }

            this.bn[this.bm] = (char)var2;
            this.bq = true;
         }
      }
   }

   private void m(int var1) {
      if (var1 == this.ai) {
         this.bU = true;
         if (this.aP) {
            this.a((byte)8, true);
         } else {
            this.a((byte)2, true);
         }
      } else if (this.aq != 0 && !this.bZ && this.ca) {
         if (this.a(var1, true)) {
            this.cq = this.ap;
            this.ci = 1;
            this.cl = true;
            this.bP = true;
            this.a((byte)13, false);
         }
      }
   }

   private void n(int var1) {
      if (var1 == this.ai) {
         this.bU = true;
         this.a((byte)12, true);
      } else if (this.aq > 0) {
         if (var1 == this.aj) {
            if (this.co == 1) {
               this.cm = 0;
            } else {
               this.ci = 1;
               this.cl = true;
               this.bP = false;
               this.a((byte)13, false);
            }
         } else if (var1 != this.U && var1 != this.ad) {
            if (var1 == this.aa || var1 == this.ae) {
               if (this.cm + 1 >= this.cn) {
                  if (this.co + this.aq - 1 < this.cj) {
                     int var2 = (Integer)this.ce.elementAt((this.aq - 1) * 4 + 0 + 6);
                     this.ci = var2 + 1;
                     this.cl = true;
                     this.bP = true;
                     this.a((byte)13, false);
                     return;
                  }
               } else {
                  this.cm++;
               }
            }
         } else {
            if (this.cm == 0 && this.cn > 0) {
               if (this.co > 1) {
                  this.ci = this.co - this.bO;
                  if (this.ci < 1) {
                     this.ci = 1;
                  }

                  this.cl = false;
                  this.bP = false;
                  this.a((byte)13, false);
                  return;
               }
            } else {
               this.cm--;
            }
         }
      }
   }

   private boolean a(String var1) {
      if (!this.bq) {
         return false;
      } else {
         int var2 = 0;

         for (int var3 = 0; var3 < var1.length(); var3++) {
            if (var1.charAt(var3) == ' ') {
               var2++;
            }
         }

         return var2 == var1.length() ? false : var1.trim().compareTo(this.bo) != 0;
      }
   }

   private void e() {
      this.bq = false;
      this.bm = 0;
      this.bn = new char[h];

      for (int var1 = 0; var1 < h; var1++) {
         char[] var10000;
         int var10001;
         char var10002;
         if (this.aH && var1 < this.i.length()) {
            var10000 = this.bn;
            var10001 = var1;
            var10002 = this.i.charAt(var1);
         } else if (!this.aH && var1 < this.bo.length()) {
            var10000 = this.bn;
            var10001 = var1;
            var10002 = this.bo.charAt(var1);
         } else {
            var10000 = this.bn;
            var10001 = var1;
            var10002 = ' ';
         }

         var10000[var10001] = var10002;
      }
   }

   private void o(int var1) {
      if (this.a(var1, true)) {
         this.l = this.bv[this.ap];
         this.bs = true;
         this.a(this.l);
         this.l();
         com.vlm.redstar.client.ui.d var10000;
         byte var10001;
         boolean var10002;
         if (!this.aB) {
            var10000 = this;
            var10001 = this.g();
            var10002 = false;
         } else {
            var10000 = this;
            var10001 = 3;
            var10002 = true;
         }

         var10000.a(var10001, var10002);
      } else if (var1 == this.ai && this.aB) {
         this.a((byte)3, true);
      }
   }

   private int f() {
      int var1;
      var1 = (var1 = this.by - this.bz) - (this.b == 2 ? o : p);
      if (this.b == 13) {
         var1 -= this.al.g;
      }

      if (this.b == 11) {
         var1 -= this.al.a(this.bG) + this.al.g * 3;
         return p + (var1 >> 1);
      } else if (this.aq == 0) {
         return (this.b == 2 ? o : p) + (var1 >> 1);
      } else if (this.bf) {
         int var2 = this.be * this.b(this.b) + (this.be - 1) * m + this.bC * 2;
         return (this.b == 2 ? o : p) + (var1 >> 1) - (var2 >> 1);
      } else {
         return (this.b == 2 ? o : p) + (var1 >> 1) - (this.bb >> 1);
      }
   }

   private byte g() {
      if (!this.bt) {
         return 10;
      } else if (!this.aH) {
         this.aB = false;
         return 11;
      } else if (!this.aC) {
         return 7;
      } else if (!this.aA && this.az) {
         return 0;
      } else if (!this.aR) {
         return 1;
      } else {
         this.l();
         return 2;
      }
   }

   private static void h() {
      f = System.currentTimeMillis();
      g = true;
   }

   private static void i() {
      if (System.currentTimeMillis() - f > bg) {
         g = !g;
         f = System.currentTimeMillis();
      }
   }

   private void j() {
      this.ao = "";
      this.dh = null;
      this.bG = null;
      if (this.b != 5) {
         this.al.c();
      }
   }

   private void k() {
      this.bI = 0;
   }

   private void l() {
      /*try {
         ByteArrayOutputStream var1 = new ByteArrayOutputStream();
         DataOutputStream var2;
         (var2 = new DataOutputStream(var1)).writeBoolean(d);
         var2.writeBoolean(e);
         var2.writeUTF(this.i);
         var2.writeBoolean(this.bs);
         var2.writeByte(this.l);
         com.vlm.redstar.client.core.csp.a.a(this.S, var1.toByteArray(), true);
      } catch (Exception var3) {
      }*/
   }

   private void m() {
      DataInputStream var1;
      if ((var1 = com.vlm.redstar.client.core.csp.a.a(this.S)) == null) {
         this.aH = false;
         this.bs = savedBs;
         this.l = savedLang;
      } else {
         try {
            d = var1.readBoolean();
            e = var1.readBoolean();
            String var2;
            if (!(var2 = var1.readUTF()).equals(this.bo)) {
               this.aH = true;
               this.i = var2.toUpperCase();
            } else {
               this.aH = false;
            }

            if (var2.length() == 0) {
               this.aH = false;
               this.i = this.bo;
            }

            this.bs = var1.readBoolean();
            this.l = var1.readByte();
         } catch (IOException var3) {
         }
      }
   }

   private void a(byte var1) {
      this.a.a(var1);
      String[] var2;
      if ((var2 = this.a.j()) != null && var2.length != 0) {
         if (var2.length < 54) {
            aquadig.d var10000 = this.a;
            new StringBuffer()
               .append("GameMenus.loadLanguage() - Not enough strings returned by 'getRequiredStrings()' function! (")
               .append(var2.length)
               .append(" sent, ")
               .append(54)
               .append(" expected)")
               .toString();
            var10000.c();
         } else {
            int var4 = 0;
            var4++;
            this.ct = var2[0];
            var4++;
            this.cu = var2[1];
            var4++;
            this.cv = var2[2];
            var4++;
            this.cw = var2[3];
            var4++;
            this.cx = var2[4];
            var4++;
            this.cy = var2[5];
            var4++;
            this.cz = var2[6];
            var4++;
            this.cA = var2[7];
            var4++;
            this.cB = var2[8];
            var4++;
            this.cC = var2[9];
            var4++;
            this.cD = var2[10];
            var4++;
            this.cE = var2[11];
            var4++;
            this.cF = var2[12];
            StringBuffer var10001 = new StringBuffer();
            var4++;
            this.cG = var10001.append(var2[13]).append(": ").toString();
            var4++;
            this.cH = var2[14];
            var4++;
            this.cI = var2[15];
            var4++;
            this.cK = var2[16];
            var4++;
            this.cL = var2[17];
            var4++;
            this.cM = var2[18];
            var4++;
            this.cN = var2[19];
            var4++;
            this.cO = var2[20];
            var4++;
            this.cP = var2[21];
            var4++;
            this.cQ = var2[22];
            var4++;
            this.cR = var2[23];
            var4++;
            this.cS = var2[24];
            var4++;
            this.cT = var2[25];
            var4++;
            this.cU = var2[26];
            var4++;
            this.cV = var2[27];
            var4++;
            this.cW = var2[28];
            var4++;
            this.cX = var2[29];
            var4++;
            this.cY = var2[30];
            var4++;
            this.cZ = var2[31];
            var4++;
            this.da = var2[32];
            var4++;
            this.db = var2[33];
            var4++;
            this.dc = var2[34];
            var4++;
            this.B = var2[35];
            var4++;
            var4++;
            this.bo = var2[37];
            var10001 = new StringBuffer();
            var4++;
            this.dd = var10001.append(var2[38]).append(": ").toString();
            var4++;
            this.de = var2[39];
            var4++;
            this.df = var2[40];
            var4++;
            this.E = var2[41];
            var4++;
            this.D = var2[42];
            var4++;
            this.v = var2[43];
            var4++;
            this.w = var2[44];
            var4++;
            this.x = var2[45];
            var4++;
            this.y = var2[46];
            var4++;
            this.z = var2[47];
            var4++;
            this.A = var2[48];
            var4++;
            this.u = var2[49];
            var4++;
            this.C = var2[50];
            var4++;
            this.dg = var2[51];
            if (var2.length > 52) {
               int var5 = var2.length - 52 >> 1;
               this.aZ = new String[var5];
               this.ba = new String[var5];

               for (int var6 = 0; var6 < var5; var6++) {
                  this.aZ[var6] = var2[var4++];
                  this.ba[var6] = var2[var4++];
               }
            }

            this.l = var1;
            this.bt = true;
            this.bs = true;
            savedLang = var1;
            savedBs = true;
            this.u();
         }
      } else {
         this.a.c();
      }
   }

   private void a(String var1, boolean var2) {
      if (var1 == null) {
         var1 = "NO STRING PASSED";
      }

      this.al.a(var1, this.bA, p + m * 2, this.bB, this.by - (p + m * 2 + this.bz), var2);
   }

   private void n() {
      if (this.b == 2 || this.b == 3 || this.b == 8) {
         this.aq = (byte)(this.aq + this.x());
         this.c = this.a.p() - 1;
      }

      this.bb = this.o();
      this.r();
   }

   private int o() {
      int var1 = 0;
      int var2 = 0;
      byte var3 = this.aq;
      if (this.aq <= 0) {
         return 0;
      } else if (this.b == 2) {
         return this.al.g + m + this.aW.getHeight();
      } else {
         var2 = this.b(this.b);

         for (int var4 = 0; var4 < var3; var4++) {
            var1 += var2;
         }

         int var5;
         return var5 = var1 + m * (var3 - 1);
      }
   }

   private int b(byte var1) {
      return var1 == 13 ? this.al.g * 3 : I;
   }

   private void p() {
      byte var2 = this.ap;
      if (this.aq >= 2) {
         label18: {
            if (this.ap >= this.aq - 1) {
               this.ap = 0;
               if (this.aM || this.b != 2) {
                  break label18;
               }
            }

            this.ap++;
         }

         h();
         this.t();
         this.q(var2);
         this.q(this.ap);
      }
   }

   private void q() {
      byte var2 = this.ap;
      if (this.aq >= 2) {
         label20: {
            if (this.ap > 0) {
               this.ap--;
               if (this.ap != 0 || this.aM || this.b != 2) {
                  break label20;
               }
            }

            this.ap = (byte)(this.aq - 1);
         }

         h();
         this.t();
         this.q(var2);
         this.q(this.ap);
      }
   }

   private void r() {
      if (this.aq == 0) {
         this.bf = false;
      } else if (this.b == 2) {
         this.bf = false;
      } else if (this.b != 2) {
         if (this.b == 13) {
            this.bz = this.bz + this.al.g;
         }

         int var1 = this.by - this.bz - 4 - (this.b == 2 ? o : p);
         if (this.bb > var1) {
            this.bf = true;
            var1 -= this.bC * 2;
            int var2 = this.b(this.b);
            boolean var3 = false;
            com.vlm.redstar.client.ui.d var10000 = this;
            byte var10001 = 0;

            while (true) {
               var10000.be = var10001;
               if (this.be > this.aq) {
                  break;
               }

               if (this.be * var2 + (this.be - 1) * m >= var1) {
                  this.be--;
                  break;
               }

               var10000 = this;
               var10001 = (byte)(this.be + 1);
            }

            if (!this.aF) {
               this.bc = 0;
               var10000 = this;
               var10001 = (byte)(this.bc + this.be);
            } else {
               this.bc = this.aw[this.b];
               var10000 = this;
               var10001 = this.ax[this.b];
            }

            var10000.bd = var10001;
         } else {
            this.bf = false;
         }

         if (this.b == 13) {
            this.bz = this.bz - this.al.g;
         }
      }
   }

   private int s() {
      int var1 = this.b((byte)13);
      int var2 = this.by - (p + this.bz + this.al.g + 4 + this.bC * 2);
      boolean var3 = false;

      int var4;
      for (var4 = 0; var4 <= 50; var4++) {
         if (var4 * var1 + (var4 - 1) * m >= var2) {
            var4--;
            break;
         }
      }

      return var4;
   }

   private String c(byte var1) {
      byte var2 = 0;
      switch (this.b) {
         case 2:
            if (this.c != -1 && var1 >= this.c) {
               if (var1 == this.c) {
                  return this.a(var1, this.c);
               }

               var2 = (byte)(0 + this.ar);
            }

            if (var1 == var2++) {
               return "CONTINUE";
            } else if (var1 == var2++) {
               return this.cy;
            } else if (var1 == var2++) {
               return this.cL;
            } else if (var1 == var2++) {
               return this.cz;
            } else if (var1 == var2++) {
               return this.E;
            } else if (var1 == var2++) {
               return this.cA;
            } else {
               if (var1 == var2) {
                  return this.cB;
               }

               return this.cC;
            }
         case 3:
            if (this.c != -1 && var1 >= this.c) {
               if (var1 == this.c) {
                  return this.a(var1, this.c);
               }

               var2 = (byte)(0 + this.ar);
            }

            if (var1 == var2++) {
               return this.cG + (d ? this.cE : this.cF);
            } else if (var1 == var2++) {
               return this.dd + (e ? this.cE : this.cF);
            } else if (var1 == var2++) {
               return this.cK;
            } else if (this.cJ.length > 1 && var1 == var2++) {
               return this.cI;
            } else if (var1 == var2) {
               return this.de;
            }
         case 4:
            return this.aZ[var1];
         case 5:
         case 6:
         case 7:
         case 9:
         case 11:
         case 13:
         default:
            return "DEFAULT LABEL";
         case 8:
            if (var1 != 0) {
               if (var1 == 1) {
                  return this.cL;
               }

               if (var1 == 2) {
                  return this.w;
               }

               return this.a(var1, 3);
            }

            String var3 = this.v;
            if (this.v == null || var3.length() == 0 || var3 == "") {
               var3 = this.cy;
            }

            return var3;
         case 10:
            return this.cJ[var1];
         case 12:
            return this.cg != null && this.cg.size() != 0 ? (String)this.cg.elementAt(var1 * 6 + 1 + 1) : "SCORE SET " + var1;
      }
   }

   private String b(boolean var1) {
      if (com.vlm.redstar.client.ui.a.a()) {
         return var1 ? this.cw : "";
      } else {
         switch (this.b) {
            case 2:
               if (var1) {
                  return this.cw;
               }

               return "";
            case 3:
               if (var1) {
                  if (this.ap == 0) {
                     return this.cx;
                  }

                  if (this.ap == 1) {
                     return this.cx;
                  }

                  if (this.ap == 2) {
                     return this.cO;
                  }

                  return this.cw;
               }

               return this.cv;
            case 4:
               if (var1) {
                  return this.cw;
               }

               return this.cv;
            case 5:
               if (this.aD) {
                  if (var1) {
                     return "";
                  }

                  return this.cv;
               }

               return "";
            case 6:
               if (var1) {
                  return "";
               }

               return this.cv;
            case 7:
               if (var1) {
                  return this.ct;
               }

               return this.cu;
            case 8:
               if (var1) {
                  return this.cw;
               }

               return "";
            case 9:
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
            default:
               return "";
            case 10:
               if (this.aB) {
                  if (var1) {
                     return this.cw;
                  }

                  return this.cv;
               } else {
                  if (this.bt) {
                     if (var1) {
                        return this.cw;
                     }

                     return "";
                  }

                  return "";
               }
            case 11:
               if (var1) {
                  this.bp = String.valueOf(this.bn);
                  if (!this.a(this.bp)) {
                     return "";
                  }

                  return this.cP;
               } else {
                  if (this.aB) {
                     return this.cv;
                  }

                  return "";
               }
            case 12:
               if (!var1) {
                  return this.cv;
               } else {
                  if (!this.bZ && this.aq != 0) {
                     if (this.ca && this.aq != 0) {
                        return this.cM;
                     }

                     return "";
                  }

                  return "";
               }
            case 13:
               if (!var1) {
                  return this.cv;
               } else if (this.co == 1 && this.cm == 0) {
                  return "";
               } else {
                  if (this.bY && this.aq != 0) {
                     return this.cN;
                  }

                  return "";
               }
            case 25:
               return var1 ? "" : this.cv;
         }
      }
   }

   public final void a() {
      aK = false;
      this.a = null;
      this.aU = null;
      this.aV = null;
      this.aW = null;
      this.aX = null;
      this.aY = null;
      this.ct = null;
      this.cu = null;
      this.cv = null;
      this.cw = null;
      this.cx = null;
      this.cy = null;
      this.cz = null;
      this.cA = null;
      this.cB = null;
      this.cC = null;
      this.cD = null;
      this.cE = null;
      this.cF = null;
      this.cG = null;
      this.cH = null;
      this.cI = null;
      this.cJ = null;
      this.cK = null;
      this.cL = null;
      this.cM = null;
      this.cN = null;
      this.cO = null;
      this.cP = null;
      this.cQ = null;
      this.dd = null;
      this.de = null;
      this.df = null;
      this.aZ = null;
      this.ba = null;
      this.ce = null;
      this.cg = null;
      this.cb = null;
      System.gc();
   }

   private void t() {
      this.bL = System.currentTimeMillis() + 300L;
      this.bK = 0;
   }

   private boolean a(String var1, int var2) {
      return this.al.a(var1) > var2;
   }

   private void a(Graphics var1, String var2, int var3, int var4, boolean var5, boolean var6) {
      if (!this.a(var2, this.at)) {
         if (var5) {
            this.al.a(var1, var2, var3, var4);
         } else {
            this.al.a(var1, var2, var3, var4, 4);
         }
      } else if (!var6) {
         var2 = this.b(var2, this.at);
         if (var5) {
            this.al.a(var1, var2, var3, var4);
         } else {
            this.al.a(var1, var2, var3, var4, 4);
         }
      } else {
         if (var5) {
            var3 -= this.at >> 1;
         }

         var1.setClip(var3, var4, this.at, this.al.g);
         this.al.a(var1, var2, var3 - this.p(this.al.a(var2)), var4, 4);
         var1.setClip(0, 0, this.bx, this.by);
      }
   }

   private int p(int var1) {
      if (System.currentTimeMillis() > this.bL) {
         this.bK = this.bK + t;
         if (this.bK > var1) {
            this.t();
            this.bL += 200L;
         }

         return this.bK;
      } else {
         return 0;
      }
   }

   private String b(String var1, int var2) {
      if (!this.a(var1, var2)) {
         return var1;
      } else {
         boolean var3 = false;
         boolean var4 = false;
         StringBuffer var5;
         (var5 = new StringBuffer(var1)).append("...");

         while (!var3) {
            var5.deleteCharAt(var5.length() - 4);
            if (this.al.a(var5.toString()) <= var2) {
               var3 = true;
            }
         }

         return var5.toString();
      }
   }

   public static boolean b() {
      return aK;
   }

   private void u() {
      if (this.aZ == null || this.ba == null) {
         this.a.c();
      }

      if (this.aZ.length != this.ba.length) {
         this.a.c();
      }
   }

   private void a(byte[] var1) {
      if (var1 != null && var1.length > 0) {
         this.cp = var1;
         if (G) {
            this.v();
         } else {
            this.aQ = true;
            com.vlm.redstar.client.ui.a.a(this.cY, this.cZ, (byte)2, false);
         }
      }
   }

   private void v() {
      this.aQ = false;

      try {
         this.an.a(this.i, this.cp);
         com.vlm.redstar.client.ui.a.a("POSTING SCORE", "Posting Score to server.", 0);
      } catch (Throwable var2) {
      }
   }

   private void w() {
      this.aL = true;
      com.vlm.redstar.client.ui.a.a(this.de.toUpperCase() + "?", this.df, (byte)2, false);
   }

   private byte x() {
      this.dh = this.a.b();
      if (this.dh != null) {
         this.ar = (byte)this.dh.length;
         return this.ar;
      } else {
         this.ar = 0;
         return this.ar;
      }
   }

   private String a(int var1, int var2) {
      for (int var3 = 0; var3 < this.ar; var3++) {
         if (var1 == var2 + var3) {
            return this.dh[var3];
         }
      }

      return "NO CUSTOM LABEL";
   }

   private boolean y() {
      return this.bQ != 4;
   }

   private void b(byte var1, boolean var2) {
      this.bR = var1;
      this.bS = var2;
      this.a.d();
      this.bQ = 0;
   }

   public final void c() {
      try {
         if (ay) {
            ay = false;
            this.l();
         }

         this.bV = com.vlm.redstar.client.core.csp.a.c();
         if (this.bV != 4) {
            if (this.bV != 3) {
               if (this.bV == 2) {
                  label52: {
                     String var10000;
                     String var10001;
                     switch (this.an.b()) {
                        case 1:
                           if (this.cb == null || this.cb == null || this.cb.size() <= 0) {
                              break label52;
                           }

                           this.cc = 0;
                           this.cd = true;
                           var10000 = "ALERT";
                           var10001 = (String)this.cb.elementAt(this.cc);
                           break;
                        case 2:
                           this.cg = this.an.f;
                           this.ch = (Short)this.cg.elementAt(0);
                           if (this.ch > 0) {
                              this.aq = (byte)this.ch;
                              this.n();
                           } else {
                              this.bG = this.al.a(this.cV, this.bB);
                           }

                           this.ca = true;
                        case 3:
                        default:
                           break label52;
                        case 4:
                           this.B();
                           break label52;
                        case 5:
                           com.vlm.redstar.client.ui.a.b();
                           var10000 = this.cW;
                           var10001 = this.cX;
                     }

                     com.vlm.redstar.client.ui.a.a(var10000, var10001);
                  }

                  this.an.d();
               }

               return;
            }

            switch (this.an.b()) {
               case 1:
               case 3:
               default:
                  break;
               case 2:
                  this.bZ = true;
                  this.ca = true;
                  this.bG = this.al.a(this.cR + " " + this.cS + " \n\n" + this.cU, this.bB);
                  break;
               case 4:
                  this.bX = true;
                  this.bY = true;
                  this.bG = this.al.a(this.cR + " " + this.cS + " \n\n" + this.cU, this.bB);
                  break;
               case 5:
                  com.vlm.redstar.client.ui.a.b();
                  com.vlm.redstar.client.ui.a.a(this.cS, this.cT);
            }

            this.an.d();
         }
      } catch (Throwable var2) {
      }
   }

   private void z() {
      this.an.d();
   }

   private int A() {
      if (!this.bP) {
         return this.bO;
      } else if (this.ce != null && this.ce.size() != 0) {
         int var1;
         return (var1 = (Integer)this.ce.elementAt((this.cf - 1) * 4 + 0 + 6)) + this.bO > this.cj ? this.cj - var1 : this.bO;
      } else {
         return this.bO;
      }
   }

   private void B() {
      this.ce = this.an.e;
      if (this.ce == null) {
         this.bY = true;
         this.bX = false;
         this.aq = 0;
      } else if (this.ce.size() == 0) {
         this.bY = true;
         this.bX = false;
         this.aq = 0;
      } else {
         this.cf = this.ce.size() - 6 > 0 ? (this.ce.size() - 6) / 4 : 0;
         if (this.cf == 0) {
            this.bY = true;
            this.bX = false;
            this.aq = 0;
         } else {
            this.cj = (Integer)this.ce.elementAt(0);
            this.bY = true;
            this.bf = true;
            this.aq = (byte)this.cf;
            this.ck = (Integer)this.ce.elementAt(2);
            this.ce.elementAt(3);
            this.co = (Integer)this.ce.elementAt(6);
            if (this.aq == this.bO) {
               this.cn = this.bN;
            } else if (this.aq <= this.bM) {
               this.cn = 1;
            } else {
               for (int var1 = 2; var1 <= this.bN; var1++) {
                  if (this.aq <= this.bM * var1) {
                     this.cn = var1;
                     break;
                  }
               }
            }

            com.vlm.redstar.client.ui.d var10000;
            int var10001;
            if (this.cl) {
               var10000 = this;
               var10001 = 0;
            } else {
               var10000 = this;
               var10001 = this.cn - 1;
            }

            var10000.cm = var10001;
         }
      }
   }

   private void C() {
      if (R.length != 20) {
         this.a.c();
      }

      this.T = R[0];
      this.U = R[1];
      this.V = R[2];
      this.W = R[3];
      this.X = R[4];
      this.Y = R[5];
      this.Z = R[6];
      this.aa = R[7];
      this.ab = R[8];
      this.ac = R[9];
      this.ad = R[12];
      this.ae = R[13];
      this.af = R[14];
      this.ag = R[15];
      this.aj = R[16];
      this.ai = R[17];
      this.ah = R[18];
      this.ak = R[19];
   }

   private int q(int var1) {
      if (var1 < 0 || var1 >= this.aq) {
         aquadig.d var10000 = this.a;
         new StringBuffer().append("Invalid 'optionNum' (").append(var1).append(") parameter passed to GameMenus.getDrawPositionOfOption()!!").toString();
         var10000.c();
      }

      int var2 = this.f();
      int var3 = this.b(this.b);
      int var4 = 0;
      if (var1 == 0) {
         return var2;
      } else {
         for (int var5 = 1; var5 < var1; var5++) {
            var4 = var2 + var5 * var3 + (var5 - 1) * m;
            if (var5 == var1) {
               return var4;
            }
         }

         return var4;
      }
   }
}
