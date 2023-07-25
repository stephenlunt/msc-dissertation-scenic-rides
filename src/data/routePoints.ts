/**
 * Last modified: 22-07-2023
 * Modifying author: Stephen Lunt
 * File description: The data seed and types for coordinate points on the route.
 */

type Route = {
  id: string;
  points: RoutePoint[];
};

export type RoutePoint = {
  sequence: number;
  lat: number;
  long: number;
};

export const routePoints: Route[] = [
  {
    id: "AD122",
    points: [
      { sequence: 1, lat: 54.970273, long: -2.095754 },
      { sequence: 2, lat: 54.970288, long: -2.097155 },
      { sequence: 3, lat: 54.970822, long: -2.096298 },
      { sequence: 4, lat: 54.971137, long: -2.095 },
      { sequence: 5, lat: 54.971871, long: -2.094759 },
      { sequence: 6, lat: 54.972702, long: -2.094757 },
      { sequence: 7, lat: 54.973324, long: -2.095878 },
      { sequence: 8, lat: 54.973826, long: -2.096849 },
      { sequence: 9, lat: 54.974662, long: -2.095681 },
      { sequence: 10, lat: 54.975684, long: -2.094866 },
      { sequence: 11, lat: 54.976725, long: -2.094158 },
      { sequence: 12, lat: 54.977931, long: -2.093444 },
      { sequence: 13, lat: 54.979178, long: -2.093315 },
      { sequence: 14, lat: 54.980262, long: -2.092929 },
      { sequence: 15, lat: 54.981359, long: -2.09449 },
      { sequence: 16, lat: 54.981661, long: -2.096647 },
      { sequence: 17, lat: 54.98208, long: -2.098901 },
      { sequence: 18, lat: 54.982474, long: -2.100918 },
      { sequence: 19, lat: 54.982873, long: -2.103107 },
      { sequence: 20, lat: 54.983242, long: -2.10506 },
      { sequence: 21, lat: 54.983583, long: -2.106803 },
      { sequence: 22, lat: 54.983909, long: -2.108423 },
      { sequence: 23, lat: 54.984235, long: -2.110086 },
      { sequence: 24, lat: 54.98515, long: -2.111307 },
      { sequence: 25, lat: 54.986259, long: -2.112005 },
      { sequence: 26, lat: 54.987355, long: -2.112659 },
      { sequence: 27, lat: 54.988359, long: -2.11353 },
      { sequence: 28, lat: 54.989258, long: -2.114496 },
      { sequence: 29, lat: 54.990103, long: -2.115374 },
      { sequence: 30, lat: 54.99089, long: -2.116072 },
      { sequence: 31, lat: 54.992091, long: -2.116511 },
      { sequence: 32, lat: 54.993347, long: -2.117155 },
      { sequence: 33, lat: 54.99454, long: -2.118185 },
      { sequence: 34, lat: 54.995691, long: -2.119214 },
      { sequence: 35, lat: 54.996778, long: -2.120358 },
      { sequence: 36, lat: 54.997934, long: -2.121214 },
      { sequence: 37, lat: 54.99898, long: -2.122137 },
      { sequence: 38, lat: 55.000087, long: -2.123311 },
      { sequence: 39, lat: 55.001269, long: -2.12448 },
      { sequence: 40, lat: 55.002348, long: -2.12548 },
      { sequence: 41, lat: 55.00348, long: -2.126467 },
      { sequence: 42, lat: 55.004757, long: -2.1273 },
      { sequence: 43, lat: 55.006134, long: -2.127353 },
      { sequence: 44, lat: 55.007604, long: -2.127976 },
      { sequence: 45, lat: 55.008784, long: -2.129209 },
      { sequence: 46, lat: 55.010263, long: -2.129919 },
      { sequence: 47, lat: 55.011538, long: -2.130692 },
      { sequence: 48, lat: 55.012753, long: -2.131631 },
      { sequence: 49, lat: 55.014192, long: -2.132575 },
      { sequence: 50, lat: 55.015915, long: -2.132683 },
      { sequence: 51, lat: 55.01722, long: -2.131423 },
      { sequence: 52, lat: 55.018858, long: -2.130133 },
      { sequence: 53, lat: 55.02091, long: -2.130255 },
      { sequence: 54, lat: 55.022932, long: -2.128251 },
      { sequence: 55, lat: 55.02442, long: -2.126126 },
      { sequence: 56, lat: 55.025934, long: -2.124146 },
      { sequence: 57, lat: 55.027541, long: -2.125625 },
      { sequence: 58, lat: 55.029373, long: -2.127427 },
      { sequence: 59, lat: 55.029591, long: -2.13014 },
      { sequence: 60, lat: 55.029323, long: -2.13353 },
      { sequence: 61, lat: 55.02904, long: -2.13677 },
      { sequence: 62, lat: 55.028794, long: -2.139667 },
      { sequence: 63, lat: 55.028536, long: -2.142542 },
      { sequence: 64, lat: 55.028253, long: -2.145847 },
      { sequence: 65, lat: 55.028316, long: -2.1486 },
      { sequence: 66, lat: 55.028907, long: -2.151145 },
      { sequence: 67, lat: 55.029288, long: -2.153934 },
      { sequence: 68, lat: 55.029584, long: -2.1571 },
      { sequence: 69, lat: 55.030309, long: -2.159804 },
      { sequence: 70, lat: 55.030924, long: -2.162443 },
      { sequence: 71, lat: 55.031428, long: -2.164641 },
      { sequence: 72, lat: 55.031999, long: -2.167024 },
      { sequence: 73, lat: 55.032577, long: -2.16947 },
      { sequence: 74, lat: 55.03318, long: -2.172045 },
      { sequence: 75, lat: 55.033782, long: -2.174942 },
      { sequence: 76, lat: 55.034619, long: -2.178211 },
      { sequence: 77, lat: 55.035394, long: -2.181645 },
      { sequence: 78, lat: 55.036066, long: -2.184521 },
      { sequence: 79, lat: 55.036656, long: -2.187203 },
      { sequence: 80, lat: 55.037284, long: -2.189993 },
      { sequence: 81, lat: 55.037909, long: -2.192566 },
      { sequence: 82, lat: 55.038213, long: -2.195828 },
      { sequence: 83, lat: 55.037905, long: -2.198788 },
      { sequence: 84, lat: 55.037613, long: -2.201577 },
      { sequence: 85, lat: 55.037386, long: -2.204173 },
      { sequence: 86, lat: 55.037152, long: -2.206543 },
      { sequence: 87, lat: 55.036943, long: -2.208668 },
      { sequence: 88, lat: 55.036743, long: -2.210502 },
      { sequence: 89, lat: 55.036571, long: -2.212401 },
      { sequence: 90, lat: 55.036418, long: -2.214086 },
      { sequence: 91, lat: 55.036233, long: -2.215856 },
      { sequence: 92, lat: 55.036055, long: -2.217637 },
      { sequence: 93, lat: 55.035902, long: -2.219101 },
      { sequence: 94, lat: 55.035705, long: -2.220914 },
      { sequence: 95, lat: 55.035521, long: -2.222778 },
      { sequence: 96, lat: 55.035385, long: -2.224534 },
      { sequence: 97, lat: 55.035226, long: -2.226099 },
      { sequence: 98, lat: 55.035097, long: -2.227666 },
      { sequence: 99, lat: 55.034937, long: -2.229307 },
      { sequence: 100, lat: 55.03474, long: -2.23111 },
      { sequence: 101, lat: 55.034556, long: -2.232945 },
      { sequence: 102, lat: 55.03439, long: -2.234705 },
      { sequence: 103, lat: 55.034249, long: -2.23636 },
      { sequence: 104, lat: 55.034065, long: -2.237969 },
      { sequence: 105, lat: 55.033831, long: -2.239675 },
      { sequence: 106, lat: 55.033633, long: -2.241303 },
      { sequence: 107, lat: 55.03342, long: -2.242924 },
      { sequence: 108, lat: 55.03323, long: -2.24463 },
      { sequence: 109, lat: 55.033005, long: -2.246378 },
      { sequence: 110, lat: 55.032796, long: -2.24818 },
      { sequence: 111, lat: 55.032599, long: -2.249865 },
      { sequence: 112, lat: 55.032421, long: -2.251437 },
      { sequence: 113, lat: 55.032217, long: -2.252909 },
      { sequence: 114, lat: 55.032032, long: -2.254458 },
      { sequence: 115, lat: 55.031842, long: -2.256207 },
      { sequence: 116, lat: 55.031651, long: -2.257729 },
      { sequence: 117, lat: 55.031497, long: -2.259166 },
      { sequence: 118, lat: 55.031313, long: -2.260722 },
      { sequence: 119, lat: 55.031042, long: -2.262194 },
      { sequence: 120, lat: 55.030767, long: -2.263655 },
      { sequence: 121, lat: 55.03057, long: -2.26535 },
      { sequence: 122, lat: 55.030398, long: -2.267013 },
      { sequence: 123, lat: 55.030202, long: -2.268628 },
      { sequence: 124, lat: 55.030015, long: -2.270253 },
      { sequence: 125, lat: 55.029849, long: -2.271825 },
      { sequence: 126, lat: 55.029655, long: -2.273391 },
      { sequence: 127, lat: 55.029489, long: -2.274883 },
      { sequence: 128, lat: 55.029348, long: -2.276388 },
      { sequence: 129, lat: 55.029132, long: -2.277986 },
      { sequence: 130, lat: 55.028745, long: -2.279435 },
      { sequence: 131, lat: 55.028278, long: -2.280733 },
      { sequence: 132, lat: 55.027791, long: -2.282068 },
      { sequence: 133, lat: 55.027348, long: -2.283259 },
      { sequence: 134, lat: 55.026832, long: -2.284675 },
      { sequence: 135, lat: 55.026416, long: -2.285773 },
      { sequence: 136, lat: 55.025992, long: -2.286921 },
      { sequence: 137, lat: 55.025572, long: -2.288046 },
      { sequence: 138, lat: 55.02508, long: -2.289376 },
      { sequence: 139, lat: 55.024631, long: -2.290578 },
      { sequence: 140, lat: 55.02425, long: -2.29164 },
      { sequence: 141, lat: 55.023905, long: -2.292616 },
      { sequence: 142, lat: 55.023485, long: -2.293727 },
      { sequence: 143, lat: 55.023092, long: -2.294735 },
      { sequence: 144, lat: 55.022758, long: -2.295549 },
      { sequence: 145, lat: 55.022413, long: -2.296386 },
      { sequence: 146, lat: 55.022044, long: -2.297298 },
      { sequence: 147, lat: 55.021645, long: -2.298328 },
      { sequence: 148, lat: 55.021221, long: -2.299281 },
      { sequence: 149, lat: 55.020821, long: -2.300236 },
      { sequence: 150, lat: 55.020421, long: -2.301223 },
      { sequence: 151, lat: 55.019984, long: -2.3022 },
      { sequence: 152, lat: 55.019591, long: -2.303172 },
      { sequence: 153, lat: 55.019172, long: -2.304181 },
      { sequence: 154, lat: 55.018803, long: -2.305017 },
      { sequence: 155, lat: 55.018427, long: -2.305943 },
      { sequence: 156, lat: 55.018016, long: -2.306788 },
      { sequence: 157, lat: 55.01758, long: -2.307689 },
      { sequence: 158, lat: 55.017161, long: -2.308462 },
      { sequence: 159, lat: 55.016756, long: -2.309252 },
      { sequence: 160, lat: 55.016325, long: -2.310078 },
      { sequence: 161, lat: 55.015899, long: -2.310879 },
      { sequence: 162, lat: 55.015481, long: -2.311727 },
      { sequence: 163, lat: 55.01505, long: -2.312521 },
      { sequence: 164, lat: 55.014595, long: -2.313443 },
      { sequence: 165, lat: 55.014127, long: -2.314366 },
      { sequence: 166, lat: 55.01371, long: -2.315106 },
      { sequence: 167, lat: 55.013329, long: -2.315857 },
      { sequence: 168, lat: 55.012861, long: -2.31679 },
      { sequence: 169, lat: 55.012437, long: -2.317681 },
      { sequence: 170, lat: 55.012018, long: -2.318463 },
      { sequence: 171, lat: 55.011593, long: -2.319322 },
      { sequence: 172, lat: 55.011144, long: -2.32018 },
      { sequence: 173, lat: 55.010806, long: -2.320931 },
      { sequence: 174, lat: 55.010394, long: -2.321703 },
      { sequence: 175, lat: 55.009969, long: -2.322594 },
      { sequence: 176, lat: 55.009588, long: -2.323393 },
      { sequence: 177, lat: 55.009243, long: -2.324514 },
      { sequence: 178, lat: 55.008954, long: -2.325748 },
      { sequence: 179, lat: 55.008677, long: -2.326889 },
      { sequence: 180, lat: 55.008425, long: -2.32793 },
      { sequence: 181, lat: 55.008179, long: -2.328949 },
      { sequence: 182, lat: 55.007945, long: -2.329915 },
      { sequence: 183, lat: 55.007675, long: -2.330912 },
      { sequence: 184, lat: 55.007422, long: -2.331953 },
      { sequence: 185, lat: 55.007191, long: -2.332899 },
      { sequence: 186, lat: 55.006939, long: -2.333939 },
      { sequence: 187, lat: 55.006673, long: -2.334985 },
      { sequence: 188, lat: 55.006434, long: -2.335999 },
      { sequence: 189, lat: 55.006198, long: -2.336927 },
      { sequence: 190, lat: 55.005998, long: -2.337826 },
      { sequence: 191, lat: 55.005826, long: -2.33877 },
      { sequence: 192, lat: 55.005641, long: -2.339757 },
      { sequence: 193, lat: 55.005463, long: -2.34069 },
      { sequence: 194, lat: 55.005266, long: -2.341828 },
      { sequence: 195, lat: 55.00505, long: -2.3429 },
      { sequence: 196, lat: 55.004804, long: -2.343984 },
      { sequence: 197, lat: 55.004595, long: -2.344779 },
      { sequence: 198, lat: 55.004404, long: -2.345605 },
      { sequence: 199, lat: 55.004183, long: -2.346582 },
      { sequence: 200, lat: 55.00398, long: -2.347408 },
      { sequence: 201, lat: 55.003765, long: -2.348319 },
      { sequence: 202, lat: 55.003506, long: -2.34936 },
      { sequence: 203, lat: 55.003315, long: -2.350218 },
      { sequence: 204, lat: 55.003088, long: -2.351216 },
      { sequence: 205, lat: 55.002844, long: -2.352318 },
      { sequence: 206, lat: 55.00258, long: -2.353445 },
      { sequence: 207, lat: 55.002272, long: -2.354657 },
      { sequence: 208, lat: 55.001958, long: -2.355987 },
      { sequence: 209, lat: 55.001626, long: -2.357372 },
      { sequence: 210, lat: 55.001303, long: -2.358709 },
      { sequence: 211, lat: 55.000971, long: -2.360093 },
      { sequence: 212, lat: 55.000663, long: -2.361338 },
      { sequence: 213, lat: 55.000331, long: -2.3627 },
      { sequence: 214, lat: 55.000036, long: -2.364135 },
      { sequence: 215, lat: 54.999821, long: -2.365476 },
      { sequence: 216, lat: 54.999624, long: -2.366839 },
      { sequence: 217, lat: 54.999402, long: -2.368266 },
      { sequence: 218, lat: 54.99923, long: -2.3695 },
      { sequence: 219, lat: 54.999008, long: -2.370905 },
      { sequence: 220, lat: 54.998811, long: -2.372193 },
      { sequence: 221, lat: 54.998645, long: -2.373405 },
      { sequence: 222, lat: 54.998449, long: -2.374625 },
      { sequence: 223, lat: 54.998265, long: -2.375944 },
      { sequence: 224, lat: 54.998062, long: -2.377275 },
      { sequence: 225, lat: 54.997902, long: -2.378433 },
      { sequence: 226, lat: 54.99768, long: -2.379785 },
      { sequence: 227, lat: 54.997403, long: -2.38151 },
      { sequence: 228, lat: 54.997199, long: -2.382862 },
      { sequence: 229, lat: 54.99699, long: -2.384353 },
      { sequence: 230, lat: 54.996775, long: -2.385791 },
      { sequence: 231, lat: 54.996564, long: -2.386913 },
      { sequence: 232, lat: 54.996234, long: -2.387472 },
      { sequence: 233, lat: 54.99595, long: -2.387576 },
      { sequence: 234, lat: 54.995674, long: -2.3876 },
      { sequence: 235, lat: 54.995424, long: -2.387597 },
      { sequence: 236, lat: 54.995225, long: -2.387592 },
      { sequence: 237, lat: 54.995028, long: -2.387587 },
      { sequence: 238, lat: 54.994842, long: -2.387576 },
      { sequence: 239, lat: 54.994663, long: -2.387549 },
      { sequence: 240, lat: 54.994483, long: -2.387476 },
      { sequence: 241, lat: 54.994306, long: -2.387347 },
      { sequence: 242, lat: 54.994132, long: -2.387243 },
      { sequence: 243, lat: 54.993901, long: -2.387162 },
      { sequence: 244, lat: 54.993636, long: -2.386974 },
      { sequence: 245, lat: 54.993499, long: -2.386626 },
      { sequence: 246, lat: 54.993417, long: -2.386278 },
      { sequence: 247, lat: 54.993311, long: -2.385977 },
      { sequence: 248, lat: 54.993175, long: -2.385758 },
      { sequence: 249, lat: 54.992962, long: -2.385669 },
      { sequence: 250, lat: 54.992652, long: -2.385695 },
      { sequence: 251, lat: 54.992311, long: -2.38569 },
      { sequence: 252, lat: 54.991976, long: -2.385666 },
      { sequence: 253, lat: 54.991663, long: -2.385618 },
      { sequence: 254, lat: 54.991341, long: -2.385569 },
      { sequence: 255, lat: 54.991058, long: -2.385528 },
      { sequence: 256, lat: 54.990765, long: -2.385372 },
      { sequence: 257, lat: 54.99047, long: -2.385056 },
      { sequence: 258, lat: 54.990196, long: -2.384702 },
      { sequence: 259, lat: 54.989987, long: -2.384015 },
      { sequence: 260, lat: 54.990062, long: -2.383106 },
      { sequence: 261, lat: 54.990129, long: -2.382377 },
      { sequence: 262, lat: 54.990213, long: -2.381449 },
      { sequence: 263, lat: 54.990317, long: -2.380402 },
      { sequence: 264, lat: 54.990409, long: -2.37942 },
      { sequence: 265, lat: 54.990499, long: -2.378429 },
      { sequence: 266, lat: 54.990591, long: -2.377437 },
      { sequence: 267, lat: 54.990681, long: -2.376498 },
      { sequence: 268, lat: 54.99077, long: -2.375581 },
      { sequence: 269, lat: 54.990859, long: -2.374685 },
      { sequence: 270, lat: 54.990939, long: -2.373832 },
      { sequence: 271, lat: 54.991016, long: -2.372981 },
      { sequence: 272, lat: 54.991084, long: -2.371978 },
      { sequence: 273, lat: 54.991172, long: -2.370813 },
      { sequence: 274, lat: 54.991267, long: -2.369719 },
      { sequence: 275, lat: 54.991369, long: -2.368705 },
      { sequence: 276, lat: 54.991438, long: -2.367645 },
      { sequence: 277, lat: 54.991536, long: -2.366562 },
      { sequence: 278, lat: 54.99161, long: -2.365669 },
      { sequence: 279, lat: 54.991339, long: -2.365138 },
      { sequence: 280, lat: 54.991342, long: -2.36582 },
      { sequence: 281, lat: 54.991352, long: -2.366673 },
      { sequence: 282, lat: 54.991278, long: -2.367735 },
      { sequence: 283, lat: 54.991196, long: -2.368687 },
      { sequence: 284, lat: 54.991122, long: -2.369728 },
      { sequence: 285, lat: 54.991035, long: -2.370796 },
      { sequence: 286, lat: 54.990939, long: -2.371944 },
      { sequence: 287, lat: 54.990844, long: -2.372958 },
      { sequence: 288, lat: 54.990788, long: -2.373811 },
      { sequence: 289, lat: 54.990708, long: -2.374669 },
      { sequence: 290, lat: 54.990625, long: -2.375565 },
      { sequence: 291, lat: 54.990539, long: -2.376477 },
      { sequence: 292, lat: 54.990446, long: -2.377412 },
      { sequence: 293, lat: 54.990351, long: -2.378415 },
      { sequence: 294, lat: 54.990271, long: -2.379402 },
      { sequence: 295, lat: 54.99018, long: -2.380369 },
      { sequence: 296, lat: 54.990088, long: -2.381399 },
      { sequence: 297, lat: 54.989996, long: -2.382337 },
      { sequence: 298, lat: 54.989943, long: -2.383083 },
      { sequence: 299, lat: 54.98987, long: -2.384016 },
      { sequence: 300, lat: 54.990107, long: -2.384895 },
      { sequence: 301, lat: 54.990544, long: -2.385415 },
      { sequence: 302, lat: 54.991057, long: -2.385732 },
      { sequence: 303, lat: 54.991651, long: -2.385807 },
      { sequence: 304, lat: 54.992224, long: -2.385871 },
      { sequence: 305, lat: 54.992718, long: -2.385876 },
      { sequence: 306, lat: 54.993167, long: -2.385998 },
      { sequence: 307, lat: 54.993376, long: -2.386523 },
      { sequence: 308, lat: 54.993597, long: -2.387114 },
      { sequence: 309, lat: 54.993897, long: -2.387312 },
      { sequence: 310, lat: 54.994165, long: -2.387395 },
      { sequence: 311, lat: 54.994389, long: -2.387559 },
      { sequence: 312, lat: 54.99466, long: -2.387672 },
      { sequence: 313, lat: 54.994928, long: -2.387715 },
      { sequence: 314, lat: 54.995214, long: -2.387726 },
      { sequence: 315, lat: 54.99545, long: -2.387725 },
      { sequence: 316, lat: 54.995695, long: -2.387733 },
      { sequence: 317, lat: 54.996001, long: -2.387703 },
      { sequence: 318, lat: 54.996283, long: -2.387596 },
      { sequence: 319, lat: 54.996395, long: -2.387972 },
      { sequence: 320, lat: 54.99632, long: -2.388632 },
      { sequence: 321, lat: 54.996178, long: -2.389606 },
      { sequence: 322, lat: 54.996012, long: -2.390915 },
      { sequence: 323, lat: 54.995846, long: -2.392041 },
      { sequence: 324, lat: 54.995638, long: -2.393341 },
      { sequence: 325, lat: 54.995409, long: -2.394758 },
      { sequence: 326, lat: 54.995163, long: -2.396367 },
      { sequence: 327, lat: 54.994931, long: -2.397702 },
      { sequence: 328, lat: 54.994679, long: -2.399268 },
      { sequence: 329, lat: 54.994411, long: -2.400807 },
      { sequence: 330, lat: 54.994178, long: -2.402223 },
      { sequence: 331, lat: 54.993919, long: -2.403768 },
      { sequence: 332, lat: 54.993731, long: -2.404995 },
      { sequence: 333, lat: 54.993503, long: -2.406336 },
      { sequence: 334, lat: 54.993294, long: -2.407624 },
      { sequence: 335, lat: 54.993078, long: -2.408938 },
      { sequence: 336, lat: 54.992863, long: -2.410311 },
      { sequence: 337, lat: 54.992629, long: -2.411802 },
      { sequence: 338, lat: 54.992381, long: -2.413305 },
      { sequence: 339, lat: 54.992129, long: -2.414785 },
      { sequence: 340, lat: 54.991871, long: -2.416362 },
      { sequence: 341, lat: 54.991655, long: -2.417789 },
      { sequence: 342, lat: 54.991397, long: -2.419323 },
      { sequence: 343, lat: 54.991175, long: -2.420754 },
      { sequence: 344, lat: 54.990948, long: -2.422031 },
      { sequence: 345, lat: 54.990726, long: -2.423447 },
      { sequence: 346, lat: 54.99054, long: -2.424817 },
      { sequence: 347, lat: 54.990367, long: -2.426416 },
      { sequence: 348, lat: 54.990207, long: -2.427928 },
      { sequence: 349, lat: 54.990061, long: -2.429463 },
      { sequence: 350, lat: 54.989838, long: -2.431179 },
      { sequence: 351, lat: 54.98968, long: -2.432692 },
      { sequence: 352, lat: 54.98952, long: -2.434323 },
      { sequence: 353, lat: 54.989329, long: -2.436072 },
      { sequence: 354, lat: 54.989145, long: -2.437552 },
      { sequence: 355, lat: 54.988898, long: -2.439451 },
      { sequence: 356, lat: 54.988665, long: -2.441065 },
      { sequence: 357, lat: 54.988455, long: -2.44261 },
      { sequence: 358, lat: 54.988234, long: -2.444488 },
      { sequence: 359, lat: 54.987587, long: -2.445893 },
      { sequence: 360, lat: 54.986851, long: -2.446329 },
      { sequence: 361, lat: 54.98629, long: -2.446973 },
      { sequence: 362, lat: 54.985724, long: -2.447799 },
      { sequence: 363, lat: 54.985102, long: -2.448228 },
      { sequence: 364, lat: 54.984548, long: -2.448788 },
      { sequence: 365, lat: 54.984074, long: -2.449936 },
      { sequence: 366, lat: 54.983274, long: -2.449603 },
      { sequence: 367, lat: 54.982601, long: -2.449002 },
      { sequence: 368, lat: 54.9818, long: -2.448895 },
      { sequence: 369, lat: 54.980815, long: -2.448627 },
      { sequence: 370, lat: 54.979923, long: -2.448648 },
      { sequence: 371, lat: 54.979109, long: -2.448627 },
      { sequence: 372, lat: 54.978561, long: -2.449034 },
      { sequence: 373, lat: 54.978019, long: -2.449667 },
      { sequence: 374, lat: 54.977448, long: -2.450458 },
      { sequence: 375, lat: 54.976721, long: -2.450708 },
      { sequence: 376, lat: 54.976064, long: -2.450893 },
      { sequence: 377, lat: 54.975381, long: -2.450508 },
      { sequence: 378, lat: 54.97479, long: -2.450487 },
      { sequence: 379, lat: 54.974082, long: -2.450229 },
      { sequence: 380, lat: 54.973523, long: -2.449951 },
      { sequence: 381, lat: 54.973005, long: -2.449467 },
      { sequence: 382, lat: 54.972409, long: -2.449304 },
      { sequence: 383, lat: 54.971861, long: -2.449476 },
      { sequence: 384, lat: 54.971627, long: -2.450634 },
      { sequence: 385, lat: 54.971664, long: -2.452018 },
      { sequence: 386, lat: 54.97175, long: -2.453274 },
      { sequence: 387, lat: 54.971651, long: -2.45454 },
      { sequence: 388, lat: 54.97146, long: -2.455806 },
      { sequence: 389, lat: 54.971202, long: -2.456793 },
      { sequence: 390, lat: 54.97079, long: -2.457539 },
      { sequence: 391, lat: 54.970525, long: -2.458623 },
      { sequence: 392, lat: 54.97035, long: -2.460016 },
      { sequence: 393, lat: 54.970073, long: -2.460832 },
      { sequence: 394, lat: 54.969778, long: -2.461604 },
      { sequence: 395, lat: 54.969445, long: -2.462473 },
      { sequence: 396, lat: 54.969005, long: -2.463055 },
      { sequence: 397, lat: 54.968512, long: -2.46318 },
      { sequence: 398, lat: 54.968278, long: -2.463888 },
      { sequence: 399, lat: 54.968697, long: -2.463824 },
      { sequence: 400, lat: 54.968401, long: -2.46495 },
      { sequence: 401, lat: 54.968092, long: -2.465898 },
      { sequence: 402, lat: 54.967507, long: -2.46696 },
      { sequence: 403, lat: 54.966879, long: -2.468097 },
      { sequence: 404, lat: 54.9663, long: -2.469771 },
      { sequence: 405, lat: 54.965873, long: -2.471591 },
      { sequence: 406, lat: 54.965698, long: -2.474054 },
      { sequence: 407, lat: 54.965735, long: -2.476693 },
      { sequence: 408, lat: 54.965292, long: -2.478688 },
      { sequence: 409, lat: 54.966216, long: -2.480835 },
      { sequence: 410, lat: 54.96661, long: -2.483753 },
      { sequence: 411, lat: 54.966462, long: -2.4865 },
      { sequence: 412, lat: 54.966339, long: -2.488882 },
      { sequence: 413, lat: 54.966167, long: -2.491628 },
      { sequence: 414, lat: 54.96608, long: -2.49431 },
      { sequence: 415, lat: 54.966167, long: -2.497443 },
      { sequence: 416, lat: 54.966499, long: -2.500319 },
      { sequence: 417, lat: 54.966943, long: -2.502915 },
      { sequence: 418, lat: 54.967361, long: -2.50549 },
      { sequence: 419, lat: 54.968241, long: -2.507876 },
      { sequence: 420, lat: 54.969197, long: -2.510275 },
      { sequence: 421, lat: 54.970198, long: -2.512714 },
      { sequence: 422, lat: 54.971171, long: -2.514989 },
      { sequence: 423, lat: 54.972243, long: -2.517563 },
      { sequence: 424, lat: 54.973314, long: -2.520095 },
      { sequence: 425, lat: 54.97437, long: -2.522728 },
      { sequence: 426, lat: 54.975441, long: -2.525324 },
      { sequence: 427, lat: 54.9765, long: -2.527856 },
      { sequence: 428, lat: 54.97751, long: -2.530281 },
      { sequence: 429, lat: 54.978729, long: -2.533006 },
      { sequence: 430, lat: 54.979829, long: -2.534836 },
      { sequence: 431, lat: 54.981491, long: -2.534042 },
      { sequence: 432, lat: 54.98244, long: -2.531667 },
      { sequence: 433, lat: 54.98329, long: -2.529864 },
      { sequence: 434, lat: 54.983558, long: -2.527355 },
      { sequence: 435, lat: 54.98329, long: -2.524886 },
      { sequence: 436, lat: 54.982883, long: -2.522054 },
      { sequence: 437, lat: 54.982643, long: -2.519491 },
      { sequence: 438, lat: 54.983905, long: -2.520101 },
      { sequence: 439, lat: 54.985285, long: -2.520338 },
      { sequence: 440, lat: 54.986112, long: -2.520473 },
      { sequence: 441, lat: 54.986734, long: -2.520569 },
      { sequence: 442, lat: 54.98714, long: -2.51984 }
    ]
  }
];
