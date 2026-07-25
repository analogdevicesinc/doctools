<!-- lastmod 2022-08-02 -->
## MAX14900E Evaluation Kit

## General Description

The  MAX14900E  octal  high-speed,  industrial,  high-side switch  evaluation  kit  (EV  kit)  is  a  fully  assembled  and tested  surface-mount  printed  circuit  board  (PCB)  that demonstrates  the  capabilities  of  the  MAX14900E  IC  to drive industrial-grade signals.

This  EV  kit  demonstrates  operation  in  all  MAX14900E modes.  In  parallel  mode,  jumpers  allow  for  arbitrary configuration. In serial mode, or parallel mode with serial monitoring, attach a control circuit to the appropriate test points, as detailed below.

## MAX14900E EV Kit PCB Photo

<!-- image -->

<!-- image -->

## Features

- Stand-Alone Operation in Parallel Mode
- SPI-Controlled for Serial Mode/Monitored-Parallel Mode
- Built-In 5V Regulator
- Surge-Compliance Clamp Diodes Included
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX14900E

## Quick Start

## Recommended Equipment

- MAX14900E EV kit
- 24V, 2A power supply
- Function generator
- Oscilloscope
- 50Ω, 15W (minimum) load resistor
- 5kΩ resistor
- Voltmeter
- Bench tie clips with spring clips on both ends

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Preset the 24V power supply to 24V and disable the power supply.
- 2) Connect the ground of the 24V power supply to jumper J2.
- 3) Connect the positive supply of the 24V power supply to J1.
- 4) Ensure that the shunt for J15 (EN) is installed.
- 5) Ensure that the shunt for J16 (connect V L  to 5V) is installed.
- 6) Ensure that J22 (PUSHPL) is installed.
- 7) Ensure that all other shunts are not installed.
- 8) Preset the function generator to pulse, 20ms pulse width, 500ms repetition rate, low-voltage 0V, highvoltage 5V, and disable the pulse generator.
- 9) Connect a 5kΩ resistor between O1 (TP11) and GND (TP12).
- 10)  Connect an oscilloscope between O1 (TP11) and GND (TP12).
- 11)  Connect the function generator between IIN1 (TP1) and GND (TP10).
- 12)  Enable the 24V power supply.
- 13)  Enable the function generator.
- 14)  Observe the output waveform on the oscilloscope.
- 15)  Disable the function generator.
- 16) Change the resistor from 5kΩ to 50Ω.
- 17)  Remove the shunt on J22 (PUSHPL).
- 18)  Enable the function generator.

## Evaluates: MAX14900E

19)  Observe the output waveform on the oscilloscope.

## Detailed Description

The MAX14900E octal, high-speed, industrial, high-side switch  EV  kit  is  a  fully  assembled  and  tested,  surfacemount  PCB  that  demonstrates  the  capabilities  of  the MAX14900E IC to drive industrial-grade signals.

This  EV  kit  demonstrates  operation  in  all  MAX14900E modes.  In  parallel  mode,  jumpers  allow  for  arbitrary configuration.  In  serial  mode,  or  in  parallel  mode  with serial  monitoring,  attach  a  control  circuit  to  the  appropriate test  points.  The  EV  kit  operates  from  a  single  24V (11V to 36V) main supply, and an optional logic supply. Through  parallel  or  serial  control,  the  IC  switches  the 24V  supply  to  any  combination  of  eight  independent outputs.  Besides  the  device  itself,  there  are  plenty  of attach points, as well as numerous jumpers. The EV kit has little added circuitry.

TVS diode D18 protects the device from surges that may appear  on  the  supply  line  through  the  clamp  diodes. Note  that  D18  will  likely  be  destroyed  if  the  user  applies a  voltage  greater  than  36V  on  the  24V  supply.  Sixteen silicon diodes (D2-D17) protect the individual MAX14900E power  outputs  from  severe  inductive  kickback  events, as  well  as  surges.  A  linear  regulator,  MAX5084  (U2), provides  an  optional  default  5V  in  case  the  user  does not  wish  to  provide  a  logic-level  supply  externally.  LED1 (FAULT) can be optionally  configured  to  light  whenever the  device  indicates  a  fault  condition  on  its FAULT pin. LED2 (CERR) can be optionally configured to light when the device detects a CRC error in serial mode.

## Input Power Supply

The EV kit obtains its primary power from a bench supply whose positive voltage attaches to J1 (24V), and whose return voltage attaches to J2 (GND). This supplies power only to the MAX14900E.

## 5V Power Supply

The device requires a 5V supply on pin 30 (V5), supplied by the 5V linear regulator (U2) for the user's convenience.

## Logic Power Supply

Most of the device's digital pins have their input thresholds and their output drive levels defined by the voltage on pin 13 (V L ). This V L  supply can come from two places. First, the built-in 5V regulator can supply V L  by attaching a shunt to J16 (connect V L  to 5V), ensuring that no shunt is  attached to J3 (V L ).  When attaching external circuitry to control and monitor the device, attach a voltage representing the external logic to TP33 (V L ), and attach a shunt to J3 (V L ) between the center and right posts.

## Paralleling Outputs

The EV kit makes it easy to parallel  up  to  four  outputs together to deal with higher loads. J8, J10, and J12, when shunted,  connect  outputs  O1-O4  together  in  various configurations. Similarly, J9, J11, and J13, when shunted, connect  outputs  O5-O8  in  various  configurations.  To determine  which  outputs  short  to  what,  see  Table  1  for jumper and output information. The copper traces on the board are also evident from output to each jumper.

## Dedicated Configuration Pins

J15  (EN),  J20  (FLTR),  and  J22  (PUSHPL)  set  their respective pins high. When not shunted, these pins are driven  logic-low  from  individual  pulldowns  inside  the device.

## Parallel Mode

To put the EV kit in parallel mode, ensure that no shunt is attached to J18 (SRIAL). Fault conditions can be monitored in  two  ways.  First,  attach  a  shunt  between  the  right  and center pins of J23. LED1 glows red whenever the device reports a fault condition. Otherwise, a fault condition can be monitored by attaching external monitoring circuitry to TP31 (FAULT). The MAX14900E FAULT pin is open-drain.

If the external circuitry attached to TP31 ( FAULT ) has a pullup, ensure that J23 has no shunts attached. If the external circuitry has no pullup, attach a shunt to J23 between the  left  and  center  posts.  External  circuitry  drives  the parallel inputs at TP1-TP8. See Table 3, describing how these  control  signals  on  TP1-TP8  determine  the  state of the outputs O1 through O8. In addition, three signals control how the TP1-TP8 control inputs are interpreted, as detailed in Table 4.

## Serial Mode Through External Circuitry

To  drive  the  serial  SPI  interface  of  the  device  through external  circuitry,  ensure  that  J4-J7  each  have  shunts attached between the center and right posts. Then, attach the corresponding external SPI controls with TP34-TP37. The state of the SRIAL pin must be set appropriately. If running in monitored-parallel mode, SRIAL must be low (J18 has no shunt). If running in serial mode, J18 must be shunted.

## Dual-Function Configuration Pins

When running in serial mode (not monitored-parallel mode or  parallel  mode),  IN1,  IN3,  IN7,  and  IN8  become  extra configuration pins. These pins are driven logic-low through weak internal pulldowns inside the device, but can be set high attaching shunts to J14, J17, J19, or J21.

Refer  to  the  MAX14900E  IC  data  sheet  for  a  detailed description  of  these  pin  functions. Additionally,  in  serial mode,  IN4  becomes  an  open-drain  output,  indicating  a CRC error in a received serial-command stream. To see the state of this pin in serial mode, attach a shunt between the left and center posts of J24. LED2 glows red in case of a CRC error.

## MAX14900E Evaluation Kit

Table 1. Jumper Description (J3-J32)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                          |
|----------|------------------|----------------------------------------------------------------------|
|          | LEFT             | Do not use                                                           |
| J3       | RIGHT            | V L powered by TP33 (V L )                                           |
|          | OPEN*            | V L powered by the 5V regulator (see J16)                            |
|          | LEFT             | Do not use                                                           |
| J4       | RIGHT            | SCLK driven by signal on TP34 (SCLK)                                 |
|          | OPEN*            | SCLK not driven                                                      |
|          | LEFT             | Do not use                                                           |
| J5       | RIGHT            | SDI driven by signal on TP35 (MOSI)                                  |
|          | OPEN*            | SDI not driven                                                       |
|          | LEFT             | Do not use                                                           |
| J6       | RIGHT            | SDO drives signal on TP36 (MISO)                                     |
|          | OPEN*            | SDO not driven                                                       |
|          | LEFT             | Do not use                                                           |
| J7       | RIGHT            | CS driven by signal on TP37 ( CS )                                   |
|          | OPEN*            | CS not driven                                                        |
|          |                  | Outputs TP11 (O1) and TP13 (O2) connected                            |
| J8       | SHUNTED OPEN*    | Outputs TP11 (O1) and TP13 (O2) separate                             |
|          | SHUNTED          | Outputs TP20 (O5) and TP23 (O6) connected                            |
| J9       |                  |                                                                      |
|          | OPEN*            | Outputs TP20 (O5) and TP23 (O6) separate                             |
| J10      | SHUNTED          | Outputs TP13 (O2) and TP15 (O3) connected                            |
|          | OPEN*            | Outputs TP13 (O2) and TP15 (O3) separate                             |
| J11      | SHUNTED          | Outputs TP23 (O6) and TP25 (O7) connected                            |
|          | OPEN*            | Outputs TP23 (O6) and TP25 (O7) separate                             |
| J12      | SHUNTED          | Outputs TP15 (O3) and TP18 (O4) connected                            |
|          | OPEN*            | Outputs TP15 (O3) and TP18 (O4) separate                             |
| J13      | SHUNTED          | Outputs TP25 (O7) and TP28 (O8) connected separate                   |
|          | OPEN*            | Outputs TP25 (O7) and TP28 (O8)                                      |
|          | SHUNTED          | TP1 (IN1) pulled to V L                                              |
| J14      | OPEN*            | TP1 (IN1) internally pulled weakly to ground                         |
| J15      | SHUNTED*         | EN pulled to V L                                                     |
|          | OPEN             | EN internally pulled weakly to ground                                |
| J16      | SHUNTED*         | Power V L from the built-in 5V regulator                             |
|          | OPEN             | Power V L according to J3                                            |
| J17      | SHUNTED          | TP3 (IN3) pulled to V L                                              |
|          | OPEN*            | TP3 (IN3) internally pulled weakly to ground                         |
| J18      | SHUNTED          | SRIAL pulled to V L                                                  |
|          | OPEN*            | SRIAL internally pulled weakly to ground                             |
| J19      | SHUNTED OPEN*    | TP7 (IN7) pulled to V L TP7 (IN7) internally pulled weakly to ground |

Evaluates: MAX14900E

Table 1. Jumper Description (J3-J32) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| J20      | SHUNTED          | FLTR pulled to V L                           |
| J20      | OPEN*            | FLTR internally pulled weakly to ground      |
| J21      | SHUNTED          | TP8 (IN8) pulled to V L                      |
| J21      | OPEN*            | TP8 (IN8) internally pulled to ground        |
| J22      | SHUNTED*         | PUSHPL pulled to V L                         |
| J22      | OPEN             | PUSHPL internally pulled to ground           |
| J23      | LEFT             | FAULT output pulled to V L with 10KΩ         |
| J23      | RIGHT*           | FAULT output state indicated by LED1 (FAULT) |
| J23      | OPEN             | FAULT output not pulled up                   |
| J24      | LEFT             | IN4 pulled to V L with 10KΩ                  |
| J24      | RIGHT            | IN4 state indicated by LED2 (CERR)           |
| J24      | OPEN*            | IN4 not pulled up                            |
| J25-J32  | SHUNTED          | Do not use                                   |
| J25-J32  | OPEN*            | Do not use                                   |

*Default position.

## Table 2. Test Point Description

| TEST POINT   | DESCRIPTION                     |
|--------------|---------------------------------|
| TP1 (IN1)    | Drive IN1 when in parallel mode |
| TP2 (IN2)    | Drive IN2 when in parallel mode |
| TP3 (IN3)    | Drive IN3 when in parallel mode |
| TP4 (IN4)    | Drive IN4 when in parallel mode |
| TP5 (IN5)    | Drive IN5 when in parallel mode |
| TP6 (IN6)    | Drive IN6 when in parallel mode |
| TP7 (IN7)    | Drive IN7 when in parallel mode |
| TP8 (IN8)    | Drive IN8 when in parallel mode |
| TP9 (GND)    | Ground attach point             |
| TP10 (GND)   | Ground attach point             |
| TP11 (O1)    | Connect a load to O1 here       |
| TP12 (GND)   | Connect the O1 return here      |
| TP13 (O2)    | Connect a load to O2 here       |
| TP14 (GND)   | Connect the O2 return here      |
| TP15 (O3)    | Connect a load to O3 here       |
| TP16 (GND)   | Connect the O3 return here      |
| TP17 (SRIAL) | Drive SRIAL here                |
| TP18 (O4)    | Connect a load to O4 here       |
| TP19 (GND)   | Connect the O4 return here      |
| TP20 (O5)    | Connect a load to O5 here       |

Evaluates: MAX14900E

| TEST POINT     | DESCRIPTION                                              |
|----------------|----------------------------------------------------------|
| TP21 (GND)     | Connect the O5 return here                               |
| TP22 (PUSHPL)  | Drive PUSHPL here (see also J22)                         |
| TP23 (O6)      | Connect a load to O6 here                                |
| TP24 (GND)     | Connect the O6 return here                               |
| TP25 (O7)      | Connect a load to O7 here                                |
| TP26 (GND)     | Connect the O7 return here                               |
| TP27 (FLTR)    | Drive FLTR here (see also J20)                           |
| TP28 (O8)      | Connect a load to O8 here                                |
| TP29 (GND)     | Connect the O8 return here                               |
| TP30 (EN)      | Drive EN here (see also J15)                             |
| TP31 ( FAULT ) | Indicate the state of FAULT here                         |
| TP32 (GND)     | Digital interface ground attach point                    |
| TP33 (V L )    | Connect an external V L supply here (see also J3 and J6) |
| TP34 (SCLK)    | Drive optional SPI clock here                            |
| TP35 (MOSI)    | Drive optional SPI MOSI here                             |
| TP36 (MISO)    | Receive optional SPI MISO here                           |
| TP37 ( CS )    | Drive optional SPI CS here                               |
| TP38 (GND)     | SPI interface ground attach point                        |

│

## Table 3. Parallel Driving Truth Table

|           | O_ STATE   | O_ STATE   |
|-----------|------------|------------|
| TP_ (IN_) | PUSH-PULL  | HIGH-SIDE  |
| 0         | Low        | Off        |
| 1         | High       | On         |

## Table 4. Global Configuration Inputs

| INPUT   | CONFIGURATION FUNCTION                                                                                                      |
|---------|-----------------------------------------------------------------------------------------------------------------------------|
| FLTR    | Enables anti-glitch filtering on all logic inputs TP1-TP8 0 = Glitch filtering disabled 1 = Glitch filtering enabled        |
| PUSHPL  | Configures all O1-O8 outputs as either push-pull or high-side 0 = All drivers high-side mode 1 = All drivers push-pull mode |
| EN      | Enables normal operation of all O1-O8 outputs 0 = All outputs high impedance 1 = Normal operation                           |

│

Evaluates: MAX14900E

Evaluates: MAX14900E

Figure 1. MAX14900E EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

Evaluates: MAX14900E

Figure 2. MAX14900E EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX14900E

Figure 3. MAX14900E EV Kit PCB Layout, Internal Plane 1-GND

<!-- image -->

Evaluates: MAX14900E

Figure 4. MAX14900E EV Kit PCB Layout-Mid-Layer 1

<!-- image -->

│

Evaluates: MAX14900E

Figure 5. MAX14900E EV Kit PCB Layout, Internal Plane 2-GND

<!-- image -->

│

Evaluates: MAX14900E

Figure 6. MAX14900E EV Kit PCB Layout, Internal Plane 3-V24V

<!-- image -->

│

## Evaluates: MAX14900E

Figure 7. MAX14900E EV Kit Component Placement Guide-Bottom Layer

<!-- image -->

## Component List and Schematic

See  the  following  links  for  component  information  and schematics:

- MAX14900E EV BOM
- MAX14900E EV Schematic

Evaluates: MAX14900E

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14900DEVBRD# | EV Kit |

#Denotes RoHS compliant.

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX14900E

<!-- image -->

## BILL OF MATERIALS (BOM)

| DESIGNATOR                                                                                                                       | QTY DESCRIPTION                     | MFG      | MFG P/N            |
|----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------|--------------------|
| C1, C11, C15                                                                                                                     | 3 10uF 10V 10% X5R 1206             | Kemet    | C1206C106K8RACTU   |
| C2                                                                                                                               | 1 10uF 50V 20% X7R 2220             | TDK      | C5750X7R1H106M     |
| C3-C10                                                                                                                           | 8 0.1uF 50V 10% X7R 0603            | Murata   | GRM188R71H104KA93D |
| C12, C14, C16                                                                                                                    | 3 0,1uF 16V 10% X7R 0603            | AVX      | 0603YC104KAZ2A     |
| C13                                                                                                                              | 1 1uF 16V 10% X7R 0603              | AVX      | 0603YC105KAT2A     |
| C17                                                                                                                              | 1 Alum 330uF 20% SMD                | Pana     | EEEFK1H331AQ       |
| C18-C21                                                                                                                          | 4 1uF 50V 10% X7R 1206              | TDK      | C3216X7R1H105K     |
| D2-D17                                                                                                                           | 16 Diode Gen Purp 50V 2A SMA        | On Semi  | MURA205T3G         |
| D18                                                                                                                              | 1 TVS Diode 33VWM 58VC SMC          | STMicro  | SM30T39AY          |
| J1-J2                                                                                                                            | 2 STD Uninsulated Banana Jack       | Pomona   | Model 3267         |
| J3-J7, J23-J24                                                                                                                   | 7 Conn Header 50POS .100" Sngl Tin  | Various  |                    |
| J8-J22, J25-J32                                                                                                                  | 23 Conn Header 50POS .100" Sngl Tin | Various  |                    |
| LED1-LED2                                                                                                                        | 2 LED Red Clear 1206                | Lite-On  | LTST-C150CKT       |
| P1                                                                                                                               | 1 Conn Header .100 Dual 72POS       | Various  |                    |
| R1-R2, R4, R7-R22                                                                                                                | 19 RES 10K Ohm 1/10W 5% 0603        | Pana     | ERJ-3GEYJ103V      |
| R3                                                                                                                               | 1 RES 56.0K Ohm 1/10W 1% 0603       | Pana     | ERJ-3EKF5602V      |
| R5-R6                                                                                                                            | 2 RES 1.0K Ohm 1/10W 5% 0603        | Pana     | ERJ-3GEYJ102V      |
| TP1-TP8, TP11, TP13, TP15, TP17- TP18, TP20, TP22-TP23, TP25, TP27- TP28, TP30-TP31, TP34-TP37 TP9-TP10, TP12, TP14, TP16, TP19, | 25 Test Point PC Multi Purpose Yel  | Keystone | 5014               |
| TP21, TP24, TP26, TP29, TP32, TP38                                                                                               | 12 Test Point PC Multi Purpose Blk  | Keystone | 5011               |
| TP33                                                                                                                             | 1 Test Point PC Multi Purpose Red   | Keystone | 5010               |
| U1                                                                                                                               | 1 MAX14900EAGM+                     | Maxim    | MAX14900EAGM+CKT   |
| U2                                                                                                                               | 1 MAX5084ATT+                       | Maxim    | MAX5084ATT+        |
| U3                                                                                                                               | 1 MAX7317ATE+                       | Maxim    | MAX7317ATE+        |
| U4                                                                                                                               | 1 Bus Buff Tri-St N-Inv SOT23-5     | TI       | SN74AHC1G125DBVR   |