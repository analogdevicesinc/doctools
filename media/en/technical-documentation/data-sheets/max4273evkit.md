<!-- lastmod 2022-08-03 -->
## General Description

The MAX4273 evaluation kit (EV kit) is a fully assembled and tested surface-mount hot-swap controller circuit board that provides current-limiting and DualSpeed/BiLevel™ fault protection. The circuit uses a MAX4273 IC in  a  16-pin  QSOP package and is configured for a +2.7V to +13.2V input voltage range.

The MAX4273 controls the N-channel MOSFET and provides current regulation during startup. Several configurations allow the MAX4273 IC's unique current regulation architecture to be tailored to the application. The current-limiting and short-circuit protection features are configurable and demonstrate the various features provided by the MAX4273 IC.

The EV kit features a power-on reset (POR) circuit. Several configurations for autoretry, glitch filters, auxiliary  VCC power, and gate drive speed are provided. The EV kit can also be reconfigured to emulate the MAX4271 and MAX4272 hot-swap controllers.

DualSpeed/BiLevel is a trademark of Maxim Integrated Products.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1, C12       |     2 | 1.0 µ F, 16V X5R ceramic capacitors (0805) Taiyo Yuden EMK212BJ105KG  |
| C2, C3        |     2 | 0.1 µ F, 50V X7R ceramic capacitors (0805) Taiyo Yuden UMK212BJ104KG  |
| C4            |     1 | 3300pF, 50V ceramic capacitor (0603) Taiyo Yuden UMK107BJ332KZ        |
| C5            |     1 | 0.068 µ F, 50V X7R ceramic capacitor (0805) Taiyo Yuden UMK212BJ683KG |
| C6            |     1 | 1000 µ F, 16V OS-CON capacitor (H case) Sanyo 16SA1000M               |

<!-- image -->

## Features

- ♦ +2.7V to +13.2V Input Range
- ♦ Output Configured for +5V (Configurable from +2.7V to +13.2V)
- ♦ Up to 10A Capability (as Configured)
- ♦ Demonstrates Unique Current-Regulation Architecture
- ♦ Auxiliary VCC Feature
- ♦ Power-On Reset Circuit
- ♦ Configurable Autoretry
- ♦ Adjustable N-Channel MOSFET Gate Charging Time
- ♦ Configurable Glitch Filters
- ♦ Also Emulates MAX4271 and MAX4272 Hot-Swap Controllers
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX4273EVKIT | 0°C to +70°C  | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C7, C8        |     0 | Not installed (F12 case) Sanyo 16SV220M recommended                   |
| C9            |     1 | 0.22 µ F, 35V X7R ceramic capacitor (0805) Taiyo Yuden GMK212BJ224KG  |
| C10, C13      |     2 | 0.01 µ F, 50V X7R ceramic capacitors (0603) Taiyo Yuden UMK107 B103KZ |
| C11           |     0 | Not installed, (H case) Sanyo 16SA1000M recommended                   |
| C14           |     1 | 330pF, 50V X7R ceramic capacitor (0603) Murata GRM39X7R331K050        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX4273 Evaluation Kit

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                                                                                 |
|--------------------|-------|---------------------------------------------------------------------------------------------|
| R1, R4, R5         |     3 | 1M Ω ± 5% resistors (0805)                                                                  |
| R2, R7             |     2 | 10k Ω ± 1% resistors (0805)                                                                 |
| R3                 |     1 | 0.004 Ω ± 1% 1W power resistor Dale WSL2512 0.004 Ω ± 1% R86 IRC OARS-1-4m Ω                |
| R6                 |     1 | 64.9k Ω ± 1% resistor (0805)                                                                |
| R8                 |     0 | Not installed, resistor (0805)                                                              |
| N1                 |     1 | 30V, 100A N-channel MOSFET (D 2 PAK) Fairchild FDB7030L or International Rectifier IRL3803S |
| J1-J4              |     4 | Uninsulated banana jacks Mouser 530-108-0740-1                                              |
| JU1, JU4, JU5, JU7 |     4 | 2-pin headers                                                                               |
| JU2, JU6           |     2 | 3-pin headers                                                                               |
| JU3                |     1 | 4-pin header                                                                                |
| None               |     7 | Shunts (JU1-JU7)                                                                            |
| None               |     4 | Rubber bumpers 3M SJ-5003                                                                   |
| U1                 |     1 | MAX4273EEE (16-pin QSOP)                                                                    |
| None               |     1 | MAX4273 data sheet                                                                          |
| None               |     1 | MAX4273 EV kit data sheet                                                                   |

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| Dale/Vishay             | 402-564-3131 | 402-563-6418 |
| Fairchild               | 408-822-2000 | 408-822-2102 |
| International Rectifier | 310-322-3331 | 310-322-3332 |
| IRC                     | 512-992-7900 | 512-992-3377 |
| Murata                  | 814-237-1431 | 814-238-0490 |
| Sanyo USA               | 619-661-6835 | 619-661-1055 |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX4273 when contacting these component suppliers.

## Quick Start

The MAX4273 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## MAX4273 Configuration +5V, 10A Output

- 1) Verify that shunts are on jumpers JU4 (CSPD), JU5 (AUXVCC), and JU7 (CTON).
- 2) Verify that jumper JU1 (ON) does not have a shunt installed.
- 3) Verify  that  jumper  JU3 (RTH) has a shunt installed on pins 1 and 3.
- 4) Verify  that  a  shunt  is  installed  on  pins  2  and  3  of jumper JU2 (CTIM) and on pins 1 and 2 of jumper JU6 (GATE).
- 5) Utilizing very short 10A rated banana leads (&lt;6in long) ,  connect the +5VDC power supply to the VIN pad. Utilizing very short 10A rated banana leads (&lt;6in long) ,  connect the supply ground to the GND pad.
- 6) Connect a voltmeter to the VOUT and GND pads.
- 7) Turn on the power supply and verify that the voltage at VOUT is +5V.
- 8) Test point 1 (TP1) is provided to observe the MOSFET gate voltage with an oscilloscope.

Note: The banana leads connecting the power supply and the load to the EV kit must be very short (&lt;6in long) and rated for at least 10A of current.

## Detailed Description

The MAX4273 EV kit is a hot-swap controller circuit board that provides configurable current-limiting and bilevel  fault  protection  for  the  output.  The  bilevel  fault protection provides low-amplitude current-overload protection and protection from instantaneous faults such as a short-circuit condition. The circuit uses a MAX4273 IC, configured for an input range of +5V to +13.2V, and can pass up to 10A of current to the output.  The input feeds a current-sense resistor and Nchannel MOSFET, which controls current between the input and output of the EV kit.

The MAX4273 IC controls the N-channel MOSFET in conjunction with gate capacitors, which provide current regulation during startup and bilevel fault protection during steady-state operation. A jumper to capacitors and a resistor allow control of the MOSFET gate charging time. A test point is provided to verify the gate signal with an oscilloscope.

The MAX4273 EV kit features a POR that will trip when the input voltage drops by 10%. The autoretry, glitch filters,  and  auxiliary  Vcc  power  have  jumpers  that  allow easy configuration changes. Through proper selection of  jumpers, the EV kit can emulate the MAX4271 and

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAX4272 hot-swap controllers. PC board pads for extra output capacitors are provided on the EV kit.

## Jumper Selection

Tables 1-7 display the functions provided by the MAX4273 EV kit.

## MOSFET Enable and Fault Resetting

The MAX4273 EV kit features a combination shutdown/unlatch fault  mode. The 2-pin jumper, JU1, selects the shutdown/unlatch mode for the MAX4273 EV kit. Table 1 lists the selectable jumper options.

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | ON PIN             | EV KIT OUTPUT                       |
|------------------|--------------------|-------------------------------------|
| Installed        | ON pin pulled low  | Disable MOSFET N1, unlatch fault    |
| None             | ON pin pulled high | Enable MOSFET N1, normal operation* |

## ON Pin and Latched and Retry Modes

The MAX4273 EV kit features a jumper to select latched mode or retry timer settings. The 3-pin jumper, JU2, selects the retry time for the MAX4273 IC. Table 2 lists the various jumper options.

Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | CTIM PIN                | EV KIT MODE       |
|------------------|-------------------------|-------------------|
| 1, 2             | Connected to VIN        | Latched mode      |
| 2, 3             | Connected to C3 and C13 | Retry mode, 1.1s  |
| None             | Connected to C13        | Retry mode, 100ms |

## Fast Comparator and Current Regulation

The MAX4273 EV kit features a jumper to enable or disable the fast comparator and to set the threshold level. The 3-pin jumper, JU3, selects the threshold level. Table 3 lists the jumper options.

<!-- image -->

## MAX4273 Evaluation Kit

Table 3. Jumper JU3 Functions

| SHUNT LOCATION   | RTH PIN          | FAST COMPARATOR                                 |
|------------------|------------------|-------------------------------------------------|
| 1, 4             | Connected to VIN | Fast comparator and current regulation disabled |
| 1, 2             | Connected to GND | 200mV internal threshold                        |
| 1, 3             | Connected to R2  | 100mV threshold                                 |

## Slow Comparator Response Time

The MAX4273 EV kit features two choices for the slow comparator response time. The 2-pin jumper, JU4, is used to select other speed settings. Table 4 lists the selectable jumper options.

Table 4. Jumper JU4 Functions

| SHUNT LOCATION   | CSPD PIN                | SLOW COMPARATOR                    |
|------------------|-------------------------|------------------------------------|
| Installed        | Connected to C2 and C10 | 22ms slow comparator response time |
| None             | Connected to C10        | 2ms slow comparator response time  |

## Auxiliary VCC Power

The MAX4273 EV kit features an auxiliary supply for VCC. A capacitor on the auxiliary supply pin provides energy to the IC during a short-circuit fault condition, which could cause the main system power supply to collapse. The 2-pin jumper, JU5, enables or disables the feature by connecting or disconnecting the capacitor. Table 5 lists the selectable jumper options.

Table 5. Jumper JU5 Functions

| SHUNT LOCATION   | AUXVCC PIN                 | EV KIT MODE                   |
|------------------|----------------------------|-------------------------------|
| Installed        | AUXVCC pin connected to C1 | Auxiliary supply connected    |
| None             | AUXVCC pin floating        | Auxiliary supply disconnected |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4273 Evaluation Kit

## MOSFET Charging Time

The MAX4273 EV kit features several choices for controlling  the  charging  time  of  the  N-channel  MOSFET. Jumper JU6 selects the charge time for the MOSFET. Table 6 lists the selectable jumper options. The charging time reflects output voltage close to the final value.

## Table 6. Jumper JU6 Functions

| SHUNT LOCATION   | GATE PIN                           | MOSFET CHARGE TIME                              |
|------------------|------------------------------------|-------------------------------------------------|
| 1, 2             | Connected to C5                    | 7ms gate charging time, fast discharge possible |
| 2, 3             | Connected to C9                    | 22ms gate charging time                         |
| None             | Connected to N1 gate terminal only | 215 µ s gate charging time                      |

## Startup Timer Setting

The MAX4273 EV kit features two choices for the longest time allowed to completely turn on the MOSFET. Jumper JU7 selects the time and Table 7 lists the selectable jumper options.

## Table 7. Jumper JU7 Functions

| SHUNT LOCATION   | CTON PIN                | EV KIT MODE          |
|------------------|-------------------------|----------------------|
| Installed        | Connected to C4 and C14 | 1.1ms T ON setting   |
| None             | Connected to C14        | 103 µ s T ON setting |

## Control Modes

## MOSFET Gate Control

The MAX4273 EV kit features several options to control the MOSFET gate charging time. Table 6 lists the various jumper selectable options. Resistor R8 is also provided to prevent MOSFET oscillations when a capacitor to ground is used. The shorted trace across resistor R8 must be cut open prior to using it. Refer to the MAX4273 data sheet for information on selecting the value of resistor R8. Test point TP1 is provided to observe the gate voltage with an oscilloscope.

## Fault Resetting

The MAX4273 EV kit features a jumper (JU1) to latch/unlatch faults and enable/disable the output MOS-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

FET. See Table 1 for proper jumper settings. An external  controller  can  be  utilized  to  control  the  ON  pin  of the MAX4273. Refer to the MAX4273 data sheet for additional functions of the ON pin when toggling it. Caution: Do not connect an external microcontroller to the ON pad while a shunt is installed on jumper JU1. The shunt provides a short from ON to GND and may damage the external controller.

## +3V, 10A Evaluation

The MAX4273 EV kit can evaluate a hot-swap controller operating at +3V and provide up to 10A of current at the output. Replace POR resistor R6 with a 34.8k Ω resistor  to  obtain  a  trip  level  of  2.7V  at  VIN.  For  other current levels, resistor R3 must be replaced with a resistor  selected  for  the  desired  current.  If  a  different fast  comparator threshold is desired, resistor R2 must also be replaced. Refer to the MAX4273 data sheet for information on selecting resistors R2 and R3.

## +12V, 2A Evaluation

The MAX4273 EV kit can evaluate a hot-swap controller operating at +12V and provide up to 2A of current at the output. Replace POR resistor R6 with a 169k Ω resistor to obtain a trip level of 10.8V at VIN. Resistor R3 must be replaced with a resistor selected for the 2A load. If a different fast comparator threshold is desired, resistor R2 must also be replaced. Refer to the MAX4273 data sheet for information on selecting resistors R2 and R3.

## MAX4271/MAX4272 Emulation

The MAX4273 EV kit can emulate the MAX4271 and MAX4272 IC features. The EV kit uses a MAX4273 IC and properly set jumpers to emulate a MAX4271 or MAX4272 design. See Table 8 or 9 to emulate a MAX4271 or MAX4272 design, respectively. Refer to the MAX4273 data sheet for a description of specific pin functions of the MAX4273 IC and its associated external components. Caution: Only one emulation mode can be evaluated at a time.

Table 8. Emulating a MAX4271 Design

| JUMPER   | SHUNT LOCATION                  | MAX4273 PIN   | MAX4271 EV KIT MODE EMULATED                            |
|----------|---------------------------------|---------------|---------------------------------------------------------|
| JU1      | Installed                       | ON            | Disable MOSFET N1, unlatch fault                        |
| JU1      | None                            | ON            | Enable MOSFET N1, normal operation                      |
| JU2      | 1, 2                            | CTIM          | No retry, latched mode                                  |
| JU3      | 1, 2                            | RTH           | 200mV internal fast comparator threshold (50A)          |
| JU4      | Installed                       | CSPD          | 22ms slow comparator speed setting                      |
| JU4      | None                            | CSPD          | 2ms slow comparator speed setting                       |
| JU5      | None                            | AUXVCC        | AUXVCC disabled                                         |
| JU6      | 2, 3                            | GATE          | 22ms MOSFET gate charging time                          |
| JU6      | None                            | GATE          | 215µs MOSFET gate charging time                         |
| JU7      | Installed                       | CTON          | 1.1ms startup timer T ON setting*                       |
| JU7      | None                            | CTON          | 103µs startup timer T ON setting*                       |
| JU8      | Cut open the trace shorting JU8 | LLMON         | No line-load monitor feature when emulating a MAX4271** |

Table 9. Emulating a MAX4272 Design

| JUMPER   | SHUNT LOCATION                  | MAX4273 PIN   | MAX4272 EV KIT MODE EMULATED                             |
|----------|---------------------------------|---------------|----------------------------------------------------------|
| JU1      | Installed                       | ON            | Disable MOSFET N1                                        |
| JU1      | None                            | ON            | Enable MOSFET N1                                         |
| JU2      | 2, 3                            | CTIM          | Retry mode, 1.1s retry time                              |
| JU2      | None                            | CTIM          | Retry mode, 100ms retry time                             |
| JU3      | 1, 2                            | RTH           | 200mV internal fast comparator threshold (50A)           |
| JU4      | Installed                       | CSPD          | 22ms slow comparator speed setting                       |
| JU4      | None                            | CSPD          | 2ms slow comparator speed setting                        |
| JU5      | None                            | AUXVCC        | AUXVCC disabled                                          |
| JU6      | 2, 3                            | GATE          | 22ms MOSFET gate charging time                           |
| JU6      | None                            | GATE          | 215 µ s MOSFET gate charging time                        |
| JU7      | Installed                       | CTON          | 1.1ms startup timer T ON setting*, default               |
| JU7      | None                            | CTON          | 103 µ s startup timer T ON setting*, default             |
| JU8      | Cut open the trace shorting JU8 | LLMON         | No line-load monitor feature when emulating a MAX4272 ** |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4273 Evaluation Kit

## MAX4273 Evaluation Kit

Figure 1.  MAX4273 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX4273 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX4273 Evaluation Kit

Figure 3. MAX4273 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4273 Evaluation Kit

Figure 4. MAX4273 EV Kit Component Placement GuideBottom

<!-- image -->

Figure 5. MAX4273 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600