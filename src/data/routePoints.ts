/**
 * Last modified: 22-07-2023
 * Modifying author: Stephen Lunt
 * File description: The data seed and types for coordinate points on the route.
 */

import { Coordinate } from "./types";

type BusRoute = {
  id: string;
  points: BusRoutePoint[];
};

export type BusRoutePoint = {
  sequence: number;
  coordinate: Coordinate;
};

export const routePoints: BusRoute[] = [
  {
    id: "AD122",
    points: [
      { sequence: 1, coordinate: new Coordinate(54.970273, -2.095754) },
      { sequence: 2, coordinate: new Coordinate(54.970288, -2.097155) },
      { sequence: 3, coordinate: new Coordinate(54.970822, -2.096298) },
      { sequence: 4, coordinate: new Coordinate(54.971137, -2.095) },
      { sequence: 5, coordinate: new Coordinate(54.971871, -2.094759) },
      { sequence: 6, coordinate: new Coordinate(54.972702, -2.094757) },
      { sequence: 7, coordinate: new Coordinate(54.973324, -2.095878) },
      { sequence: 8, coordinate: new Coordinate(54.973826, -2.096849) },
      { sequence: 9, coordinate: new Coordinate(54.974662, -2.095681) },
      { sequence: 10, coordinate: new Coordinate(54.975684, -2.094866) },
      { sequence: 11, coordinate: new Coordinate(54.976725, -2.094158) },
      { sequence: 12, coordinate: new Coordinate(54.977931, -2.093444) },
      { sequence: 13, coordinate: new Coordinate(54.979178, -2.093315) },
      { sequence: 14, coordinate: new Coordinate(54.980262, -2.092929) },
      { sequence: 15, coordinate: new Coordinate(54.981359, -2.09449) },
      { sequence: 16, coordinate: new Coordinate(54.981661, -2.096647) },
      { sequence: 17, coordinate: new Coordinate(54.98208, -2.098901) },
      { sequence: 18, coordinate: new Coordinate(54.982474, -2.100918) },
      { sequence: 19, coordinate: new Coordinate(54.982873, -2.103107) },
      { sequence: 20, coordinate: new Coordinate(54.983242, -2.10506) },
      { sequence: 21, coordinate: new Coordinate(54.983583, -2.106803) },
      { sequence: 22, coordinate: new Coordinate(54.983909, -2.108423) },
      { sequence: 23, coordinate: new Coordinate(54.984235, -2.110086) },
      { sequence: 24, coordinate: new Coordinate(54.98515, -2.111307) },
      { sequence: 25, coordinate: new Coordinate(54.986259, -2.112005) },
      { sequence: 26, coordinate: new Coordinate(54.987355, -2.112659) },
      { sequence: 27, coordinate: new Coordinate(54.988359, -2.11353) },
      { sequence: 28, coordinate: new Coordinate(54.989258, -2.114496) },
      { sequence: 29, coordinate: new Coordinate(54.990103, -2.115374) },
      { sequence: 30, coordinate: new Coordinate(54.99089, -2.116072) },
      { sequence: 31, coordinate: new Coordinate(54.992091, -2.116511) },
      { sequence: 32, coordinate: new Coordinate(54.993347, -2.117155) },
      { sequence: 33, coordinate: new Coordinate(54.99454, -2.118185) },
      { sequence: 34, coordinate: new Coordinate(54.995691, -2.119214) },
      { sequence: 35, coordinate: new Coordinate(54.996778, -2.120358) },
      { sequence: 36, coordinate: new Coordinate(54.997934, -2.121214) },
      { sequence: 37, coordinate: new Coordinate(54.99898, -2.122137) },
      { sequence: 38, coordinate: new Coordinate(55.000087, -2.123311) },
      { sequence: 39, coordinate: new Coordinate(55.001269, -2.12448) },
      { sequence: 40, coordinate: new Coordinate(55.002348, -2.12548) },
      { sequence: 41, coordinate: new Coordinate(55.00348, -2.126467) },
      { sequence: 42, coordinate: new Coordinate(55.004757, -2.1273) },
      { sequence: 43, coordinate: new Coordinate(55.006134, -2.127353) },
      { sequence: 44, coordinate: new Coordinate(55.007604, -2.127976) },
      { sequence: 45, coordinate: new Coordinate(55.008784, -2.129209) },
      { sequence: 46, coordinate: new Coordinate(55.010263, -2.129919) },
      { sequence: 47, coordinate: new Coordinate(55.011538, -2.130692) },
      { sequence: 48, coordinate: new Coordinate(55.012753, -2.131631) },
      { sequence: 49, coordinate: new Coordinate(55.014192, -2.132575) },
      { sequence: 50, coordinate: new Coordinate(55.015915, -2.132683) },
      { sequence: 51, coordinate: new Coordinate(55.01722, -2.131423) },
      { sequence: 52, coordinate: new Coordinate(55.018858, -2.130133) },
      { sequence: 53, coordinate: new Coordinate(55.02091, -2.130255) },
      { sequence: 54, coordinate: new Coordinate(55.022932, -2.128251) },
      { sequence: 55, coordinate: new Coordinate(55.02442, -2.126126) },
      { sequence: 56, coordinate: new Coordinate(55.025934, -2.124146) },
      { sequence: 57, coordinate: new Coordinate(55.027541, -2.125625) },
      { sequence: 58, coordinate: new Coordinate(55.029373, -2.127427) },
      { sequence: 59, coordinate: new Coordinate(55.029591, -2.13014) },
      { sequence: 60, coordinate: new Coordinate(55.029323, -2.13353) },
      { sequence: 61, coordinate: new Coordinate(55.02904, -2.13677) },
      { sequence: 62, coordinate: new Coordinate(55.028794, -2.139667) },
      { sequence: 63, coordinate: new Coordinate(55.028536, -2.142542) },
      { sequence: 64, coordinate: new Coordinate(55.028253, -2.145847) },
      { sequence: 65, coordinate: new Coordinate(55.028316, -2.1486) },
      { sequence: 66, coordinate: new Coordinate(55.028907, -2.151145) },
      { sequence: 67, coordinate: new Coordinate(55.029288, -2.153934) },
      { sequence: 68, coordinate: new Coordinate(55.029584, -2.1571) },
      { sequence: 69, coordinate: new Coordinate(55.030309, -2.159804) },
      { sequence: 70, coordinate: new Coordinate(55.030924, -2.162443) },
      { sequence: 71, coordinate: new Coordinate(55.031428, -2.164641) },
      { sequence: 72, coordinate: new Coordinate(55.031999, -2.167024) },
      { sequence: 73, coordinate: new Coordinate(55.032577, -2.16947) },
      { sequence: 74, coordinate: new Coordinate(55.03318, -2.172045) },
      { sequence: 75, coordinate: new Coordinate(55.033782, -2.174942) },
      { sequence: 76, coordinate: new Coordinate(55.034619, -2.178211) },
      { sequence: 77, coordinate: new Coordinate(55.035394, -2.181645) },
      { sequence: 78, coordinate: new Coordinate(55.036066, -2.184521) },
      { sequence: 79, coordinate: new Coordinate(55.036656, -2.187203) },
      { sequence: 80, coordinate: new Coordinate(55.037284, -2.189993) },
      { sequence: 81, coordinate: new Coordinate(55.037909, -2.192566) },
      { sequence: 82, coordinate: new Coordinate(55.038213, -2.195828) },
      { sequence: 83, coordinate: new Coordinate(55.037905, -2.198788) },
      { sequence: 84, coordinate: new Coordinate(55.037613, -2.201577) },
      { sequence: 85, coordinate: new Coordinate(55.037386, -2.204173) },
      { sequence: 86, coordinate: new Coordinate(55.037152, -2.206543) },
      { sequence: 87, coordinate: new Coordinate(55.036943, -2.208668) },
      { sequence: 88, coordinate: new Coordinate(55.036743, -2.210502) },
      { sequence: 89, coordinate: new Coordinate(55.036571, -2.212401) },
      { sequence: 90, coordinate: new Coordinate(55.036418, -2.214086) },
      { sequence: 91, coordinate: new Coordinate(55.036233, -2.215856) },
      { sequence: 92, coordinate: new Coordinate(55.036055, -2.217637) },
      { sequence: 93, coordinate: new Coordinate(55.035902, -2.219101) },
      { sequence: 94, coordinate: new Coordinate(55.035705, -2.220914) },
      { sequence: 95, coordinate: new Coordinate(55.035521, -2.222778) },
      { sequence: 96, coordinate: new Coordinate(55.035385, -2.224534) },
      { sequence: 97, coordinate: new Coordinate(55.035226, -2.226099) },
      { sequence: 98, coordinate: new Coordinate(55.035097, -2.227666) },
      { sequence: 99, coordinate: new Coordinate(55.034937, -2.229307) },
      { sequence: 100, coordinate: new Coordinate(55.03474, -2.23111) },
      { sequence: 101, coordinate: new Coordinate(55.034556, -2.232945) },
      { sequence: 102, coordinate: new Coordinate(55.03439, -2.234705) },
      { sequence: 103, coordinate: new Coordinate(55.034249, -2.23636) },
      { sequence: 104, coordinate: new Coordinate(55.034065, -2.237969) },
      { sequence: 105, coordinate: new Coordinate(55.033831, -2.239675) },
      { sequence: 106, coordinate: new Coordinate(55.033633, -2.241303) },
      { sequence: 107, coordinate: new Coordinate(55.03342, -2.242924) },
      { sequence: 108, coordinate: new Coordinate(55.03323, -2.24463) },
      { sequence: 109, coordinate: new Coordinate(55.033005, -2.246378) },
      { sequence: 110, coordinate: new Coordinate(55.032796, -2.24818) },
      { sequence: 111, coordinate: new Coordinate(55.032599, -2.249865) },
      { sequence: 112, coordinate: new Coordinate(55.032421, -2.251437) },
      { sequence: 113, coordinate: new Coordinate(55.032217, -2.252909) },
      { sequence: 114, coordinate: new Coordinate(55.032032, -2.254458) },
      { sequence: 115, coordinate: new Coordinate(55.031842, -2.256207) },
      { sequence: 116, coordinate: new Coordinate(55.031651, -2.257729) },
      { sequence: 117, coordinate: new Coordinate(55.031497, -2.259166) },
      { sequence: 118, coordinate: new Coordinate(55.031313, -2.260722) },
      { sequence: 119, coordinate: new Coordinate(55.031042, -2.262194) },
      { sequence: 120, coordinate: new Coordinate(55.030767, -2.263655) },
      { sequence: 121, coordinate: new Coordinate(55.03057, -2.26535) },
      { sequence: 122, coordinate: new Coordinate(55.030398, -2.267013) },
      { sequence: 123, coordinate: new Coordinate(55.030202, -2.268628) },
      { sequence: 124, coordinate: new Coordinate(55.030015, -2.270253) },
      { sequence: 125, coordinate: new Coordinate(55.029849, -2.271825) },
      { sequence: 126, coordinate: new Coordinate(55.029655, -2.273391) },
      { sequence: 127, coordinate: new Coordinate(55.029489, -2.274883) },
      { sequence: 128, coordinate: new Coordinate(55.029348, -2.276388) },
      { sequence: 129, coordinate: new Coordinate(55.029132, -2.277986) },
      { sequence: 130, coordinate: new Coordinate(55.028745, -2.279435) },
      { sequence: 131, coordinate: new Coordinate(55.028278, -2.280733) },
      { sequence: 132, coordinate: new Coordinate(55.027791, -2.282068) },
      { sequence: 133, coordinate: new Coordinate(55.027348, -2.283259) },
      { sequence: 134, coordinate: new Coordinate(55.026832, -2.284675) },
      { sequence: 135, coordinate: new Coordinate(55.026416, -2.285773) },
      { sequence: 136, coordinate: new Coordinate(55.025992, -2.286921) },
      { sequence: 137, coordinate: new Coordinate(55.025572, -2.288046) },
      { sequence: 138, coordinate: new Coordinate(55.02508, -2.289376) },
      { sequence: 139, coordinate: new Coordinate(55.024631, -2.290578) },
      { sequence: 140, coordinate: new Coordinate(55.02425, -2.29164) },
      { sequence: 141, coordinate: new Coordinate(55.023905, -2.292616) },
      { sequence: 142, coordinate: new Coordinate(55.023485, -2.293727) },
      { sequence: 143, coordinate: new Coordinate(55.023092, -2.294735) },
      { sequence: 144, coordinate: new Coordinate(55.022758, -2.295549) },
      { sequence: 145, coordinate: new Coordinate(55.022413, -2.296386) },
      { sequence: 146, coordinate: new Coordinate(55.022044, -2.297298) },
      { sequence: 147, coordinate: new Coordinate(55.021645, -2.298328) },
      { sequence: 148, coordinate: new Coordinate(55.021221, -2.299281) },
      { sequence: 149, coordinate: new Coordinate(55.020821, -2.300236) },
      { sequence: 150, coordinate: new Coordinate(55.020421, -2.301223) },
      { sequence: 151, coordinate: new Coordinate(55.019984, -2.3022) },
      { sequence: 152, coordinate: new Coordinate(55.019591, -2.303172) },
      { sequence: 153, coordinate: new Coordinate(55.019172, -2.304181) },
      { sequence: 154, coordinate: new Coordinate(55.018803, -2.305017) },
      { sequence: 155, coordinate: new Coordinate(55.018427, -2.305943) },
      { sequence: 156, coordinate: new Coordinate(55.018016, -2.306788) },
      { sequence: 157, coordinate: new Coordinate(55.01758, -2.307689) },
      { sequence: 158, coordinate: new Coordinate(55.017161, -2.308462) },
      { sequence: 159, coordinate: new Coordinate(55.016756, -2.309252) },
      { sequence: 160, coordinate: new Coordinate(55.016325, -2.310078) },
      { sequence: 161, coordinate: new Coordinate(55.015899, -2.310879) },
      { sequence: 162, coordinate: new Coordinate(55.015481, -2.311727) },
      { sequence: 163, coordinate: new Coordinate(55.01505, -2.312521) },
      { sequence: 164, coordinate: new Coordinate(55.014595, -2.313443) },
      { sequence: 165, coordinate: new Coordinate(55.014127, -2.314366) },
      { sequence: 166, coordinate: new Coordinate(55.01371, -2.315106) },
      { sequence: 167, coordinate: new Coordinate(55.013329, -2.315857) },
      { sequence: 168, coordinate: new Coordinate(55.012861, -2.31679) },
      { sequence: 169, coordinate: new Coordinate(55.012437, -2.317681) },
      { sequence: 170, coordinate: new Coordinate(55.012018, -2.318463) },
      { sequence: 171, coordinate: new Coordinate(55.011593, -2.319322) },
      { sequence: 172, coordinate: new Coordinate(55.011144, -2.32018) },
      { sequence: 173, coordinate: new Coordinate(55.010806, -2.320931) },
      { sequence: 174, coordinate: new Coordinate(55.010394, -2.321703) },
      { sequence: 175, coordinate: new Coordinate(55.009969, -2.322594) },
      { sequence: 176, coordinate: new Coordinate(55.009588, -2.323393) },
      { sequence: 177, coordinate: new Coordinate(55.009243, -2.324514) },
      { sequence: 178, coordinate: new Coordinate(55.008954, -2.325748) },
      { sequence: 179, coordinate: new Coordinate(55.008677, -2.326889) },
      { sequence: 180, coordinate: new Coordinate(55.008425, -2.32793) },
      { sequence: 181, coordinate: new Coordinate(55.008179, -2.328949) },
      { sequence: 182, coordinate: new Coordinate(55.007945, -2.329915) },
      { sequence: 183, coordinate: new Coordinate(55.007675, -2.330912) },
      { sequence: 184, coordinate: new Coordinate(55.007422, -2.331953) },
      { sequence: 185, coordinate: new Coordinate(55.007191, -2.332899) },
      { sequence: 186, coordinate: new Coordinate(55.006939, -2.333939) },
      { sequence: 187, coordinate: new Coordinate(55.006673, -2.334985) },
      { sequence: 188, coordinate: new Coordinate(55.006434, -2.335999) },
      { sequence: 189, coordinate: new Coordinate(55.006198, -2.336927) },
      { sequence: 190, coordinate: new Coordinate(55.005998, -2.337826) },
      { sequence: 191, coordinate: new Coordinate(55.005826, -2.33877) },
      { sequence: 192, coordinate: new Coordinate(55.005641, -2.339757) },
      { sequence: 193, coordinate: new Coordinate(55.005463, -2.34069) },
      { sequence: 194, coordinate: new Coordinate(55.005266, -2.341828) },
      { sequence: 195, coordinate: new Coordinate(55.00505, -2.3429) },
      { sequence: 196, coordinate: new Coordinate(55.004804, -2.343984) },
      { sequence: 197, coordinate: new Coordinate(55.004595, -2.344779) },
      { sequence: 198, coordinate: new Coordinate(55.004404, -2.345605) },
      { sequence: 199, coordinate: new Coordinate(55.004183, -2.346582) },
      { sequence: 200, coordinate: new Coordinate(55.00398, -2.347408) },
      { sequence: 201, coordinate: new Coordinate(55.003765, -2.348319) },
      { sequence: 202, coordinate: new Coordinate(55.003506, -2.34936) },
      { sequence: 203, coordinate: new Coordinate(55.003315, -2.350218) },
      { sequence: 204, coordinate: new Coordinate(55.003088, -2.351216) },
      { sequence: 205, coordinate: new Coordinate(55.002844, -2.352318) },
      { sequence: 206, coordinate: new Coordinate(55.00258, -2.353445) },
      { sequence: 207, coordinate: new Coordinate(55.002272, -2.354657) },
      { sequence: 208, coordinate: new Coordinate(55.001958, -2.355987) },
      { sequence: 209, coordinate: new Coordinate(55.001626, -2.357372) },
      { sequence: 210, coordinate: new Coordinate(55.001303, -2.358709) },
      { sequence: 211, coordinate: new Coordinate(55.000971, -2.360093) },
      { sequence: 212, coordinate: new Coordinate(55.000663, -2.361338) },
      { sequence: 213, coordinate: new Coordinate(55.000331, -2.3627) },
      { sequence: 214, coordinate: new Coordinate(55.000036, -2.364135) },
      { sequence: 215, coordinate: new Coordinate(54.999821, -2.365476) },
      { sequence: 216, coordinate: new Coordinate(54.999624, -2.366839) },
      { sequence: 217, coordinate: new Coordinate(54.999402, -2.368266) },
      { sequence: 218, coordinate: new Coordinate(54.99923, -2.3695) },
      { sequence: 219, coordinate: new Coordinate(54.999008, -2.370905) },
      { sequence: 220, coordinate: new Coordinate(54.998811, -2.372193) },
      { sequence: 221, coordinate: new Coordinate(54.998645, -2.373405) },
      { sequence: 222, coordinate: new Coordinate(54.998449, -2.374625) },
      { sequence: 223, coordinate: new Coordinate(54.998265, -2.375944) },
      { sequence: 224, coordinate: new Coordinate(54.998062, -2.377275) },
      { sequence: 225, coordinate: new Coordinate(54.997902, -2.378433) },
      { sequence: 226, coordinate: new Coordinate(54.99768, -2.379785) },
      { sequence: 227, coordinate: new Coordinate(54.997403, -2.38151) },
      { sequence: 228, coordinate: new Coordinate(54.997199, -2.382862) },
      { sequence: 229, coordinate: new Coordinate(54.99699, -2.384353) },
      { sequence: 230, coordinate: new Coordinate(54.996775, -2.385791) },
      { sequence: 231, coordinate: new Coordinate(54.996564, -2.386913) },
      { sequence: 232, coordinate: new Coordinate(54.996234, -2.387472) },
      { sequence: 233, coordinate: new Coordinate(54.99595, -2.387576) },
      { sequence: 234, coordinate: new Coordinate(54.995674, -2.3876) },
      { sequence: 235, coordinate: new Coordinate(54.995424, -2.387597) },
      { sequence: 236, coordinate: new Coordinate(54.995225, -2.387592) },
      { sequence: 237, coordinate: new Coordinate(54.995028, -2.387587) },
      { sequence: 238, coordinate: new Coordinate(54.994842, -2.387576) },
      { sequence: 239, coordinate: new Coordinate(54.994663, -2.387549) },
      { sequence: 240, coordinate: new Coordinate(54.994483, -2.387476) },
      { sequence: 241, coordinate: new Coordinate(54.994306, -2.387347) },
      { sequence: 242, coordinate: new Coordinate(54.994132, -2.387243) },
      { sequence: 243, coordinate: new Coordinate(54.993901, -2.387162) },
      { sequence: 244, coordinate: new Coordinate(54.993636, -2.386974) },
      { sequence: 245, coordinate: new Coordinate(54.993499, -2.386626) },
      { sequence: 246, coordinate: new Coordinate(54.993417, -2.386278) },
      { sequence: 247, coordinate: new Coordinate(54.993311, -2.385977) },
      { sequence: 248, coordinate: new Coordinate(54.993175, -2.385758) },
      { sequence: 249, coordinate: new Coordinate(54.992962, -2.385669) },
      { sequence: 250, coordinate: new Coordinate(54.992652, -2.385695) },
      { sequence: 251, coordinate: new Coordinate(54.992311, -2.38569) },
      { sequence: 252, coordinate: new Coordinate(54.991976, -2.385666) },
      { sequence: 253, coordinate: new Coordinate(54.991663, -2.385618) },
      { sequence: 254, coordinate: new Coordinate(54.991341, -2.385569) },
      { sequence: 255, coordinate: new Coordinate(54.991058, -2.385528) },
      { sequence: 256, coordinate: new Coordinate(54.990765, -2.385372) },
      { sequence: 257, coordinate: new Coordinate(54.99047, -2.385056) },
      { sequence: 258, coordinate: new Coordinate(54.990196, -2.384702) },
      { sequence: 259, coordinate: new Coordinate(54.989987, -2.384015) },
      { sequence: 260, coordinate: new Coordinate(54.990062, -2.383106) },
      { sequence: 261, coordinate: new Coordinate(54.990129, -2.382377) },
      { sequence: 262, coordinate: new Coordinate(54.990213, -2.381449) },
      { sequence: 263, coordinate: new Coordinate(54.990317, -2.380402) },
      { sequence: 264, coordinate: new Coordinate(54.990409, -2.37942) },
      { sequence: 265, coordinate: new Coordinate(54.990499, -2.378429) },
      { sequence: 266, coordinate: new Coordinate(54.990591, -2.377437) },
      { sequence: 267, coordinate: new Coordinate(54.990681, -2.376498) },
      { sequence: 268, coordinate: new Coordinate(54.99077, -2.375581) },
      { sequence: 269, coordinate: new Coordinate(54.990859, -2.374685) },
      { sequence: 270, coordinate: new Coordinate(54.990939, -2.373832) },
      { sequence: 271, coordinate: new Coordinate(54.991016, -2.372981) },
      { sequence: 272, coordinate: new Coordinate(54.991084, -2.371978) },
      { sequence: 273, coordinate: new Coordinate(54.991172, -2.370813) },
      { sequence: 274, coordinate: new Coordinate(54.991267, -2.369719) },
      { sequence: 275, coordinate: new Coordinate(54.991369, -2.368705) },
      { sequence: 276, coordinate: new Coordinate(54.991438, -2.367645) },
      { sequence: 277, coordinate: new Coordinate(54.991536, -2.366562) },
      { sequence: 278, coordinate: new Coordinate(54.99161, -2.365669) },
      { sequence: 279, coordinate: new Coordinate(54.991339, -2.365138) },
      { sequence: 280, coordinate: new Coordinate(54.991342, -2.36582) },
      { sequence: 281, coordinate: new Coordinate(54.991352, -2.366673) },
      { sequence: 282, coordinate: new Coordinate(54.991278, -2.367735) },
      { sequence: 283, coordinate: new Coordinate(54.991196, -2.368687) },
      { sequence: 284, coordinate: new Coordinate(54.991122, -2.369728) },
      { sequence: 285, coordinate: new Coordinate(54.991035, -2.370796) },
      { sequence: 286, coordinate: new Coordinate(54.990939, -2.371944) },
      { sequence: 287, coordinate: new Coordinate(54.990844, -2.372958) },
      { sequence: 288, coordinate: new Coordinate(54.990788, -2.373811) },
      { sequence: 289, coordinate: new Coordinate(54.990708, -2.374669) },
      { sequence: 290, coordinate: new Coordinate(54.990625, -2.375565) },
      { sequence: 291, coordinate: new Coordinate(54.990539, -2.376477) },
      { sequence: 292, coordinate: new Coordinate(54.990446, -2.377412) },
      { sequence: 293, coordinate: new Coordinate(54.990351, -2.378415) },
      { sequence: 294, coordinate: new Coordinate(54.990271, -2.379402) },
      { sequence: 295, coordinate: new Coordinate(54.99018, -2.380369) },
      { sequence: 296, coordinate: new Coordinate(54.990088, -2.381399) },
      { sequence: 297, coordinate: new Coordinate(54.989996, -2.382337) },
      { sequence: 298, coordinate: new Coordinate(54.989943, -2.383083) },
      { sequence: 299, coordinate: new Coordinate(54.98987, -2.384016) },
      { sequence: 300, coordinate: new Coordinate(54.990107, -2.384895) },
      { sequence: 301, coordinate: new Coordinate(54.990544, -2.385415) },
      { sequence: 302, coordinate: new Coordinate(54.991057, -2.385732) },
      { sequence: 303, coordinate: new Coordinate(54.991651, -2.385807) },
      { sequence: 304, coordinate: new Coordinate(54.992224, -2.385871) },
      { sequence: 305, coordinate: new Coordinate(54.992718, -2.385876) },
      { sequence: 306, coordinate: new Coordinate(54.993167, -2.385998) },
      { sequence: 307, coordinate: new Coordinate(54.993376, -2.386523) },
      { sequence: 308, coordinate: new Coordinate(54.993597, -2.387114) },
      { sequence: 309, coordinate: new Coordinate(54.993897, -2.387312) },
      { sequence: 310, coordinate: new Coordinate(54.994165, -2.387395) },
      { sequence: 311, coordinate: new Coordinate(54.994389, -2.387559) },
      { sequence: 312, coordinate: new Coordinate(54.99466, -2.387672) },
      { sequence: 313, coordinate: new Coordinate(54.994928, -2.387715) },
      { sequence: 314, coordinate: new Coordinate(54.995214, -2.387726) },
      { sequence: 315, coordinate: new Coordinate(54.99545, -2.387725) },
      { sequence: 316, coordinate: new Coordinate(54.995695, -2.387733) },
      { sequence: 317, coordinate: new Coordinate(54.996001, -2.387703) },
      { sequence: 318, coordinate: new Coordinate(54.996283, -2.387596) },
      { sequence: 319, coordinate: new Coordinate(54.996395, -2.387972) },
      { sequence: 320, coordinate: new Coordinate(54.99632, -2.388632) },
      { sequence: 321, coordinate: new Coordinate(54.996178, -2.389606) },
      { sequence: 322, coordinate: new Coordinate(54.996012, -2.390915) },
      { sequence: 323, coordinate: new Coordinate(54.995846, -2.392041) },
      { sequence: 324, coordinate: new Coordinate(54.995638, -2.393341) },
      { sequence: 325, coordinate: new Coordinate(54.995409, -2.394758) },
      { sequence: 326, coordinate: new Coordinate(54.995163, -2.396367) },
      { sequence: 327, coordinate: new Coordinate(54.994931, -2.397702) },
      { sequence: 328, coordinate: new Coordinate(54.994679, -2.399268) },
      { sequence: 329, coordinate: new Coordinate(54.994411, -2.400807) },
      { sequence: 330, coordinate: new Coordinate(54.994178, -2.402223) },
      { sequence: 331, coordinate: new Coordinate(54.993919, -2.403768) },
      { sequence: 332, coordinate: new Coordinate(54.993731, -2.404995) },
      { sequence: 333, coordinate: new Coordinate(54.993503, -2.406336) },
      { sequence: 334, coordinate: new Coordinate(54.993294, -2.407624) },
      { sequence: 335, coordinate: new Coordinate(54.993078, -2.408938) },
      { sequence: 336, coordinate: new Coordinate(54.992863, -2.410311) },
      { sequence: 337, coordinate: new Coordinate(54.992629, -2.411802) },
      { sequence: 338, coordinate: new Coordinate(54.992381, -2.413305) },
      { sequence: 339, coordinate: new Coordinate(54.992129, -2.414785) },
      { sequence: 340, coordinate: new Coordinate(54.991871, -2.416362) },
      { sequence: 341, coordinate: new Coordinate(54.991655, -2.417789) },
      { sequence: 342, coordinate: new Coordinate(54.991397, -2.419323) },
      { sequence: 343, coordinate: new Coordinate(54.991175, -2.420754) },
      { sequence: 344, coordinate: new Coordinate(54.990948, -2.422031) },
      { sequence: 345, coordinate: new Coordinate(54.990726, -2.423447) },
      { sequence: 346, coordinate: new Coordinate(54.99054, -2.424817) },
      { sequence: 347, coordinate: new Coordinate(54.990367, -2.426416) },
      { sequence: 348, coordinate: new Coordinate(54.990207, -2.427928) },
      { sequence: 349, coordinate: new Coordinate(54.990061, -2.429463) },
      { sequence: 350, coordinate: new Coordinate(54.989838, -2.431179) },
      { sequence: 351, coordinate: new Coordinate(54.98968, -2.432692) },
      { sequence: 352, coordinate: new Coordinate(54.98952, -2.434323) },
      { sequence: 353, coordinate: new Coordinate(54.989329, -2.436072) },
      { sequence: 354, coordinate: new Coordinate(54.989145, -2.437552) },
      { sequence: 355, coordinate: new Coordinate(54.988898, -2.439451) },
      { sequence: 356, coordinate: new Coordinate(54.988665, -2.441065) },
      { sequence: 357, coordinate: new Coordinate(54.988455, -2.44261) },
      { sequence: 358, coordinate: new Coordinate(54.988234, -2.444488) },
      { sequence: 359, coordinate: new Coordinate(54.987587, -2.445893) },
      { sequence: 360, coordinate: new Coordinate(54.986851, -2.446329) },
      { sequence: 361, coordinate: new Coordinate(54.98629, -2.446973) },
      { sequence: 362, coordinate: new Coordinate(54.985724, -2.447799) },
      { sequence: 363, coordinate: new Coordinate(54.985102, -2.448228) },
      { sequence: 364, coordinate: new Coordinate(54.984548, -2.448788) },
      { sequence: 365, coordinate: new Coordinate(54.984074, -2.449936) },
      { sequence: 366, coordinate: new Coordinate(54.983274, -2.449603) },
      { sequence: 367, coordinate: new Coordinate(54.982601, -2.449002) },
      { sequence: 368, coordinate: new Coordinate(54.9818, -2.448895) },
      { sequence: 369, coordinate: new Coordinate(54.980815, -2.448627) },
      { sequence: 370, coordinate: new Coordinate(54.979923, -2.448648) },
      { sequence: 371, coordinate: new Coordinate(54.979109, -2.448627) },
      { sequence: 372, coordinate: new Coordinate(54.978561, -2.449034) },
      { sequence: 373, coordinate: new Coordinate(54.978019, -2.449667) },
      { sequence: 374, coordinate: new Coordinate(54.977448, -2.450458) },
      { sequence: 375, coordinate: new Coordinate(54.976721, -2.450708) },
      { sequence: 376, coordinate: new Coordinate(54.976064, -2.450893) },
      { sequence: 377, coordinate: new Coordinate(54.975381, -2.450508) },
      { sequence: 378, coordinate: new Coordinate(54.97479, -2.450487) },
      { sequence: 379, coordinate: new Coordinate(54.974082, -2.450229) },
      { sequence: 380, coordinate: new Coordinate(54.973523, -2.449951) },
      { sequence: 381, coordinate: new Coordinate(54.973005, -2.449467) },
      { sequence: 382, coordinate: new Coordinate(54.972409, -2.449304) },
      { sequence: 383, coordinate: new Coordinate(54.971861, -2.449476) },
      { sequence: 384, coordinate: new Coordinate(54.971627, -2.450634) },
      { sequence: 385, coordinate: new Coordinate(54.971664, -2.452018) },
      { sequence: 386, coordinate: new Coordinate(54.97175, -2.453274) },
      { sequence: 387, coordinate: new Coordinate(54.971651, -2.45454) },
      { sequence: 388, coordinate: new Coordinate(54.97146, -2.455806) },
      { sequence: 389, coordinate: new Coordinate(54.971202, -2.456793) },
      { sequence: 390, coordinate: new Coordinate(54.97079, -2.457539) },
      { sequence: 391, coordinate: new Coordinate(54.970525, -2.458623) },
      { sequence: 392, coordinate: new Coordinate(54.97035, -2.460016) },
      { sequence: 393, coordinate: new Coordinate(54.970073, -2.460832) },
      { sequence: 394, coordinate: new Coordinate(54.969778, -2.461604) },
      { sequence: 395, coordinate: new Coordinate(54.969445, -2.462473) },
      { sequence: 396, coordinate: new Coordinate(54.969005, -2.463055) },
      { sequence: 397, coordinate: new Coordinate(54.968512, -2.46318) },
      { sequence: 398, coordinate: new Coordinate(54.968278, -2.463888) },
      { sequence: 399, coordinate: new Coordinate(54.968697, -2.463824) },
      { sequence: 400, coordinate: new Coordinate(54.968401, -2.46495) },
      { sequence: 401, coordinate: new Coordinate(54.968092, -2.465898) },
      { sequence: 402, coordinate: new Coordinate(54.967507, -2.46696) },
      { sequence: 403, coordinate: new Coordinate(54.966879, -2.468097) },
      { sequence: 404, coordinate: new Coordinate(54.9663, -2.469771) },
      { sequence: 405, coordinate: new Coordinate(54.965873, -2.471591) },
      { sequence: 406, coordinate: new Coordinate(54.965698, -2.474054) },
      { sequence: 407, coordinate: new Coordinate(54.965735, -2.476693) },
      { sequence: 408, coordinate: new Coordinate(54.965292, -2.478688) },
      { sequence: 409, coordinate: new Coordinate(54.966216, -2.480835) },
      { sequence: 410, coordinate: new Coordinate(54.96661, -2.483753) },
      { sequence: 411, coordinate: new Coordinate(54.966462, -2.4865) },
      { sequence: 412, coordinate: new Coordinate(54.966339, -2.488882) },
      { sequence: 413, coordinate: new Coordinate(54.966167, -2.491628) },
      { sequence: 414, coordinate: new Coordinate(54.96608, -2.49431) },
      { sequence: 415, coordinate: new Coordinate(54.966167, -2.497443) },
      { sequence: 416, coordinate: new Coordinate(54.966499, -2.500319) },
      { sequence: 417, coordinate: new Coordinate(54.966943, -2.502915) },
      { sequence: 418, coordinate: new Coordinate(54.967361, -2.50549) },
      { sequence: 419, coordinate: new Coordinate(54.968241, -2.507876) },
      { sequence: 420, coordinate: new Coordinate(54.969197, -2.510275) },
      { sequence: 421, coordinate: new Coordinate(54.970198, -2.512714) },
      { sequence: 422, coordinate: new Coordinate(54.971171, -2.514989) },
      { sequence: 423, coordinate: new Coordinate(54.972243, -2.517563) },
      { sequence: 424, coordinate: new Coordinate(54.973314, -2.520095) },
      { sequence: 425, coordinate: new Coordinate(54.97437, -2.522728) },
      { sequence: 426, coordinate: new Coordinate(54.975441, -2.525324) },
      { sequence: 427, coordinate: new Coordinate(54.9765, -2.527856) },
      { sequence: 428, coordinate: new Coordinate(54.97751, -2.530281) },
      { sequence: 429, coordinate: new Coordinate(54.978729, -2.533006) },
      { sequence: 430, coordinate: new Coordinate(54.979829, -2.534836) },
      { sequence: 431, coordinate: new Coordinate(54.981491, -2.534042) },
      { sequence: 432, coordinate: new Coordinate(54.98244, -2.531667) },
      { sequence: 433, coordinate: new Coordinate(54.98329, -2.529864) },
      { sequence: 434, coordinate: new Coordinate(54.983558, -2.527355) },
      { sequence: 435, coordinate: new Coordinate(54.98329, -2.524886) },
      { sequence: 436, coordinate: new Coordinate(54.982883, -2.522054) },
      { sequence: 437, coordinate: new Coordinate(54.982643, -2.519491) },
      { sequence: 438, coordinate: new Coordinate(54.983905, -2.520101) },
      { sequence: 439, coordinate: new Coordinate(54.985285, -2.520338) },
      { sequence: 440, coordinate: new Coordinate(54.986112, -2.520473) },
      { sequence: 441, coordinate: new Coordinate(54.986734, -2.520569) },
      { sequence: 442, coordinate: new Coordinate(54.98714, -2.51984) }
    ]
  }
];
