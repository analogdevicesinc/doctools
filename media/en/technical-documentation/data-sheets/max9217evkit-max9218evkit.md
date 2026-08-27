<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX9217/MAX9218 Evaluation Kit

## General Description

The MAX9217/MAX9218 evaluation kit (EV kit) provides a proven design to evaluate the MAX9217 27-bit, 3MHz to 35MHz DC-balanced LVDS serializer and the MAX9218 27-bit, 3MHz to 35MHz DC-balanced LVDS deserializer. The MAX9217 serializes 27 bits of parallel input data, 18 bits of video, and 9 bits of control to a serial data stream. The MAX9218 deserializes the LVDS serial input, which converts to 18 bits of parallel video data and 9 bits of parallel control data.

The MAX9217/MAX9218 EV kit PCB has a MAX9217ECM+ and a MAX9218ECM+ installed.

Features

- S 27-Bit Parallel Interface
- S Rosenberger Connector (Cable Included)
- S Independent Evaluation of the MAX9217/MAX9218 Serializer/Deserializer (SerDes)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9217EVKIT+ |        |
| or            | EV Kit |
| MAX9218EVKIT+ |        |

## Component List

| DESIGNATION                                                               |   QTY | DESCRIPTION                                                              |
|---------------------------------------------------------------------------|-------|--------------------------------------------------------------------------|
| C1-C15, C27-C41                                                           |     0 | Not installed, ceramic capacitors (0603)                                 |
| C16-C20, C48, C58-C61                                                     |    10 | 10 F F Q 10%, 16V X5R ceramic capacitors (0805) Murata GRM21BR61C106K    |
| C21, C25, C42, C44, C46, C51, C54, C57, C62, C64                          |    10 | 0.001 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H102K |
| C22, C23, C24, C26, C43, C45, C47, C49, C50, C52, C53, C55, C56, C63, C65 |    15 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GCM188R71C104K   |
| JU1-JU5                                                                   |     5 | 4-pin headers                                                            |
| JU6, JU7, JU8                                                             |     3 | 3-pin headers                                                            |
| JU9-JU21                                                                  |    13 | 2-pin headers                                                            |
| H1, H2                                                                    |     2 | 2 x 20 shrouded-plug connec- tors (0.100in centers)                      |
| H3-H9                                                                     |     7 | 2 x 10 shrouded-plug connec- tors (0.100in centers)                      |

| DESIGNATION                                              |   QTY | DESCRIPTION                                                                 |
|----------------------------------------------------------|-------|-----------------------------------------------------------------------------|
| P1, P2                                                   |     2 | LVDS connectors, waterblue (with EMI/EMC washer) Rosenberger D4S20D-40ML5-Z |
| P3, P4                                                   |     2 | SMA vertical-mount connectors                                               |
| R1, R2, R3, R6, R7, R9, R10, R11, R13, R15, R16, R20-R48 |     0 | Not installed, resistors (0603)                                             |
| R4, R14                                                  |     2 | 82.5 I Q 5% resistors (0603)                                                |
| R5, R12                                                  |     2 | 130 I Q 5% resistors (0603)                                                 |
| R8, R19                                                  |     2 | 49.9 I Q 1% resistors (0603)                                                |
| R17, R18                                                 |     2 | 1k I Q 1% resistors (0603)                                                  |
| U1                                                       |     1 | 27-bit deserializer (48 LQFP) Maxim MAX9218ECM+                             |
| U2                                                       |     1 | 27-bit serializer (48 LQFP) Maxim MAX9217ECM+                               |
| -                                                        |     1 | Cable assembly (2m) MD Elektronik PT1482                                    |
| -                                                        |    16 | Shunts                                                                      |
| -                                                        |     1 | PCB: MAX9217/9218 EVALUATION KIT+                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9217/MAX9218 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE              | WEBSITE                     |
|----------------------------------------|--------------------|-----------------------------|
| MD Elektronik GmbH                     | 011-49-86-38-604-0 | www.md-elektronik-gmbh.de   |
| Murata Electronics North America, Inc. | 770-436-1300       | www.murata-northamerica.com |
| Rosenberger Hochfrequenztechnik GmbH   | 011-49-86 84-18-0  | www.rosenberger.de          |

Note: Indicate that you are using the MAX9217 and the MAX9218 when contacting these component suppliers.

## Quick Start

## Required Equipment

-  MAX9217/MAX9218 EV kit (cable included)
-  Two 3.3V DC power supplies
-  Digital data generator (e.g., HP/Agilent 16522A)
-    Two  low-phase-noise  clock  generators  (e.g.,  HP/ Agilent 8133A)
-    Logic  analyzer  or  data-acquisition  system  (e.g.,  HP/ Agilent 16500C)
-    High-performance oscilloscope (e.g., HP/Agilent DSO80304B; see the Pseudo-Random Bit Sequence (PRBS) Mode section)

## Procedure

The  MAX9217/MAX9218  EV  kit  is  fully  assembled  and tested. Follow the steps below to verify board operation.

Caution: Do not turn on the power supplies or signal sources until all connections are completed.

- 1)    Verify that all jumpers (JU1-JU21) are in their default positions, as shown in Table 1.
- 2)    Connect  the  first  3.3V  power  supply  across  the DVCC1 and GND1 pads of the EV kit.
- 3)    Connect  the  second  3.3V  power  supply  across  the DVCC2 and GND2 pads of the EV kit.

## Table 1. MAX9217/MAX9218 EV Kit Jumper Descriptions (JU1-JU21)

| JUMPER   | FUNCTION                   | SHUNT POSITION   | DESCRIPTION                                                                |
|----------|----------------------------|------------------|----------------------------------------------------------------------------|
| JU1      | MAX9218 falling latch edge | 1-2*             | Connects the R/ F pin of the MAX9218 to GND2 for falling output latch edge |
| JU1      | MAX9218 latch edge         | 1-3              | Connects the R/ F pin of the MAX9218 to header H4-9                        |
| JU1      | MAX9218 rising latch edge  | 1-4              | Connects the R/ F pin of the MAX9218 to DVCC2 for rising output latch edge |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 4)    Connect the GND1 and GND2 pads together.
- 5)    Connect the Rosenberger cable from the P1 to the P2 connector of the EV kit.
- 6)    Connect the data generator to the H6-H9 connectors and set to generate 27-bit parallel data at LVCMOS/ LVTTL levels. See Table 2 for input bit locations.
- 7)    Connect the first clock generator to the P4 SMA connector  and  set  its  output  frequency  between  3MHz and 35MHz (see Table 3 for PCLK\_IN location).
- 8)    Connect the second clock generator to the P3 SMA connector and set to within Q 2% of the MAX9217 serializer  PCLK\_IN frequency (see Table 3 for REFCLK location).
- 9)    Connect the logic analyzer or data-acquisition system to connectors H1 and H2, as shown in Table 4.
- 10)   Turn on the power supplies.
- 11)   Enable the clock generators.
- 12)   Enable the data generator.
- 13)   Enable the logic analyzer or data-acquisition system and begin sampling data.

## MAX9217/MAX9218 Evaluation Kit

Table 1. MAX9217/MAX9218 EV Kit Jumper Descriptions (JU1-JU21) (continued)

| JUMPER   | FUNCTION                          | SHUNT POSITION   | DESCRIPTION                                                                                                                    |
|----------|-----------------------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| JU2      | MAX9218 LVTLL/ LVCMOS range input | 1-2*             | Connects the RNG1 pin of the MAX9218 to GND2 for logic 0 (refer to the MAX9218 IC data sheet to determine the frequency range) |
| JU2      | MAX9218 LVTLL/ LVCMOS range input | 1-3              | Connects the RNG1 pin of the MAX9218 to header H4-7                                                                            |
| JU2      | MAX9218 LVTLL/ LVCMOS range input | 1-4              | Connects the RNG1 of the MAX9218 to DVCC2 for logic 1 (refer to the MAX9218 IC data sheet to determine the frequency range)    |
| JU3      | MAX9218 LVTLL/ LVCMOS range input | 1-2*             | Connects the RNG0 pin of the MAX9218 to GND2 for logic 0 (refer to the MAX9218 IC data sheet to determine frequency range)     |
| JU3      | MAX9218 LVTLL/ LVCMOS range input | 1-3              | Connects the RNG0 pin of the MAX9218 to header H4-5.                                                                           |
| JU3      | MAX9218 LVTLL/ LVCMOS range input | 1-4              | Connects RNG0 pin of the MAX9218 to DVCC2 for logic 1 (refer to the MAX9218 IC data sheet to determine the frequency range)    |
| JU4      | MAX9218 power-down                | 1-2              | Pulls the PWRDWN pin of the MAX9218 to low for shutdown                                                                        |
| JU4      | MAX9218 power-down                | 1-3              | Connects the PWRDWN pin of the MAX9218 to header H4-3                                                                          |
| JU4      | MAX9218 power-down                | 1-4*             | Pulls the PWRDWN pin of the MAX9218 high for full functionality                                                                |
| JU5      | MAX9218 output enable             | 1-2              | Connects the OUTEN pin of the MAX9218 to GND2 for disabling the 27-bit output                                                  |
| JU5      | MAX9218 output enable             | 1-3              | Connects the OUTEN pin of the MAX9218 to header H4-1                                                                           |
| JU5      | MAX9218 output enable             | 1-4*             | Connects the OUTEN pin of the MAX9218 to DVCC2 for enabling the 27-bit output                                                  |
| JU6      | MAX9217 hardwired inputs          | 1-2*             | Connects even pins of headers H5-H9 to DVCC2                                                                                   |
| JU6      | MAX9217 hardwired inputs          | 2-3              | Connects even pins of headers H5-H9 to GND2                                                                                    |
| JU7      | MAX9217 preemphasis or MOD1       | 1-2*             | Connects the I.C. pin (25) of the MAX9217 to DVCC2                                                                             |
| JU7      | MAX9217 preemphasis or MOD1       | 2-3              | Connects the I.C. pin (25) of the MAX9217 to GND2 for enabling PRBS mode                                                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9217/MAX9218 Evaluation Kit

## Table 1. MAX9217/MAX9218 EV Kit Jumper Descriptions (JU1-JU21) (continued)

| JUMPER   | FUNCTION                         | SHUNT POSITION   | DESCRIPTION                                                                                                                     |
|----------|----------------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------|
| JU8      | MAX9217 MOD0                     | 1-2*             | Connects the I.C. pin (24) of the MAX9217 to DVCC                                                                               |
| JU8      | MAX9217 MOD0                     | 2-3              | Connects the I.C. pin (24) of the MAX9217 to GND2 for enabling PRBS mode                                                        |
| JU9      | MAX9217 IN+                      | Open*            | Used for probing IN+                                                                                                            |
| JU10     | MAX9217 IN-                      | Open*            | Used for probing IN-                                                                                                            |
| JU11     | MAX9217 REFCLK                   | Open*            | Used for probing REFCLK                                                                                                         |
| JU12     | MAX9218 OUT-                     | Open*            | Used for probing OUT-                                                                                                           |
| JU13     | MAX9218 OUT+                     | Open*            | Used for probing OUT+                                                                                                           |
| JU14     | MAX9217 LVTLL/LVCMOS range input | 1-2*             | Connects the RNG1 pin of the MAX9217 to DVCC1 for logic 1 (refer to the MAX9217 IC data sheet to determine the frequency range) |
| JU14     | MAX9217 LVTLL/LVCMOS range input | Open             | Internally connects the RNG1 pin of the MAX9217 to ground when left unconnected                                                 |
| JU15     | MAX9217 LVTLL/LVCMOS range input | 1-2*             | Connects the RNG0 pin of the MAX9217 to DVCC1 for logic 1 (refer to the MAX9217 IC data sheet to determine the frequency range) |
| JU15     | MAX9217 LVTLL/LVCMOS range input | Open             | Internally connects the RNG0 pin of the MAX9217 to ground when left unconnected                                                 |
| JU16     | Board-supply connectivity        | 1-2*             | Connects DVCC2 to PVCC2. This shunt reduces the number of supplies required to operate the EV kit.                              |
| JU16     | Board-supply connectivity        | Open             | Disconnects DVCC2 from PVCC2. The 2-pin header can be utilized for supply current measurements.                                 |
| JU17     | Board-supply connectivity        | 1-2*             | Connects DVCC2 to LVCC2. This shunt reduces the number of supplies required to operate the EV kit.                              |
| JU17     | Board-supply connectivity        | Open             | Disconnects DVCC2 from LVCC2. The 2-pin header can be utilized for supply current measurements.                                 |
| JU18     | Board-supply connectivity        | 1-2*             | Connects DVCC2 to OVCC. This shunt reduces the number of supplies required to operate the EV kit.                               |
| JU18     | Board-supply connectivity        | Open             | Disconnects DVCC2 from OVCC. The 2-pin header can be utilized for sup- ply current measurements.                                |
| JU19     | Board-supply connectivity        | 1-2*             | Connects DVCC1 to IVCC. This shunt reduces the number of supplies required to operate the EV kit.                               |
| JU19     | Board-supply connectivity        | Open             | Disconnects DVCC1 from IVCC. The 2-pin header can be utilized for sup- ply current measurements.                                |
| JU20     | Board-supply connectivity        | 1-2*             | Connects DVCC1 to PVCC1. This shunt reduces the number of supplies required to operate the EV kit.                              |
| JU20     | Board-supply connectivity        | Open             | Disconnects DVCC1 from PVCC1. The 2-pin header can be utilized for supply current measurements.                                 |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9217/MAX9218 Evaluation Kit

Table 1. MAX9217/MAX9218 EV Kit Jumper Descriptions (JU1-JU21) (continued)

| JUMPER   | FUNCTION                  | SHUNT POSITION   | DESCRIPTION                                                                                        |
|----------|---------------------------|------------------|----------------------------------------------------------------------------------------------------|
| JU21     | Board-supply connectivity | 1-2*             | Connects DVCC1 to LVCC1. This shunt reduces the number of supplies required to operate the EV kit. |
| JU21     | Board-supply connectivity | Open             | Disconnects DVCC1 from LVCC1. The 2-pin header can be utilized for supply current measurements.    |

Table 2. Video and Control Data Inputs

| INPUT SIGNALS   | DESIGNATION   | DESCRIPTION         |
|-----------------|---------------|---------------------|
| RGB_IN0         | H9-1          | Input video bit 0   |
| RGB_IN1         | H9-3          | Input video bit 1   |
| RGB_IN2         | H9-5          | Input video bit 2   |
| RGB_IN3         | H9-7          | Input video bit 3   |
| RGB_IN4         | H9-9          | Input video bit 4   |
| RGB_IN5         | H9-11         | Input video bit 5   |
| RGB_IN6         | H9-13         | Input video bit 6   |
| RGB_IN7         | H8-1          | Input video bit 7   |
| RGB_IN8         | H8-3          | Input video bit 8   |
| RGB_IN9         | H8-5          | Input video bit 9   |
| RGB_IN10        | H8-7          | Input video bit 10  |
| RGB_IN11        | H8-9          | Input video bit 11  |
| RGB_IN12        | H8-11         | Input video bit 12  |
| RGB_IN13        | H8-13         | Input video bit 13  |
| RGB_IN14        | H7-1          | Input video bit 14  |
| RGB_IN15        | H7-3          | Input video bit 15  |
| RGB_IN16        | H7-5          | Input video bit 16  |
| RGB_IN17        | H7-7          | Input video bit 17  |
| CNTL_IN0        | H7-9          | Input control bit 0 |
| CNTL_IN1        | H7-11         | Input control bit 1 |
| CNTL_IN2        | H7-13         | Input control bit 2 |
| CNTL_IN3        | H6-1          | Input control bit 3 |
| CNTL_IN4        | H6-3          | Input control bit 4 |
| CNTL_IN5        | H6-5          | Input control bit 5 |
| CNTL_IN6        | H6-7          | Input control bit 6 |
| CNTL_IN7        | H6-9          | Input control bit 7 |
| CNTL_IN8        | H6-11         | Input control bit 8 |

## Table 3. Input/Output Clock Locations

| SIGNAL   | DESIGNATION   |
|----------|---------------|
| PCLK_IN  | H5-5 or P4    |
| REFCLK   | H3-5 or P3    |

<!-- image -->

## Detailed Description of Hardware

The  MAX9217/MAX9218  EV  kit  provides  a  proven design to evaluate the MAX9217 27-bit, 3MHz to 35MHz DC-balanced LVDS serializer and the MAX9218 27-bit, 3MHz  to  35MHz  DC-balanced  LVDS  deserializer.  The MAX9217 serializes 27 bits of parallel input data, 18 bits of  video,  and  9  bits  of  control  to  a  serial  data  stream. The MAX9218 deserializes the LVDS serial input, which converts to 18 bits of parallel video data and 9 bits of parallel control data.

## Input Signals

The MAX9217 accepts 27-bit parallel data (18 video data bits and 9 control data bits). The 27-bit pattern is supplied to the EV kit by connecting a data generator to the four 20-pin headers (H6-H9), or by connecting selected pins  of  H6-H9  to  high/low  LVCMOS/LVTTL  states.  See Table 2 for input bit locations designated on H6-H9.

## Data-Enable Input (DE\_IN)

The MAX9217 DE\_IN pin is accessible through header H6-13. Driving the pin high selects RGB\_IN[17:0] to be latched. Driving the pin low selects CNTL\_IN[8:0] to be latched.

## Input and Output Clocks

The MAX9217 parallel input clock (PCLK\_IN) is accessible through H5-5 or SMA connector P4 (see Table 3). Apply  a  clock  frequency  to  the  access  points,  which latches  data  and  control  inputs  and  provides  the  PLL clock.

The MAX9218 reference clock (REFCLK) input is accessible through H3-5 or SMA connector P3 (see Table 3). Apply a reference clock to the access point that is within Q 2% of the MAX9217 serializer PCLK\_IN frequency.

## Output Signals

The MAX9218 outputs 27-bit parallel data, 18 video data bits, and 9 control data bits at LVCMOS/LVTTL levels on the  40-pin  headers  (H1  and  H2).  To  sample  the  27-bit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX9217/MAX9218 Evaluation Kit

pattern, connect a logic analyzer or data-acquisition system to H1 and H2. See Table 4 for the output bit locations on the H1 and H2 headers.

## Data-Enable Output (DE\_OUT)

The MAX9218 DE\_OUT pin is accessible through header H2-21. A high output indicates that RGB\_OUT[17:0] are active  and  a  low  output  indicates  that  CNTL\_OUT[8:0] are active.

## Output Enable (OUTEN)

The MAX9218 OUTEN pin is accessible through jumper JU5.  Drive  the  pin  high  by  placing  a  shunt  in  the  1-4

## Table 4. Video and Control Data Outputs

| OUTPUT SIGNALS   | DESIGNATION   | DESCRIPTION          |
|------------------|---------------|----------------------|
| CNTL_OUT0        | H2-3          | Output control bit 0 |
| CNTL_OUT1        | H2-5          | Output control bit 1 |
| CNTL_OUT2        | H2-7          | Output control bit 2 |
| CNTL_OUT3        | H2-9          | Output control bit 3 |
| CNTL_OUT4        | H2-11         | Output control bit 4 |
| CNTL_OUT5        | H2-13         | Output control bit 5 |
| CNTL_OUT6        | H2-15         | Output control bit 6 |
| CNTL_OUT7        | H2-17         | Output control bit 7 |
| CNTL_OUT8        | H2-19         | Output control bit 8 |
| RGB_OUT0         | H2-27         | Output video bit 0   |
| RGB_OUT1         | H2-29         | Output video bit 1   |
| RGB_OUT2         | H2-31         | Output video bit 2   |
| RGB_OUT3         | H1-3          | Output video bit 3   |
| RGB_OUT4         | H1-5          | Output video bit 4   |
| RGB_OUT5         | H1-7          | Output video bit 5   |
| RGB_OUT6         | H1-9          | Output video bit 6   |
| RGB_OUT7         | H1-11         | Output video bit 7   |
| RGB_OUT8         | H1-13         | Output video bit 8   |
| RGB_OUT9         | H1-15         | Output video bit 9   |
| RGB_OUT10        | H1-17         | Output video bit 10  |
| RGB_OUT11        | H1-19         | Output video bit 11  |
| RGB_OUT12        | H1-21         | Output video bit 12  |
| RGB_OUT13        | H1-23         | Output video bit 13  |
| RGB_OUT14        | H1-25         | Output video bit 14  |
| RGB_OUT15        | H1-27         | Output video bit 15  |
| RGB_OUT16        | H1-29         | Output video bit 16  |
| RGB_OUT17        | H1-31         | Output video bit 17  |

position  of  JU5  to  activate  single-ended  outputs.  Drive the pin low by placing a shunt in the 1-2 position of JU5 to place the single-ended outputs in high impedance.

## Rising and Falling Input Latch Edge (R/ F )

The  MAX9218  has  a  selectable  rising  or  falling  output latch  edge  through  logic  setting  on  the  R/ F pin.  Drive the R/ F pin low by placing a shunt in the 1-2 position of jumper JU1 (see Table 1). Drive the R/ F pin high by placing a shunt in the 1-4 position of JU1.

## Frequency Range Setting (RNG1 and RNG0)

The parallel clock frequency range for the MAX9217 can be configured through jumpers JU14 and JU15. Place a shunt on JU14 and JU15 to drive RNG1 and RNG0 high, or leave JU14 and JU15 unconnected to drive RNG1 and RNG0 low. Refer to the MAX9217 IC data sheet for actual frequency settings.

The  operating  frequency  range  for  the  MAX9218  can be  configured  through  jumpers  JU2  and  JU3.  Place  a shunt in the 1-4 position of JU2 and JU3 to drive RNG1 and RNG0 high, or place a shunt in the 1-2 position of JU2 and JU3 to drive RNG1 and RNG0 low. Refer to the MAX9218 IC data sheet for actual frequency settings.

## Power-Down ( PWRDWN )

The power-down mode in the MAX9217 and MAX9218 puts the outputs in high impedance, stops the PLL, and reduces supply current to 50 F A or less.

The  MAX9217 PWRDWN pin  is  accessible  through header  H6-15.  Drive  the  pin  high  for  normal  operation of the MAX9217 or drive the pin low to power down the MAX9217.

The  MAX9218 PWRDWN pin  is  accessible  through jumper JU4 (see Table 1). Drive the pin high by placing a shunt in the 1-4 position of JU4 for normal operation. Drive the pin low by placing a shunt in the 1-2 position of JU4 to power down the MAX9218.

## Pseudo-Random Bit Sequence (PRBS) Mode

The MAX9217/MAX9218 EV kit offers the user an internal test  mode  to  quickly  check  full  functionality  and  verify the  quality  of  the  SerDes  link.  This  mode  is  called  the pseudo-random bit sequence, or PRBS mode.

The MAX9217 features an on-chip PRBS generator that can be utilized to generate a pseudo-random bit stream to  evaluate  the  quality  and  performance by comparing the output of the serializer (prior to the link/cable) with the input of the deserializer (after the link/cable).

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9217/MAX9218 Evaluation Kit

To  activate  this  feature,  the  MAX9217  must  first  enter power-down mode by driving H6-15 low. Place a shunt in the 2-3 position of JU7 and JU8. Activate the internal PRBS mode by applying a negative DC voltage (-1.0V to -3.0V) to the VNEG pad.

To  monitor  the  SerDes  signal  integrity,  connect  one channel of the digital oscilloscope with differential probe capabilities to OUT+ and OUT- signal lines from jumpers JU12  and  JU13  (MAX9217).  Repeat  the  same  test  for the deserializer (MAX9218) on signal lines IN+ and IN-, accessible through jumpers JU9 and JU10.

<!-- image -->

## Power Supplies

The MAX9217 is powered by connecting PVCC1, LVCC1, IVCC, and DVCC1 to a DC power supply at 3.0V to 3.6V. The MAX9217 can be configured to reduce wiring to the supply and ground pads by placing shunts on jumpers JU19,  JU20,  and  JU21.  The  MAX9218  is  powered  by applying  3.0V  to  3.6V  to  the  PVCC2,  LVCC2,  OVCC, and DVCC2 pads. The MAX9218 can be configured to reduce wiring to the supply and ground pads by placing shunts on jumpers JU16, JU17, and JU18.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX9217/MAX9218 Evaluation Kit

Figure 1a. MAX9217/MAX9218 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9217/MAX9218 Evaluation Kit

<!-- image -->

Figure 1b. MAX9217/MAX9218 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX9217/MAX9218 Evaluation Kit

Figure 2. MAX9217/MAX9218 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX9217/MAX9218 EV Kit PCB Layout-Component Side

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9217/MAX9218 Evaluation Kit

<!-- image -->

Figure 4. MAX9217/MAX9218 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX9217/MAX9218 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX9217/MAX9218 Evaluation Kit

Figure 6. MAX9217/MAX9218 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX9217/MAX9218 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600