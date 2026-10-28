/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 390.0, "minX": 0.0, "maxY": 53805.0, "series": [{"data": [[0.0, 390.0], [0.1, 390.0], [0.2, 390.0], [0.3, 390.0], [0.4, 390.0], [0.5, 409.0], [0.6, 409.0], [0.7, 409.0], [0.8, 409.0], [0.9, 409.0], [1.0, 664.0], [1.1, 664.0], [1.2, 664.0], [1.3, 664.0], [1.4, 664.0], [1.5, 684.0], [1.6, 684.0], [1.7, 684.0], [1.8, 684.0], [1.9, 684.0], [2.0, 703.0], [2.1, 703.0], [2.2, 703.0], [2.3, 703.0], [2.4, 703.0], [2.5, 705.0], [2.6, 705.0], [2.7, 705.0], [2.8, 705.0], [2.9, 705.0], [3.0, 705.0], [3.1, 705.0], [3.2, 705.0], [3.3, 705.0], [3.4, 705.0], [3.5, 714.0], [3.6, 714.0], [3.7, 714.0], [3.8, 714.0], [3.9, 714.0], [4.0, 721.0], [4.1, 721.0], [4.2, 721.0], [4.3, 721.0], [4.4, 721.0], [4.5, 730.0], [4.6, 730.0], [4.7, 730.0], [4.8, 730.0], [4.9, 730.0], [5.0, 745.0], [5.1, 745.0], [5.2, 745.0], [5.3, 745.0], [5.4, 745.0], [5.5, 750.0], [5.6, 750.0], [5.7, 750.0], [5.8, 750.0], [5.9, 750.0], [6.0, 752.0], [6.1, 752.0], [6.2, 752.0], [6.3, 752.0], [6.4, 752.0], [6.5, 779.0], [6.6, 779.0], [6.7, 779.0], [6.8, 779.0], [6.9, 779.0], [7.0, 903.0], [7.1, 903.0], [7.2, 903.0], [7.3, 903.0], [7.4, 903.0], [7.5, 938.0], [7.6, 938.0], [7.7, 938.0], [7.8, 938.0], [7.9, 938.0], [8.0, 1003.0], [8.1, 1003.0], [8.2, 1003.0], [8.3, 1003.0], [8.4, 1003.0], [8.5, 1070.0], [8.6, 1070.0], [8.7, 1070.0], [8.8, 1070.0], [8.9, 1070.0], [9.0, 1083.0], [9.1, 1083.0], [9.2, 1083.0], [9.3, 1083.0], [9.4, 1083.0], [9.5, 1083.0], [9.6, 1083.0], [9.7, 1083.0], [9.8, 1083.0], [9.9, 1083.0], [10.0, 1083.0], [10.1, 1083.0], [10.2, 1083.0], [10.3, 1083.0], [10.4, 1083.0], [10.5, 1121.0], [10.6, 1121.0], [10.7, 1121.0], [10.8, 1121.0], [10.9, 1121.0], [11.0, 1123.0], [11.1, 1123.0], [11.2, 1123.0], [11.3, 1123.0], [11.4, 1123.0], [11.5, 1131.0], [11.6, 1131.0], [11.7, 1131.0], [11.8, 1131.0], [11.9, 1131.0], [12.0, 1185.0], [12.1, 1185.0], [12.2, 1185.0], [12.3, 1185.0], [12.4, 1185.0], [12.5, 1261.0], [12.6, 1261.0], [12.7, 1261.0], [12.8, 1261.0], [12.9, 1261.0], [13.0, 1304.0], [13.1, 1304.0], [13.2, 1304.0], [13.3, 1304.0], [13.4, 1304.0], [13.5, 1373.0], [13.6, 1373.0], [13.7, 1373.0], [13.8, 1373.0], [13.9, 1373.0], [14.0, 1392.0], [14.1, 1392.0], [14.2, 1392.0], [14.3, 1392.0], [14.4, 1392.0], [14.5, 1398.0], [14.6, 1398.0], [14.7, 1398.0], [14.8, 1398.0], [14.9, 1398.0], [15.0, 1423.0], [15.1, 1423.0], [15.2, 1423.0], [15.3, 1423.0], [15.4, 1423.0], [15.5, 1478.0], [15.6, 1478.0], [15.7, 1478.0], [15.8, 1478.0], [15.9, 1478.0], [16.0, 1558.0], [16.1, 1558.0], [16.2, 1558.0], [16.3, 1558.0], [16.4, 1558.0], [16.5, 1571.0], [16.6, 1571.0], [16.7, 1571.0], [16.8, 1571.0], [16.9, 1571.0], [17.0, 1711.0], [17.1, 1711.0], [17.2, 1711.0], [17.3, 1711.0], [17.4, 1711.0], [17.5, 1728.0], [17.6, 1728.0], [17.7, 1728.0], [17.8, 1728.0], [17.9, 1728.0], [18.0, 1731.0], [18.1, 1731.0], [18.2, 1731.0], [18.3, 1731.0], [18.4, 1731.0], [18.5, 1756.0], [18.6, 1756.0], [18.7, 1756.0], [18.8, 1756.0], [18.9, 1756.0], [19.0, 1836.0], [19.1, 1836.0], [19.2, 1836.0], [19.3, 1836.0], [19.4, 1836.0], [19.5, 1910.0], [19.6, 1910.0], [19.7, 1910.0], [19.8, 1910.0], [19.9, 1910.0], [20.0, 1926.0], [20.1, 1926.0], [20.2, 1926.0], [20.3, 1926.0], [20.4, 1926.0], [20.5, 2097.0], [20.6, 2097.0], [20.7, 2097.0], [20.8, 2097.0], [20.9, 2097.0], [21.0, 2143.0], [21.1, 2143.0], [21.2, 2143.0], [21.3, 2143.0], [21.4, 2143.0], [21.5, 2156.0], [21.6, 2156.0], [21.7, 2156.0], [21.8, 2156.0], [21.9, 2156.0], [22.0, 2157.0], [22.1, 2157.0], [22.2, 2157.0], [22.3, 2157.0], [22.4, 2157.0], [22.5, 2185.0], [22.6, 2185.0], [22.7, 2185.0], [22.8, 2185.0], [22.9, 2185.0], [23.0, 2236.0], [23.1, 2236.0], [23.2, 2236.0], [23.3, 2236.0], [23.4, 2236.0], [23.5, 2393.0], [23.6, 2393.0], [23.7, 2393.0], [23.8, 2393.0], [23.9, 2393.0], [24.0, 2413.0], [24.1, 2413.0], [24.2, 2413.0], [24.3, 2413.0], [24.4, 2413.0], [24.5, 2441.0], [24.6, 2441.0], [24.7, 2441.0], [24.8, 2441.0], [24.9, 2441.0], [25.0, 2472.0], [25.1, 2472.0], [25.2, 2472.0], [25.3, 2472.0], [25.4, 2472.0], [25.5, 2528.0], [25.6, 2528.0], [25.7, 2528.0], [25.8, 2528.0], [25.9, 2528.0], [26.0, 2646.0], [26.1, 2646.0], [26.2, 2646.0], [26.3, 2646.0], [26.4, 2646.0], [26.5, 2649.0], [26.6, 2649.0], [26.7, 2649.0], [26.8, 2649.0], [26.9, 2649.0], [27.0, 2711.0], [27.1, 2711.0], [27.2, 2711.0], [27.3, 2711.0], [27.4, 2711.0], [27.5, 2793.0], [27.6, 2793.0], [27.7, 2793.0], [27.8, 2793.0], [27.9, 2793.0], [28.0, 2798.0], [28.1, 2798.0], [28.2, 2798.0], [28.3, 2798.0], [28.4, 2798.0], [28.5, 2849.0], [28.6, 2849.0], [28.7, 2849.0], [28.8, 2849.0], [28.9, 2849.0], [29.0, 2861.0], [29.1, 2861.0], [29.2, 2861.0], [29.3, 2861.0], [29.4, 2861.0], [29.5, 2878.0], [29.6, 2878.0], [29.7, 2878.0], [29.8, 2878.0], [29.9, 2878.0], [30.0, 2896.0], [30.1, 2896.0], [30.2, 2896.0], [30.3, 2896.0], [30.4, 2896.0], [30.5, 2941.0], [30.6, 2941.0], [30.7, 2941.0], [30.8, 2941.0], [30.9, 2941.0], [31.0, 2950.0], [31.1, 2950.0], [31.2, 2950.0], [31.3, 2950.0], [31.4, 2950.0], [31.5, 2953.0], [31.6, 2953.0], [31.7, 2953.0], [31.8, 2953.0], [31.9, 2953.0], [32.0, 3132.0], [32.1, 3132.0], [32.2, 3132.0], [32.3, 3132.0], [32.4, 3132.0], [32.5, 3182.0], [32.6, 3182.0], [32.7, 3182.0], [32.8, 3182.0], [32.9, 3182.0], [33.0, 3288.0], [33.1, 3288.0], [33.2, 3288.0], [33.3, 3288.0], [33.4, 3288.0], [33.5, 3301.0], [33.6, 3301.0], [33.7, 3301.0], [33.8, 3301.0], [33.9, 3301.0], [34.0, 3334.0], [34.1, 3334.0], [34.2, 3334.0], [34.3, 3334.0], [34.4, 3334.0], [34.5, 3349.0], [34.6, 3349.0], [34.7, 3349.0], [34.8, 3349.0], [34.9, 3349.0], [35.0, 3362.0], [35.1, 3362.0], [35.2, 3362.0], [35.3, 3362.0], [35.4, 3362.0], [35.5, 3372.0], [35.6, 3372.0], [35.7, 3372.0], [35.8, 3372.0], [35.9, 3372.0], [36.0, 3373.0], [36.1, 3373.0], [36.2, 3373.0], [36.3, 3373.0], [36.4, 3373.0], [36.5, 3416.0], [36.6, 3416.0], [36.7, 3416.0], [36.8, 3416.0], [36.9, 3416.0], [37.0, 3417.0], [37.1, 3417.0], [37.2, 3417.0], [37.3, 3417.0], [37.4, 3417.0], [37.5, 3422.0], [37.6, 3422.0], [37.7, 3422.0], [37.8, 3422.0], [37.9, 3422.0], [38.0, 3434.0], [38.1, 3434.0], [38.2, 3434.0], [38.3, 3434.0], [38.4, 3434.0], [38.5, 3438.0], [38.6, 3438.0], [38.7, 3438.0], [38.8, 3438.0], [38.9, 3438.0], [39.0, 3486.0], [39.1, 3486.0], [39.2, 3486.0], [39.3, 3486.0], [39.4, 3486.0], [39.5, 3491.0], [39.6, 3491.0], [39.7, 3491.0], [39.8, 3491.0], [39.9, 3491.0], [40.0, 3537.0], [40.1, 3537.0], [40.2, 3537.0], [40.3, 3537.0], [40.4, 3537.0], [40.5, 3566.0], [40.6, 3566.0], [40.7, 3566.0], [40.8, 3566.0], [40.9, 3566.0], [41.0, 3572.0], [41.1, 3572.0], [41.2, 3572.0], [41.3, 3572.0], [41.4, 3572.0], [41.5, 3587.0], [41.6, 3587.0], [41.7, 3587.0], [41.8, 3587.0], [41.9, 3587.0], [42.0, 3623.0], [42.1, 3623.0], [42.2, 3623.0], [42.3, 3623.0], [42.4, 3623.0], [42.5, 3655.0], [42.6, 3655.0], [42.7, 3655.0], [42.8, 3655.0], [42.9, 3655.0], [43.0, 3667.0], [43.1, 3667.0], [43.2, 3667.0], [43.3, 3667.0], [43.4, 3667.0], [43.5, 3672.0], [43.6, 3672.0], [43.7, 3672.0], [43.8, 3672.0], [43.9, 3672.0], [44.0, 3675.0], [44.1, 3675.0], [44.2, 3675.0], [44.3, 3675.0], [44.4, 3675.0], [44.5, 3679.0], [44.6, 3679.0], [44.7, 3679.0], [44.8, 3679.0], [44.9, 3679.0], [45.0, 3687.0], [45.1, 3687.0], [45.2, 3687.0], [45.3, 3687.0], [45.4, 3687.0], [45.5, 3717.0], [45.6, 3717.0], [45.7, 3717.0], [45.8, 3717.0], [45.9, 3717.0], [46.0, 3719.0], [46.1, 3719.0], [46.2, 3719.0], [46.3, 3719.0], [46.4, 3719.0], [46.5, 3736.0], [46.6, 3736.0], [46.7, 3736.0], [46.8, 3736.0], [46.9, 3736.0], [47.0, 3745.0], [47.1, 3745.0], [47.2, 3745.0], [47.3, 3745.0], [47.4, 3745.0], [47.5, 3780.0], [47.6, 3780.0], [47.7, 3780.0], [47.8, 3780.0], [47.9, 3780.0], [48.0, 3788.0], [48.1, 3788.0], [48.2, 3788.0], [48.3, 3788.0], [48.4, 3788.0], [48.5, 3789.0], [48.6, 3789.0], [48.7, 3789.0], [48.8, 3789.0], [48.9, 3789.0], [49.0, 3795.0], [49.1, 3795.0], [49.2, 3795.0], [49.3, 3795.0], [49.4, 3795.0], [49.5, 3817.0], [49.6, 3817.0], [49.7, 3817.0], [49.8, 3817.0], [49.9, 3817.0], [50.0, 3833.0], [50.1, 3833.0], [50.2, 3833.0], [50.3, 3833.0], [50.4, 3833.0], [50.5, 3840.0], [50.6, 3840.0], [50.7, 3840.0], [50.8, 3840.0], [50.9, 3840.0], [51.0, 3849.0], [51.1, 3849.0], [51.2, 3849.0], [51.3, 3849.0], [51.4, 3849.0], [51.5, 3870.0], [51.6, 3870.0], [51.7, 3870.0], [51.8, 3870.0], [51.9, 3870.0], [52.0, 3883.0], [52.1, 3883.0], [52.2, 3883.0], [52.3, 3883.0], [52.4, 3883.0], [52.5, 3887.0], [52.6, 3887.0], [52.7, 3887.0], [52.8, 3887.0], [52.9, 3887.0], [53.0, 3891.0], [53.1, 3891.0], [53.2, 3891.0], [53.3, 3891.0], [53.4, 3891.0], [53.5, 3905.0], [53.6, 3905.0], [53.7, 3905.0], [53.8, 3905.0], [53.9, 3905.0], [54.0, 3912.0], [54.1, 3912.0], [54.2, 3912.0], [54.3, 3912.0], [54.4, 3912.0], [54.5, 3916.0], [54.6, 3916.0], [54.7, 3916.0], [54.8, 3916.0], [54.9, 3916.0], [55.0, 3918.0], [55.1, 3918.0], [55.2, 3918.0], [55.3, 3918.0], [55.4, 3918.0], [55.5, 4002.0], [55.6, 4002.0], [55.7, 4002.0], [55.8, 4002.0], [55.9, 4002.0], [56.0, 4012.0], [56.1, 4012.0], [56.2, 4012.0], [56.3, 4012.0], [56.4, 4012.0], [56.5, 4033.0], [56.6, 4033.0], [56.7, 4033.0], [56.8, 4033.0], [56.9, 4033.0], [57.0, 4052.0], [57.1, 4052.0], [57.2, 4052.0], [57.3, 4052.0], [57.4, 4052.0], [57.5, 4072.0], [57.6, 4072.0], [57.7, 4072.0], [57.8, 4072.0], [57.9, 4072.0], [58.0, 4077.0], [58.1, 4077.0], [58.2, 4077.0], [58.3, 4077.0], [58.4, 4077.0], [58.5, 4123.0], [58.6, 4123.0], [58.7, 4123.0], [58.8, 4123.0], [58.9, 4123.0], [59.0, 4138.0], [59.1, 4138.0], [59.2, 4138.0], [59.3, 4138.0], [59.4, 4138.0], [59.5, 4141.0], [59.6, 4141.0], [59.7, 4141.0], [59.8, 4141.0], [59.9, 4141.0], [60.0, 4169.0], [60.1, 4169.0], [60.2, 4169.0], [60.3, 4169.0], [60.4, 4169.0], [60.5, 4176.0], [60.6, 4176.0], [60.7, 4176.0], [60.8, 4176.0], [60.9, 4176.0], [61.0, 4194.0], [61.1, 4194.0], [61.2, 4194.0], [61.3, 4194.0], [61.4, 4194.0], [61.5, 4194.0], [61.6, 4194.0], [61.7, 4194.0], [61.8, 4194.0], [61.9, 4194.0], [62.0, 4202.0], [62.1, 4202.0], [62.2, 4202.0], [62.3, 4202.0], [62.4, 4202.0], [62.5, 4203.0], [62.6, 4203.0], [62.7, 4203.0], [62.8, 4203.0], [62.9, 4203.0], [63.0, 4203.0], [63.1, 4203.0], [63.2, 4203.0], [63.3, 4203.0], [63.4, 4203.0], [63.5, 4211.0], [63.6, 4211.0], [63.7, 4211.0], [63.8, 4211.0], [63.9, 4211.0], [64.0, 4229.0], [64.1, 4229.0], [64.2, 4229.0], [64.3, 4229.0], [64.4, 4229.0], [64.5, 4254.0], [64.6, 4254.0], [64.7, 4254.0], [64.8, 4254.0], [64.9, 4254.0], [65.0, 4256.0], [65.1, 4256.0], [65.2, 4256.0], [65.3, 4256.0], [65.4, 4256.0], [65.5, 4263.0], [65.6, 4263.0], [65.7, 4263.0], [65.8, 4263.0], [65.9, 4263.0], [66.0, 4273.0], [66.1, 4273.0], [66.2, 4273.0], [66.3, 4273.0], [66.4, 4273.0], [66.5, 4275.0], [66.6, 4275.0], [66.7, 4275.0], [66.8, 4275.0], [66.9, 4275.0], [67.0, 4309.0], [67.1, 4309.0], [67.2, 4309.0], [67.3, 4309.0], [67.4, 4309.0], [67.5, 4337.0], [67.6, 4337.0], [67.7, 4337.0], [67.8, 4337.0], [67.9, 4337.0], [68.0, 4339.0], [68.1, 4339.0], [68.2, 4339.0], [68.3, 4339.0], [68.4, 4339.0], [68.5, 4345.0], [68.6, 4345.0], [68.7, 4345.0], [68.8, 4345.0], [68.9, 4345.0], [69.0, 4351.0], [69.1, 4351.0], [69.2, 4351.0], [69.3, 4351.0], [69.4, 4351.0], [69.5, 4354.0], [69.6, 4354.0], [69.7, 4354.0], [69.8, 4354.0], [69.9, 4354.0], [70.0, 4354.0], [70.1, 4354.0], [70.2, 4354.0], [70.3, 4354.0], [70.4, 4354.0], [70.5, 4362.0], [70.6, 4362.0], [70.7, 4362.0], [70.8, 4362.0], [70.9, 4362.0], [71.0, 4371.0], [71.1, 4371.0], [71.2, 4371.0], [71.3, 4371.0], [71.4, 4371.0], [71.5, 4371.0], [71.6, 4371.0], [71.7, 4371.0], [71.8, 4371.0], [71.9, 4371.0], [72.0, 4372.0], [72.1, 4372.0], [72.2, 4372.0], [72.3, 4372.0], [72.4, 4372.0], [72.5, 4379.0], [72.6, 4379.0], [72.7, 4379.0], [72.8, 4379.0], [72.9, 4379.0], [73.0, 4390.0], [73.1, 4390.0], [73.2, 4390.0], [73.3, 4390.0], [73.4, 4390.0], [73.5, 4390.0], [73.6, 4390.0], [73.7, 4390.0], [73.8, 4390.0], [73.9, 4390.0], [74.0, 4391.0], [74.1, 4391.0], [74.2, 4391.0], [74.3, 4391.0], [74.4, 4391.0], [74.5, 4393.0], [74.6, 4393.0], [74.7, 4393.0], [74.8, 4393.0], [74.9, 4393.0], [75.0, 4399.0], [75.1, 4399.0], [75.2, 4399.0], [75.3, 4399.0], [75.4, 4399.0], [75.5, 4410.0], [75.6, 4410.0], [75.7, 4410.0], [75.8, 4410.0], [75.9, 4410.0], [76.0, 4420.0], [76.1, 4420.0], [76.2, 4420.0], [76.3, 4420.0], [76.4, 4420.0], [76.5, 4421.0], [76.6, 4421.0], [76.7, 4421.0], [76.8, 4421.0], [76.9, 4421.0], [77.0, 4425.0], [77.1, 4425.0], [77.2, 4425.0], [77.3, 4425.0], [77.4, 4425.0], [77.5, 4425.0], [77.6, 4425.0], [77.7, 4425.0], [77.8, 4425.0], [77.9, 4425.0], [78.0, 4427.0], [78.1, 4427.0], [78.2, 4427.0], [78.3, 4427.0], [78.4, 4427.0], [78.5, 4427.0], [78.6, 4427.0], [78.7, 4427.0], [78.8, 4427.0], [78.9, 4427.0], [79.0, 4429.0], [79.1, 4429.0], [79.2, 4429.0], [79.3, 4429.0], [79.4, 4429.0], [79.5, 4470.0], [79.6, 4470.0], [79.7, 4470.0], [79.8, 4470.0], [79.9, 4470.0], [80.0, 4474.0], [80.1, 4474.0], [80.2, 4474.0], [80.3, 4474.0], [80.4, 4474.0], [80.5, 4478.0], [80.6, 4478.0], [80.7, 4478.0], [80.8, 4478.0], [80.9, 4478.0], [81.0, 4483.0], [81.1, 4483.0], [81.2, 4483.0], [81.3, 4483.0], [81.4, 4483.0], [81.5, 4535.0], [81.6, 4535.0], [81.7, 4535.0], [81.8, 4535.0], [81.9, 4535.0], [82.0, 4540.0], [82.1, 4540.0], [82.2, 4540.0], [82.3, 4540.0], [82.4, 4540.0], [82.5, 4545.0], [82.6, 4545.0], [82.7, 4545.0], [82.8, 4545.0], [82.9, 4545.0], [83.0, 4557.0], [83.1, 4557.0], [83.2, 4557.0], [83.3, 4557.0], [83.4, 4557.0], [83.5, 4566.0], [83.6, 4566.0], [83.7, 4566.0], [83.8, 4566.0], [83.9, 4566.0], [84.0, 4569.0], [84.1, 4569.0], [84.2, 4569.0], [84.3, 4569.0], [84.4, 4569.0], [84.5, 5254.0], [84.6, 5254.0], [84.7, 5254.0], [84.8, 5254.0], [84.9, 5254.0], [85.0, 5686.0], [85.1, 5686.0], [85.2, 5686.0], [85.3, 5686.0], [85.4, 5686.0], [85.5, 5987.0], [85.6, 5987.0], [85.7, 5987.0], [85.8, 5987.0], [85.9, 5987.0], [86.0, 6607.0], [86.1, 6607.0], [86.2, 6607.0], [86.3, 6607.0], [86.4, 6607.0], [86.5, 6802.0], [86.6, 6802.0], [86.7, 6802.0], [86.8, 6802.0], [86.9, 6802.0], [87.0, 6817.0], [87.1, 6817.0], [87.2, 6817.0], [87.3, 6817.0], [87.4, 6817.0], [87.5, 6968.0], [87.6, 6968.0], [87.7, 6968.0], [87.8, 6968.0], [87.9, 6968.0], [88.0, 7548.0], [88.1, 7548.0], [88.2, 7548.0], [88.3, 7548.0], [88.4, 7548.0], [88.5, 7694.0], [88.6, 7694.0], [88.7, 7694.0], [88.8, 7694.0], [88.9, 7694.0], [89.0, 7847.0], [89.1, 7847.0], [89.2, 7847.0], [89.3, 7847.0], [89.4, 7847.0], [89.5, 8173.0], [89.6, 8173.0], [89.7, 8173.0], [89.8, 8173.0], [89.9, 8173.0], [90.0, 8227.0], [90.1, 8227.0], [90.2, 8227.0], [90.3, 8227.0], [90.4, 8227.0], [90.5, 8413.0], [90.6, 8413.0], [90.7, 8413.0], [90.8, 8413.0], [90.9, 8413.0], [91.0, 9002.0], [91.1, 9002.0], [91.2, 9002.0], [91.3, 9002.0], [91.4, 9002.0], [91.5, 9031.0], [91.6, 9031.0], [91.7, 9031.0], [91.8, 9031.0], [91.9, 9031.0], [92.0, 9126.0], [92.1, 9126.0], [92.2, 9126.0], [92.3, 9126.0], [92.4, 9126.0], [92.5, 9151.0], [92.6, 9151.0], [92.7, 9151.0], [92.8, 9151.0], [92.9, 9151.0], [93.0, 9163.0], [93.1, 9163.0], [93.2, 9163.0], [93.3, 9163.0], [93.4, 9163.0], [93.5, 9193.0], [93.6, 9193.0], [93.7, 9193.0], [93.8, 9193.0], [93.9, 9193.0], [94.0, 11058.0], [94.1, 11058.0], [94.2, 11058.0], [94.3, 11058.0], [94.4, 11058.0], [94.5, 14150.0], [94.6, 14150.0], [94.7, 14150.0], [94.8, 14150.0], [94.9, 14150.0], [95.0, 16996.0], [95.1, 16996.0], [95.2, 16996.0], [95.3, 16996.0], [95.4, 16996.0], [95.5, 20479.0], [95.6, 20479.0], [95.7, 20479.0], [95.8, 20479.0], [95.9, 20479.0], [96.0, 24778.0], [96.1, 24778.0], [96.2, 24778.0], [96.3, 24778.0], [96.4, 24778.0], [96.5, 29081.0], [96.6, 29081.0], [96.7, 29081.0], [96.8, 29081.0], [96.9, 29081.0], [97.0, 33423.0], [97.1, 33423.0], [97.2, 33423.0], [97.3, 33423.0], [97.4, 33423.0], [97.5, 36781.0], [97.6, 36781.0], [97.7, 36781.0], [97.8, 36781.0], [97.9, 36781.0], [98.0, 40965.0], [98.1, 40965.0], [98.2, 40965.0], [98.3, 40965.0], [98.4, 40965.0], [98.5, 45349.0], [98.6, 45349.0], [98.7, 45349.0], [98.8, 45349.0], [98.9, 45349.0], [99.0, 49527.0], [99.1, 49527.0], [99.2, 49527.0], [99.3, 49527.0], [99.4, 49527.0], [99.5, 53805.0], [99.6, 53805.0], [99.7, 53805.0], [99.8, 53805.0], [99.9, 53805.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 17.0, "series": [{"data": [[600.0, 2.0], [700.0, 10.0], [900.0, 2.0], [1000.0, 5.0], [1100.0, 4.0], [1200.0, 1.0], [1300.0, 4.0], [1400.0, 2.0], [1500.0, 2.0], [1700.0, 4.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 4.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 4.0], [2700.0, 3.0], [2900.0, 3.0], [3100.0, 2.0], [3300.0, 6.0], [3200.0, 1.0], [3400.0, 7.0], [3500.0, 4.0], [3600.0, 7.0], [3700.0, 8.0], [3800.0, 8.0], [3900.0, 4.0], [4000.0, 6.0], [4100.0, 7.0], [4200.0, 10.0], [4300.0, 17.0], [4400.0, 12.0], [4500.0, 6.0], [5200.0, 1.0], [5600.0, 1.0], [5900.0, 1.0], [6600.0, 1.0], [6800.0, 2.0], [6900.0, 1.0], [7600.0, 1.0], [7500.0, 1.0], [7800.0, 1.0], [8100.0, 1.0], [8400.0, 1.0], [8200.0, 1.0], [9000.0, 2.0], [9100.0, 4.0], [11000.0, 1.0], [14100.0, 1.0], [16900.0, 1.0], [20400.0, 1.0], [24700.0, 1.0], [29000.0, 1.0], [33400.0, 1.0], [36700.0, 1.0], [40900.0, 1.0], [45300.0, 1.0], [49500.0, 1.0], [53800.0, 1.0], [300.0, 1.0], [400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 53800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 168.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 30.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 168.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.236842105263158, "minX": 1.793199E12, "maxY": 14.466165413533842, "series": [{"data": [[1.79319906E12, 14.466165413533842], [1.793199E12, 11.482758620689653], [1.79319912E12, 4.236842105263158]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79319912E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 824.0909090909091, "minX": 1.0, "maxY": 8531.454545454546, "series": [{"data": [[2.0, 824.0909090909091], [8.0, 3627.8999999999996], [9.0, 4362.1], [10.0, 8403.083333333334], [11.0, 8531.454545454546], [3.0, 1494.0], [12.0, 7664.916666666667], [13.0, 7819.81818181818], [14.0, 6958.166666666667], [15.0, 7205.727272727273], [4.0, 2218.777777777778], [16.0, 6666.454545454545], [1.0, 1478.0], [17.0, 5789.666666666667], [18.0, 5470.9473684210525], [19.0, 4476.0], [5.0, 2939.428571428571], [20.0, 3966.5714285714284], [6.0, 2107.3333333333335], [7.0, 2516.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[12.090000000000003, 5248.119999999998]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 70.56666666666666, "minX": 1.793199E12, "maxY": 11322.533333333333, "series": [{"data": [[1.79319906E12, 11322.533333333333], [1.793199E12, 2468.85], [1.79319912E12, 3235.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79319906E12, 323.6333333333333], [1.793199E12, 70.56666666666666], [1.79319912E12, 92.46666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79319912E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1851.2413793103453, "minX": 1.793199E12, "maxY": 6814.744360902253, "series": [{"data": [[1.79319906E12, 6814.744360902253], [1.793199E12, 1851.2413793103453], [1.79319912E12, 2357.2894736842104]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79319912E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1850.8620689655177, "minX": 1.793199E12, "maxY": 6814.593984962404, "series": [{"data": [[1.79319906E12, 6814.593984962404], [1.793199E12, 1850.8620689655177], [1.79319912E12, 2357.2105263157896]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79319912E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.09022556390977442, "minX": 1.793199E12, "maxY": 1.1724137931034486, "series": [{"data": [[1.79319906E12, 0.09022556390977442], [1.793199E12, 1.1724137931034486], [1.79319912E12, 0.5000000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79319912E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 390.0, "minX": 1.793199E12, "maxY": 53805.0, "series": [{"data": [[1.79319906E12, 53805.0], [1.793199E12, 5686.0], [1.79319912E12, 7847.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79319906E12, 2393.0], [1.793199E12, 390.0], [1.79319912E12, 684.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79319906E12, 9181.0], [1.793199E12, 3438.0], [1.79319912E12, 5408.800000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79319906E12, 52350.47999999999], [1.793199E12, 5686.0], [1.79319912E12, 7847.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79319906E12, 4211.0], [1.793199E12, 1728.0], [1.79319912E12, 1450.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79319906E12, 30383.599999999988], [1.793199E12, 4913.5], [1.79319912E12, 7562.949999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79319912E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3795.0, "minX": 1.0, "maxY": 3833.0, "series": [{"data": [[1.0, 3833.0], [2.0, 3828.5], [3.0, 3795.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3795.0, "minX": 1.0, "maxY": 3833.0, "series": [{"data": [[1.0, 3833.0], [2.0, 3828.5], [3.0, 3795.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.5, "minX": 1.793199E12, "maxY": 2.0166666666666666, "series": [{"data": [[1.79319906E12, 2.0166666666666666], [1.793199E12, 0.8166666666666667], [1.79319912E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79319912E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.793199E12, "maxY": 2.216666666666667, "series": [{"data": [[1.79319906E12, 2.216666666666667], [1.793199E12, 0.48333333333333334], [1.79319912E12, 0.6333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79319912E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.793199E12, "maxY": 2.216666666666667, "series": [{"data": [[1.79319906E12, 2.216666666666667], [1.793199E12, 0.48333333333333334], [1.79319912E12, 0.6333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79319912E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.793199E12, "maxY": 2.216666666666667, "series": [{"data": [[1.79319906E12, 2.216666666666667], [1.793199E12, 0.48333333333333334], [1.79319912E12, 0.6333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79319912E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

