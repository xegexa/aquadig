package aquadig;

import java.awt.Graphics2D;
import java.util.Random;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;

public final class h {
   static int a;
   static int b;
   static int c;
   static Random rng = new Random();
   /** Frame counter for splash/particle effects (was {@code e}; renamed to avoid shadowing {@link e}). */
   static int effectFrame = 0;
   private static int[] k = new int[32];
   private static int[] l = new int[32];
   private static int[] m = new int[32];
   private static int[] n = new int[32];
   private static int[] o = new int[32];
   private static int[] p = new int[32];
   private static int q = 0;
   private static boolean r;
   private static final int[] s = new int[]{
      0,
      88,
      175,
      255,
      329,
      392,
      443,
      481,
      504,
      512,
      504,
      481,
      443,
      392,
      329,
      255,
      175,
      88,
      0,
      -88,
      -175,
      -256,
      -329,
      -392,
      -443,
      -481,
      -504,
      -512,
      -504,
      -481,
      -443,
      -392,
      -329,
      -256,
      -175,
      -88
   };
   static final int[] f = new int[]{0, 15, 10, 30, 20};
   static Image explosionImg = null;
   static int h;
   static Image i = null;
   static int j;

   static void a() {
      r = false;
      i = null;
      explosionImg = null;
   }

   static void b() {
      if (null == i) {
         i = Mid.a("/res/clods.png");
         j = i.getHeight();
      }

      a = d.bw;
      b = d.bh;
      c = 0;
      rng.setSeed(System.currentTimeMillis());

      for (int var0 = 0; var0 < 32; var0++) {
         k[var0] = 0;
         l[var0] = 0;
         m[var0] = 0;
         n[var0] = 0;
         o[var0] = Integer.MAX_VALUE;
         p[var0] = 0;
      }

      r = false;
   }

   private static void a(int var0, int var1, int var2, int var3) {
      if (var0 == 1 || var0 == 4) {
         var1 += rng.nextInt() % 10;
         var2 += rng.nextInt() % 10;
      }

      k[q] = var1;
      l[q] = var2;
      p[q] = var0;
      int[] var10000;
      int var10001;
      int var10002;
      if (var3 < 0) {
         var10000 = o;
         var10001 = q;
         var10002 = -1;
      } else {
         var10000 = o;
         var10001 = q;
         var10002 = -var3;
      }

      var10000[var10001] = var10002;
      q++;
      if (q >= 32) {
         q = 0;
      }

      r = true;
   }

   static void a(int var0, int var1) {
      m[q] = Mid.a(3);
      a(3, var0, var1, -1);
   }

   static void b(int var0, int var1) {
      m[q] = rng.nextInt() % 7;
      n[q] = rng.nextInt() % 5 - 5;
      a(4, var0, var1, -1);
   }

   static void c(int var0, int var1) {
      m[q] = rng.nextInt() % 7;
      n[q] = rng.nextInt() % 5 - 5;
      a(1, var0, var1, -1);
   }

   static void d(int var0, int var1) {
      a(2, var0, var1, -1);
   }

   static void e(int var0, int var1) {
      a(2, var0, var1, -1);
      a(2, var0 + Mid.b(16), var1 + Mid.b(16), 5);
   }

   private static void a(int var0) {
      int var1 = m[var0];
      int var2 = l[var0];
      if (var1 < 7 && Mid.a(6) == 0) {
         m[var0] = var1 + 1;
      }

      var2 -= var1;
      if (!g.e(k[var0], var2)) {
         o[var0] = f[3];
      } else if (d.e != null && var2 <= 128) {
         o[var0] = f[3];
      } else {
         int[] var10000;
         int var10001;
         int var10002;
         if (d.aE) {
            var10000 = n;
            var10001 = var0;
            var10002 = 14083579;
         } else {
            var10000 = n;
            var10001 = var0;
            var10002 = g.b(var2 / 32);
         }

         var10000[var10001] = var10002;
         l[var0] = var2;
      }
   }

   private static void b(int var0) {
      if (!g.e(k[var0], l[var0])) {
         o[var0] = f[4];
      } else {
         k[var0] = k[var0] + m[var0];
         l[var0] = l[var0] + n[var0];
         n[var0]++;
      }
   }

   private static void c(int var0) {
      k[var0] = k[var0] + m[var0];
      l[var0] = l[var0] + n[var0];
      n[var0]++;
   }

   static void c() {
      c++;
      if (r) {
         boolean var0 = false;

         for (int var1 = 0; var1 < 32; var1++) {
            if (o[var1] < f[p[var1]]) {
               o[var1]++;
               switch (p[var1]) {
                  case 1:
                     c(var1);
                  case 2:
                  default:
                     break;
                  case 3:
                     a(var1);
                     break;
                  case 4:
                     b(var1);
               }

               var0 = true;
            }
         }

         r = var0;
      }
   }

   static void a(Graphics var0) {
      for (int var4 = 0; var4 < 32; var4++) {
         if (!r) {
            return;
         }

         int var3;
         if ((var3 = p[var4]) != 0) {
            int var1 = o[var4];
            int var2 = f[var3];
            if (var1 < var2 && var1 >= 0) {
               switch (var3) {
                  case 1:
                     a(var0, k[var4], l[var4], var1);
                     break;
                  case 2:
                     b(var0, k[var4] + g.l, l[var4] + g.m, o[var4]);
                     break;
                  case 3:
                     a(var0, k[var4] + g.l, l[var4] + g.m, m[var4], n[var4]);
                     break;
                  case 4:
                     a(var0, k[var4] + g.l, l[var4] + g.m);
               }
            }
         }
      }
   }

   private static void a(Graphics var0, int var1, int var2, int var3) {
      if (i == null) {
         return;
      }

      var1 -= j / 2;
      var2 -= j / 2;
      int sheetFrames = j > 0 ? i.getWidth() / j : 1;
      if (sheetFrames < 1) {
         sheetFrames = 1;
      }

      int frame = var3 % sheetFrames;
      double angleDeg = var3 * (360.0 / f[1]);
      Graphics2D var4 = (Graphics2D) var0.g2d.create(var1, var2, j, j);

      try {
         var4.translate(j / 2, j / 2);
         var4.rotate(Math.toRadians(angleDeg));
         var4.translate(-j / 2, -j / 2);
         var4.drawImage(i.buf, -frame * j, 0, null);
      } finally {
         var4.dispose();
      }
   }

   private static void b(Graphics var0, int var1, int var2, int var3) {
      if (null == explosionImg) {
         explosionImg = Mid.a("/res/explosion.png");
         h = explosionImg.getHeight();
      }

      var3 >>= 1;
      var1 -= h >> 1;
      var2 -= h >> 1;
      var1 += Mid.b(4);
      var2 += Mid.b(4);
      var0.setClip(var1, var2, h, h);
      var0.drawImage(explosionImg, var1 - var3 * h, var2, 20);
   }

   static boolean a(Graphics var0, byte var1) {
      int var2 = 0;
      int var3 = 0;
      int var4 = 0;
      int var5 = 0;
      int var7 = 0;
      int var8 = 0;
      int var9;
      int var10 = e.d(var9 = d.Q >> 1);
      Graphics var10000;
      int var10001;
      if (var1 == 2) {
         var10000 = var0;
         var10001 = 16711680;
      } else {
         var10000 = var0;
         var10001 = 0;
      }

      var10000.setColor(var10001);
      int var12 = -51472;
      int var13 = 102943;

      for (int var15 = 0; var15 < 2; var15++) {
         int var16 = e.b(var15 << 16, 131072);
         int var17 = var12 + e.a(var16, var13);
         int var18 = e.c(e.a(var10, e.f(var17)));
         int var19 = e.c(e.a(var10, e.e(var17)));
         int var20 = a / 2;
         int var21 = b / 2;
         var2 = var20 * var15;
         var3 = b;
         var4 = (a >> 1) + var18;
         var5 = (b >> 1) - var19;
         var7 = var20 * (var15 + 1);
         var0.fillTriangle(var2, var3, var4, var5, var7, var3);
         var2 = a;
         var3 = b - var21 * var15;
         var4 = (a >> 1) - var19;
         var5 = (b >> 1) - var18;
         var8 = b - var21 * (var15 + 1);
         var0.fillTriangle(var2, var3, var4, var5, var2, var8);
         var2 = a - var20 * var15;
         var4 = (a >> 1) - var18;
         var5 = (b >> 1) + var19;
         var7 = a - var20 * (var15 + 1);
         var0.fillTriangle(var2, 0, var4, var5, var7, 0);
         var3 = var21 * var15;
         var4 = (a >> 1) + var19;
         var5 = (b >> 1) + var18;
         var8 = var21 * (var15 + 1);
         var0.fillTriangle(0, var3, var4, var5, 0, var8);
      }

      if (var1 == 0) {
         if (d.Q < 0) {
            return true;
         } else {
            d.Q -= 10;
            return false;
         }
      } else if (var1 == 2) {
         if (d.Q > b) {
            return true;
         } else {
            d.Q += 10;
            return false;
         }
      } else {
         return true;
      }
   }

   private static void a(Graphics var0, int var1, int var2, int var3, int var4) {
      var0.setClip(0, 0, a, b);
      Graphics var10000;
      int var10001;
      if (Mid.a == 101) {
         var10000 = var0;
         var10001 = d.e.h();
      } else {
         var10000 = var0;
         var10001 = -1996488705;
      }

      var10000.setColor(Mid.a(var10001, var4));
      var1 += rng.nextInt() % 2;
      if (var3 < 2) {
         var0.drawLine(var1, var2, var1, var2);
      } else {
         int var10002;
         int var10003;
         int var10004;
         if (var3 == 2) {
            var10000 = var0;
            var10001 = var1;
            var10002 = var2;
            var10003 = 2;
            var10004 = 2;
         } else {
            if (var3 == 3) {
               var0.drawLine(var1 - 1, var2, var1 + 1, var2);
               var0.drawLine(var1, var2 - 1, var1, var2 + 1);
               return;
            }

            int var5;
            int var6 = (var5 = var3 / 2) - 1;
            var0.fillRect(var1 - var6, var2 - var5, var6 * 2, var5 * 2);
            var10000 = var0;
            var10001 = var1 - var5;
            var10002 = var2 - var6;
            var10003 = var5 * 2;
            var10004 = var6 * 2;
         }

         var10000.fillRect(var10001, var10002, var10003, var10004);
      }
   }

   private static void a(Graphics var0, int var1, int var2) {
      var0.setClip(0, 0, a, b);
      var0.setColor(0);
      var0.fillRect(var1 - 1, var2 - 1, 3, 3);
      var0.drawLine(var1 - 1, var2 - 1, var1 - 1, var2 - 1);
      var0.drawLine(var1 + 1, var2 + 1, var1 + 1, var2 + 1);
      var0.setColor(16711680);
      var0.drawLine(var1, var2, var1, var2);
   }

   static {
      b();
   }
}
