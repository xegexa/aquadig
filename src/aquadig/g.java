package aquadig;

import java.util.Hashtable;
import java.util.Vector;
import javax.microedition.lcdui.GameDimensions;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;

public final class g {
   static byte[] a_;
   static int b = 105;
   static int c_ = 218;
   static final int dConst = Mid.a(-2136411393, b(0));
   static final int e = b(10);
   static boolean f = false;
   static final short[][] g = new short[][]{
      {0},
      {0},
      {1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
      {0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
      {0, 0, 0, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0},
      {0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1},
      {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 20},
      {0},
      {100, 100, 80, 70, 60, 50, 40, 35, 30, 25, 24, 22, 20, 18, 14, 10},
      {10, 20, 30, 40, 50, 75, 60, 200, 240, 280, 320, 400, 600, 600, 800, 1200},
      {60, 70, 80, 100, 100, 150, 200, 300, 400, 500, 600, 700, 1000, 1000, 1000, 1000},
      {150, 150, 150, 200, 400, 500, 600, 800, 1200, 400, 400, 600, 800, 1600, 2000, 2000},
      {400, 300, 300, 600, 300, 200, 150, 75, 150, 200, 300, 600, 900, 1500, 1500, 1500},
      {0, 800, 1200, 900, 600, 300, 200, 150, 75, 75, 200, 200, 300, 200, 450, 750},
      {0, 0, 800, 600, 1500, 1500, 1500, 1200, 900, 450, 300, 200, 150, 75, 300, 750},
      {0, 0, 0, 750, 750, 350, 750, 1200, 750, 350, 300, 200, 150, 100, 75, 150},
      {0, 0, 0, 0, 0, 0, 1200, 1200, 1200, 750, 750, 350, 350, 150, 100, 75},
      {0, 0, 0, 0, 0, 0, 0, 1200, 1200, 1200, 1200, 750, 350, 350, 300, 150},
      {0, 50, 0, 0, 0, 0, 0, 0},
      {0, 0, 0, 500, 50, 10, 0, 0},
      {0, 0, 0, 0, 0, 0, 100, 0},
      {0, 1000, 900, 900, 800, 700, 500, 200},
      {0, 1000, 900, 900, 0, 0},
      {0, 1000, 900, 900, 800, 600, 400, 200},
      {0, 800, 100, 10, 0, 0, 0, 0},
      {0, 800, 100, 10, 0, 0, 0, 0},
      {0, 0, 0, 0, 0, 0, 0, 250},
      {0, 9000, 9000, 9000, 9000, 9000, 9000, 9000},
      {0, 4000, 4000, 4000, 4000, 4000, 4000, 4000}
   };
   static long h_ = 0L;
   static final byte[] i = new byte[]{-1, -1, 0, 1, 2, 3, 16, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15};
   static byte[] j;
   static Hashtable k = new Hashtable();
   private static boolean C = false;
   private static int D = 0;
   private static long E = 0L;
   private static long F = 0L;
   static int l = 0;
   static int m = 0;
   private static Image[] G;
   private static Graphics[] H;
   static int n;
   static int o;
   private static int I = 0;
   static boolean p = true;
   static boolean q = false;
   static e r = null;
   static Image s = Mid.a("/res/tiles.png");
   static Image t = Mid.a("/res/dirt_top_bottom.png");
   static Image u = Mid.a("/res/dirt_left_right.png");
   static Image v = Mid.a("/res/tanker.png");
   static Image w = Mid.a("/res/crane.png");
   static Image x = Mid.a("/res/cargo_brick.png");
   static int y = GameDimensions.getWidth();
   static int z = GameDimensions.getHeight();
   static boolean A = false;
   public static int B = 0;

   public g(boolean var1) {
      l = 0;
      m = 0;
      n = 0;
      o = 0;
      b = 105;
      a_ = new byte[8];

      for (int var2 = 0; var2 < a_.length; var2++) {
         a_[var2] = 0;
      }

      j = new byte[28800];
      Mid.b.h();

      for (int var3 = 0; var3 < 320; var3++) {
         a(var3, 0, 0);
      }

      Mid.b.h();
      if (!var1) {
         h_ = System.currentTimeMillis();
         b(false);
      }

      for (int var4 = 0; var4 < 28800; var4++) {
         if (Mid.a(30) == 0 && var4 < 28767) {
            e(var4);
         }
      }

      Mid.b.h();
      p = true;
      c();
      c_ = 24 + 15 * a_.length + 40 + w.getWidth() - 7;
   }

   static void a() {
      b();
   }

   private static void e(int var0) {
      b(var0, -1, true);
      if (Mid.a(3) > 0 && var0 < 28767) {
         e(var0 + 1);
      }
   }

   static boolean a(int var0, int var1, boolean var2) {
      return var0 >= 0 && var0 < 32 && var1 >= 0 && var1 < 900 ? a(var1 * 32 + var0, var2) : false;
   }

   private static boolean a(int var0, boolean var1) {
      if (var0 < 0 || var0 >= 28768) {
         return false;
      } else if (c(var0) != 0) {
         if (var1) {
            byte var2;
            if ((var2 = d(var0)) == 11) {
               a.b(var0);
            } else if (d.e.H < d.e.i()) {
               if (var2 > 1) {
                  byte var3 = d(var0);
                  d.e.B[var3]++;
                  d.e.H++;
                  if (d.e.H >= d.e.i() && d.ap) {
                     d.aq = true;
                     com.vlm.redstar.client.ui.a.a(c.af, c.ag);
                  }

                  d.a(var0);
                  Mid.b.c((byte)5);
               }
            } else if (d(var0) != 0) {
               d.a(c.af);
            }
         } else if (d(var0) == 1) {
            Mid.b.c((byte)4);
         }

         a(var0, 0, 0);
         p = true;
         return true;
      } else {
         return false;
      }
   }

   static void a(int var0, int var1) {
      if (a(var0, var1, false)) {
         int var2 = a(var0) + l;
         int var3 = a(var1) + m;
         h.c(var2, var3);
         h.c(var2, var3);
      }
   }

   static int a(int var0) {
      return var0 * 32 + 16;
   }

   private static void b(Graphics var0, int var1, int var2, int var3, int var4) {
      int var5 = 0;
      int var6 = 0;
      int var7 = 0;
      int var8 = 0;
      int var9 = 0;
      int var10 = 0;
      var5 = var1 - l;
      var6 = var2 - m;
      var7 = Math.max(var5 / 32, 0);
      var8 = Math.max(var6 / 32, 0);
      var9 = Math.min((var5 + var3) / 32, 31);
      var10 = Math.min((var6 + var4) / 32, 899);

      for (int var13 = var8; var13 <= var10; var13++) {
         for (int var14 = var7; var14 <= var9; var14++) {
            int var11 = l + var14 * 32;
            int var12 = m + var13 * 32;
            a(var0, var14 + var13 * 32, var11, var12);
         }
      }
   }

   static void a(Graphics var0) {
      if (!q) {
         b(var0, 0, 0, y, z);
      } else if (null != G && !p && n == l && o == m) {
         var0.setClip(0, 0, y, z);
         var0.drawImage(G[I], 0, 0, 20);
      } else {
         byte var1 = (byte)((I + 1) % 2);
         if (null == G) {
            try {
               G = new Image[2];
               H = new Graphics[2];
               G[I] = Image.createImage(y, z);
               H[I] = G[I].getGraphics();
               G[var1] = Image.createImage(y, z);
               H[var1] = G[var1].getGraphics();
               System.gc();
               Graphics var2;
               b(var2 = H[I], 0, 0, y, z);
               n = l;
               o = m;
            } catch (OutOfMemoryError var7) {
               q = false;
               G[0] = null;
               G[1] = null;
               H[0] = null;
               H[1] = null;
               System.gc();
               b(var0, 0, 0, y, z);
               return;
            }
         }

         Graphics var8;
         (var8 = H[var1]).translate(-var8.getTranslateX(), -var8.getTranslateY());
         var8.setClip(0, 0, y, z);
         if (p) {
            b(var8, 0, 0, y, z);
            p = false;
         } else {
            int var3 = l - n;
            int var4 = m - o;
            var8.drawImage(G[I], var3, var4, 20);
            var8.translate(-var8.getTranslateX(), -var8.getTranslateY());
            var8.setClip(0, 0, y, z);
            int var5 = 0;
            int var6 = z;
            if (0 != var4) {
               if (var4 > 0) {
                  b(var8, 0, 0, y, var4);
                  var5 = var4;
               } else {
                  b(var8, 0, z + var4, y, -var4);
                  var6 = z + var4;
               }
            }

            if (0 != var3) {
               Graphics var10000;
               int var10001;
               int var10002;
               int var10003;
               if (var3 > 0) {
                  var10000 = var8;
                  var10001 = 0;
                  var10002 = var5;
                  var10003 = var3;
               } else {
                  var10000 = var8;
                  var10001 = y + var3;
                  var10002 = var5;
                  var10003 = -var3;
               }

               b(var10000, var10001, var10002, var10003, var6 - var5);
            }
         }

         var0.setClip(0, 0, y, z);
         var0.drawImage(G[var1], 0, 0, 20);
         I = var1;
         n = l;
         o = m;
      }
   }

   private static void a(Graphics var0, int var1, int var2, int var3) {
      try {
         short var4 = c(var1);
         short var5 = (short)(d(var1) + 7);
         if (var4 != 0) {
            if (var4 == 6) {
               a(var0, var1, var2, var3, -1);
            }

            var0.setClip(var2, var3, 32, 32);
            var0.drawImage(s, var2 - i[var4] * 32, var3, 20);
            if (var5 >= 8) {
               var0.drawImage(s, var2 - i[var5] * 32, var3, 20);
            }

            if (var4 >= 2) {
               byte var6 = 0;
               int var7;
               if ((var7 = var1 - 32) >= 0 && (var6 = c(var7)) > var4) {
                  var0.setClip(var2, var3, 32, 3);
                  var0.drawImage(t, var2, var3 - 3 - i[var6] * 6, 20);
               }

               if ((var7 = var1 + 32) < 28800 && (var6 = c(var7)) > var4) {
                  var0.setClip(var2, var3 + 32 - 3, 32, 3);
                  var0.drawImage(t, var2, var3 + 32 - 3 - i[var6] * 6, 20);
               }

               if ((var7 = var1 - 1) >= 0 && (var6 = c(var7)) > var4) {
                  var0.setClip(var2, var3, 3, 32);
                  var0.drawImage(u, var2 - 3 - i[var6] * 6, var3, 20);
               }

               if ((var7 = var1 + 1) < 28800 && (var6 = c(var7)) > var4) {
                  var0.setClip(var2 + 32 - 3, var3, 3, 32);
                  var0.drawImage(u, var2 + 32 - 3 - i[var6] * 6, var3, 20);
               }

               return;
            }
         } else {
            a(var0, var1, var2, var3, -1);
         }
      } catch (Throwable var8) {
      }
   }

   static int b(int var0) {
      var0 += 10;
      int var1;
      short var10000;
      if ((var1 = 255 - var0 * 3) > 255) {
         var10000 = 255;
      } else {
         if (var1 >= 0) {
            return var1 << 8 | var1;
         }

         var10000 = 0;
      }

      short var3 = var10000;
      return var3 << 8 | var3;
   }

   static void a(Graphics var0, int var1, int var2, int var3, int var4) {
      if (var1 < 128) {
         var0.setClip(0, 0, y, z);
         var0.setColor(11072255);
         var0.fillRect(var2, var3, 32, 32);
      } else {
         int var5 = var1 % 32;
         int var6 = var1 / 32;
         byte var7 = 0;
         int var8 = 0;
         int var9 = 0;
         int var10 = 0;
         int var11 = 0;
         if (!A) {
            var0.setClip(0, 0, y, z);
         }

         var0.setColor(b(var6));
         var0.fillRect(var2, var3, 32, 32);
         if (var4 != 0 && b(var5, var6 - 1) && !d(var5, var6 - 1)) {
            if (!A) {
               var0.setClip(var2, var3, 32, 3);
            } else {
               var8 = var0.getClipX();
               var9 = var0.getClipY();
               var10 = var0.getClipWidth();
               var11 = var0.getClipHeight();
               var0.clipRect(var2, var3, 32, 3);
            }

            var7 = c(var1 - 32);
            var0.drawImage(t, var2, var3 - 3 - i[var7] * 6, 20);
            if (A) {
               var0.setClip(var8, var9, var10, var11);
            }
         }

         if (var4 != 1 && b(var5, var6 + 1) && !d(var5, var6 + 1)) {
            if (!A) {
               var0.setClip(var2, var3 + 32 - 3, 32, 3);
            } else {
               var8 = var0.getClipX();
               var9 = var0.getClipY();
               var10 = var0.getClipWidth();
               var11 = var0.getClipHeight();
               var0.clipRect(var2, var3 + 32 - 3, 32, 3);
            }

            var7 = c(var1 + 32);
            var0.drawImage(t, var2, var3 + 32 - 3 - i[var7] * 6, 20);
            if (A) {
               var0.setClip(var8, var9, var10, var11);
            }
         }

         if (var4 != 2 && b(var5 - 1, var6) && !d(var5 - 1, var6)) {
            if (!A) {
               var0.setClip(var2, var3, 3, 32);
            } else {
               var8 = var0.getClipX();
               var9 = var0.getClipY();
               var10 = var0.getClipWidth();
               var11 = var0.getClipHeight();
               var0.clipRect(var2, var3, 3, 32);
            }

            var7 = c(var1 - 1);
            var0.drawImage(u, var2 - 3 - i[var7] * 6, var3, 20);
            if (A) {
               var0.setClip(var8, var9, var10, var11);
            }
         }

         if (var4 != 3 && b(var5 + 1, var6) && !d(var5 + 1, var6)) {
            if (!A) {
               var0.setClip(var2 + 32 - 3, var3, 3, 32);
            } else {
               var0.getClipX();
               var0.getClipY();
               var0.getClipWidth();
               var0.getClipHeight();
               var0.clipRect(var2 + 32 - 3, var3, 3, 32);
            }

            var7 = c(var1 + 1);
            var0.drawImage(u, var2 + 32 - 3 - i[var7] * 6, var3, 20);
         }

         A = false;
      }
   }

   private static boolean b() {
      n = l;
      o = m;
      if (C && System.currentTimeMillis() - E > F) {
         C = false;
      }

      if (r == null) {
         return true;
      } else {
         int var1;
         int var3;
         int var4;
         int var5;
         label44: {
            int var0 = (y >> 1) - l - 1;
            var1 = (z >> 1) - m - 1;
            int var2 = r.Q;
            var3 = r.R;
            var4 = Math.abs(var2 - var0);
            var5 = Math.abs(var3 - var1);
            int var10000;
            if (var0 < var2) {
               var10000 = l - (var4 >> 2);
            } else {
               if (var0 <= var2) {
                  break label44;
               }

               var10000 = l + (var4 >> 2);
            }

            l = var10000;
         }

         label38: {
            int var8;
            if (var1 < var3) {
               var8 = m - (var5 >> 2);
            } else {
               if (var1 <= var3) {
                  break label38;
               }

               var8 = m + (var5 >> 2);
            }

            m = var8;
         }

         if (C) {
            int var6 = Mid.rng.nextInt() % D;
            int var7 = Mid.rng.nextInt() % D;
            l += var6;
            m += var7;
            if (d.e.I == 0) {
               d.e.W += var6 / 2;
               d.e.X += var7 / 2;
            }
         }

         l = (short)Math.min(0, l);
         l = (short)Math.max(-(1024 - y), l);
         m = (short)Math.min(0, m);
         m = (short)Math.max(-(28800 - z), m);
         return var4 < 8 && var5 < 8;
      }
   }

   static void a(e var0, boolean var1) {
      r = var0;
      if (var1) {
         l = -(r.Q - y / 2);
         m = -(r.R - z / 2);
      }
   }

   static void a(long var0, int var2) {
      F = var0;
      E = System.currentTimeMillis();
      C = true;
      D = var2;
   }

   static boolean b(int var0, int var1) {
      return var0 >= 0 && var0 < 32 && var1 >= 0 && var1 < 900;
   }

   static boolean c(int var0, int var1) {
      if (d(var0, var1)) {
         return false;
      } else if (d(var1 * 32 + var0) == 1) {
         Mid.c(1000 / Mid.frameMs);
         return false;
      } else {
         return var1 < 899;
      }
   }

   static boolean d(int var0, int var1) {
      return var1 * 32 + var0 >= 28799 ? false : c(var1 * 32 + var0) == 0;
   }

   private static void a(Graphics var0, int var1, int var2) {
      var0.setClip(0, 0, y, z);
      var0.drawImage(v, var1, var2, 20);

      for (int var3 = 0; var3 < 8; var3++) {
         var0.setClip(var1 + 24, var2 + 15, y, z);
         var0.drawImage(v, var1, var2, 20);
         var0.setClip(0, 0, y, z);
         var1 += 15;
      }

      var1 -= 120;

      for (int var6 = 0; var6 < a_.length; var6++) {
         for (int var4 = 0; var4 < a_[var6]; var4++) {
            var0.drawImage(x, var1 + 22, var2 + 10 - var4 * 5, 20);
         }

         var1 += 15;
      }

      var0.setClip(0, 0, y, z);
      var0.drawImage(w, var1 + 40, var2 + 2, 20);
   }

   static void b(Graphics var0) {
      int var1 = m + 128 + 24;
      int var2 = (60 - var1) / 4;
      f = true;
      if (var1 < 0) {
         f = false;
      } else {
         label17: {
            Graphics var10000;
            byte var10001;
            int var10002;
            int var10003;
            int var10004;
            if (var2 < 0) {
               var0.setClip(0, 0, y, z);
               var0.setColor(e);
               var10000 = var0;
               var10001 = 0;
               var10002 = 128 + m + var2;
               var10003 = y;
               var10004 = -var2;
            } else {
               if (var2 <= 0) {
                  break label17;
               }

               var0.setClip(0, 0, y, z);
               var0.setColor(dConst);
               var10000 = var0;
               var10001 = 0;
               var10002 = 128 + m;
               var10003 = y;
               var10004 = var2;
            }

            var10000.fillRect(var10001, var10002, var10003, var10004);
         }

         var2 /= 3;
         a(var0, b + l, 96 + m + var2);
      }
   }

   static void c(Graphics var0) {
      if (f) {
         int var1 = m + 128 + 24;
         int var2;
         if ((var2 = (60 - var1) / 4) < 0) {
            var2 /= 3;
            var0.setClip(0, 0, y, z);
            var0.setColor(e);
            var0.fillRect(0, 128 + m + var2, y, -var2);
         }
      }
   }

   static boolean e(int var0, int var1) {
      if (-l > var0) {
         return false;
      } else if (y - l < var0) {
         return false;
      } else {
         return -m > var1 ? false : z - m >= var1;
      }
   }

   private static void a(int var0, int var1, int var2) {
      if (var1 == 6) {
         b(var0, -1, false);
      } else {
         if (var1 == 0) {
            var2 = 0;
         }

         j[var0] = (byte)(var2 * 12 + var1);
      }
   }

   static void b(int var0, int var1, boolean var2) {
      if (var0 < 0 || var0 < 28800) {
         byte var3 = 6;
         if (var2) {
            var3 = 0;
         }

         j[var0] = (byte)(0 + var3);
         c(var0, var1, var2);
         if (var2) {
            h.d(a(var0 % 32), a(var0 / 32));
         }
      }
   }

   private static void c(int var0, int var1, boolean var2) {
      int var3 = var0;
      byte var4 = 6;
      if (!var2) {
         var4 = 0;
      }

      for (int var5 = 0; var5 < 4; var5++) {
         label36: {
            int var6;
            label35: {
               byte var10001;
               switch (var5) {
                  case 0:
                     var6 = var0;
                     var10001 = 32;
                     break;
                  case 1:
                     var6 = var0 + 1;
                     break label35;
                  case 2:
                     var6 = var0 + 32;
                     break label35;
                  case 3:
                     var6 = var0;
                     var10001 = 1;
                     break;
                  default:
                     break label36;
               }

               var6 -= var10001;
            }

            var3 = var6;
         }

         if (var3 < 28800 && var3 >= 0 && var3 != var1 && c(var3) == var4) {
            b(var3, var0, var2);
         }
      }
   }

   static byte c(int var0) {
      short var1;
      if ((var1 = j[var0]) < 0) {
         var1 += 256;
      }

      return (byte)(var1 % 12);
   }

   static byte d(int var0) {
      short var1;
      if ((var1 = j[var0]) < 0) {
         var1 += 256;
      }

      return (byte)(var1 / 12);
   }

   static Object[] a(boolean var0) {
      int var1 = 0;

      try {
         Vector var2 = new Vector();
         byte var3 = -1;
         byte var4 = var0 ? c(0) : d(0);
         var2.addElement(new Byte(var4));
         var1++;

         for (int var5 = 1; var5 < j.length; var5++) {
            if ((var4 = var0 ? c(var5) : d(var5)) != var3) {
               var1++;
               var3 = var4;
            }
         }

         var4 = var0 ? c(0) : d(0);
         byte[] var15 = new byte[var1];
         short[] var6 = new short[var1];
         var1 = 0;
         var15[0] = var4;
         short var7 = 1;

         for (int var8 = 1; var8 < j.length; var8++) {
            short var10000;
            if ((var4 = var0 ? c(var8) : d(var8)) != var3) {
               var6[var1] = var7;
               var3 = var4;
               var15[++var1] = var4;
               var10000 = 1;
            } else {
               var10000 = (short)(var7 + 1);
            }

            var7 = var10000;
         }

         var6[var1] = var7;
         return new Object[]{var15, var6};
      } catch (Throwable var9) {
         return null;
      }
   }

   static void a(boolean var0, byte[] var1, short[] var2) {
      short var3 = 0;

      for (int var4 = 0; var4 < var1.length; var4++) {
         byte var5 = var1[var4];
         short var6 = var2[var4];

         for (int var7 = 0; var7 < var6; var7++) {
            byte var8;
            byte var10000;
            if (var0) {
               var8 = var5;
               var10000 = d(var3 + var7);
            } else {
               var8 = c(var3 + var7);
               var10000 = var5;
            }

            byte var9 = var10000;
            j[var3 + var7] = (byte)(var9 * 12 + var8);
         }

         var3 += var6;
      }
   }

   static void b(boolean var0) {
      byte var1 = 0;
      if (var0) {
         var1 = 8;
         Mid.rng.setSeed(h_);
      }

      k.clear();

      for (int var2 = var1; var2 < g.length; var2++) {
         for (int var3 = 0; var3 < g[var2].length; var3++) {
            if (!var0 && var2 == 8 && var3 == 0) {
               h_ = System.currentTimeMillis();
               Mid.rng.setSeed(h_);
            }

            short var4;
            if ((var4 = g[var2][var3]) != 0) {
               int var5;
               if ((var5 = var3 * 28800 / g[var2].length) < 320) {
                  var5 = 320;
               }

               for (int var11 = var5; var11 < (var3 + 1) * 28800 / g[var2].length; var11++) {
                  int var7 = Mid.a(var4);
                  if ((var11 += var7) < 28768) {
                     if (var2 < 8) {
                        a(var11, var2, d(var11));
                     } else {
                        int var8;
                        byte var9 = (byte)((var8 = var2 - 7) - 11);
                        if (var8 >= 11) {
                           var8 = 11;
                           k.put(new Short((short)var11), new Byte(var9));
                        }

                        a(var11, c(var11), var8);
                        if (var9 == 0 || var9 == 1 || var9 == 2 || var9 == 3 || var9 == 4 || var9 == 5 || var9 == 6 || var9 == 7 || var9 == 8) {
                           var11 = 28800;
                           var3 = g[var2].length;
                        }
                     }
                  }
               }
            }
         }

         Mid.b.h();
      }

      for (int var10 = 28768; var10 < j.length; var10++) {
         a(var10, 7, d(var10));
      }
   }

   static void f(int var0, int var1) {
      for (int var2 = 10; var2 <= var1 + 4; var2++) {
         a(var0 + var2 * 32, 0, 0);
         int var3 = var2 / (900 / g[2].length);
         if (var0 != 0 && c(var0 - 1 + var2 * 32) == 6) {
            a(var0 - 1 + var2 * 32, var3, 0);
         }

         if (var0 < 31 && c(var0 + 1 + var2 * 32) == 6) {
            a(var0 + 1 + var2 * 32, var3, 0);
         }
      }
   }

   static boolean g(int var0, int var1) {
      if (var0 != 0 && c(var0 - 1 + var1 * 32) == 6) {
         return true;
      } else if (var0 < 31 && c(var0 + 1 + var1 * 32) == 6) {
         return true;
      } else {
         return c(var0 + (var1 - 1) * 32) == 6 ? true : var1 < 899 && c(var0 + (var1 + 1) * 32) == 6;
      }
   }

   private static void c() {
      short[] var0 = g[5];

      for (int var1 = 0; var1 < var0.length; var1++) {
         if (var0[var1] != 0) {
            B = var1 * 900 / var0.length - 1;
            return;
         }
      }
   }
}
