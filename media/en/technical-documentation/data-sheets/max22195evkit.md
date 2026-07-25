<!-- lastmod 2022-08-02 -->
## MAX22195 Evaluation Kit

## General Description

The MAX22195 evaluation kit (EV kit) provides the hardware necessary to evaluate the MAX22195 high-speed, octal, industrial  digital  input  with  parallel  output  device.  The MAX22195 EV kit provides terminal blocks for all 8 inputs and  a  header  for  all  8  outputs  for  easy  monitoring  and evaluation. Eight field-side LEDs are provided to indicate the input status, and a READY LED to indicate the MAX22195 is operating normally.

Ordering Information appears at end of data sheet.

## MAX22195 EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Easy Evaluation of the MAX22195
- Parallel Output for Simultaneous Signal Delivery
- Configurable External VDD24 Voltage Monitoring
- Configured for IEC 61131-2 Type 1, 3
- Robust Design ±2kV Surge Tolerant Line-to-Line
- Withstand ±8kV Contact ESD, ±15kV Air Gap ESD
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

Evaluates: MAX22195

## MAX22195 Evaluation Kit

## System Block Diagram

<!-- image -->

│

Evaluates: MAX22195

## Quick Start

## Required Equipment

- MAX22195 EV kit
- Two 24V DC voltage supplies
- Oscilloscope

## Procedure

The EV kit is fully  assembled  and  ready  for  evaluation. The  MAX22195  is  configured  for  eight  Type  1  or  Type 3  inputs  (Terminal  Blocks T1  and T2).  Follow  the  steps below to verify the MAX22195 operation.

- 1) Verify all jumper settings are in default position from Table 1.
- 2) For initial testing, the MAX22195 EV kit is powered by a 24V DC voltage supply at VDD24 and GND.
- 3) Connect the DC power supply between the EV kit's VDD24 and GND\_TP1 test points. Set the DC power supply output to 24V, and then enable the output. Observe that, READY LED (yellow) on the EV kit is turned on, indicating the EV kit is powered up.
- 4) Connect the other 24V DC voltage supply between pin 8 and pin 7 of T1, or between IN1 and GND\_TP2 test points. Connect the oscilloscope probe to header J3, OP1 (pin 2) and GND (pin 1 or 10).
- 5) Set the DC power supply to 24V, and then enable the output. Observe that LED1 (green) is on and OP1 logic output transitions to high (high level is about 3.3V) on the oscilloscope.

NOTE: On the MAX22195 EV kit, the sequence of the input test points from top to bottom is as follows: IN5, IN6, IN7, IN8, IN1, IN2, IN3, and IN4. IN1 is located at the middle of the left side. Refer to the MAX22195 EV Kit Schematic and Layout for details.

## Table 1. MAX22195 EV Kit Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                             |
|----------|------------------|---------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Connect RDYEN to VDD3 to enable READY output                                                            |
| J1       | 2-3              | Connect RDYEN to GND to disable the READY output                                                        |
| J2       | 1-2*             | Connect EXTVM to GND to use internal threshold (14V, typical) for VDD24 voltage monitoring              |
| J2       | 1-3              | Connect EXTVM to external resistor divider to set external threshold for VDD24 voltage monitoring       |
| J2       | 1-4              | Connect EXTVM to VDD3 to disable VDD24 voltage monitoring at READY pin if the device is powered by VDD3 |

* Default Position

## Detailed Description of Hardware

The  MAX22195 EV kit  provides  a  proven  layout  for  an 8-channel digital input solution with parallel output using the  MAX22195. The EV kit supports IEC 61131-2 Type 1,  3  operation  and  can  be  configured  to  support  Type 2. This flexibility makes it easier to evaluate the system performance of the MAX22195.

## Power Supply

The  EV  kit  is  powered  by  the  24V  external  DC  supply,  connected  to  VDD24  and  GND\_TP1  test  points. The  MAX22195  has  an  integrated  regulator  to  provide 3.3V  output  at  VDD3  which  can  be  used  to  power  the digital isolators and other field-side circuits. Alternatively, if  an  external  24V  DC  supply  is  not  available,  the device can be powered using an external 3.0V-5.5V DC supply through the VDD3 and GND\_TP3 test points while leaving VDD24 test point unconnected (refer to Table 1 for jumper settings).

## RDYEN and READY Monitor

The  READY is  an  open-drain  PMOS  output  to  indicate that the MAX22195 is working properly. A READY LED is provided on the EV kit as a visual indicator of the signal status. When READY is low, the READY LED is off indicating that the device is not ready for normal operation. The READY output can also be monitored on READY\_TP test point.

The  RDYEN  is  used  to  enable  or  disable  the  READY output. Jumper J1 is provided on the EV kit: set J1 to 1-2 to enable the READY signal, set J1 to 2-3 to disable the READY signal (refer to Table 1 for jumper settings).

│

## External VDD24 Voltage Monitor

The EXTVM pin can be connected in 3 ways on the EV kit using jumper J2. Connect J2 to 1-2 to use internal threshold (14V, typical) for VDD24 voltage monitoring. Connect J2 to 1-4 to disable VDD24 voltage monitoring at READY pin if  the  EV  kit  is  powered by VDD3 using an external DC supply. Connect J2 to 1-3 to use external resistive divider (R12 and R13) to set the external threshold for VDD24 voltage  monitoring.  The  default  R12  and  R13  values set  the  VDD24  threshold  to  about  14V,  typical.  If  other VDD24 threshold is desired, resistors R12 and R13 can be changed accordingly. Refer to the MAX22195 IC data sheet for details.

## Type 1, 3 Inputs

The  MAX22195  EV  kit  is  configured  to  support  the  trip points (voltage and current) to satisfy the requirements of IEC 61131-2 Type 1 and Type 3 inputs. Resistor R11 sets the current limit value at 2.40mA and input resistors R1-R8 set  the  voltage  thresholds  to  ensure  compliance.  The input resistors R1-R8 are 1.5kΩ, 1.5W pulse withstanding resistors to support IEC 61000-4-5 Surge Tolerance up to ±1kV line-to-ground. A  separate  LED  for  each  input  port indicates the status of each input.

## Type 2 Inputs

The  MAX22195  EV  kit  can  be  configured  to  support Type 2 inputs. Type 2 inputs require a higher current limit (6mA,  minimum).  This  can  be  achieved  by  connecting two  MAX22195  inputs  in  parallel.  The  current  limit  for each  channel  is  set  to  a  nominal  3.97mA  by  changing resistor R11 to 5.2kΩ. To set the input voltage thresholds correctly,  input  resistors  R1-R8  need  to  be  changed  to 1kΩ, 1.5W pulse withstanding resistors. Install  resistors R14 to R17, 0Ω, to create a pair of inputs. Refer to the MAX22195 IC data sheet for details.

## REFDI Layout

The REFDI resistor is used to set the required input current limit of all input channels. Care must be taken during  the  layout  that  the  REFDI  resistor  and  REFDI  trace are routed far away from all field input traces, especially IN8, to limit the high voltage transients such as electrical fast transients or surge pulses to be coupled into REFDI circuitry.  A  ground  plane  is  recommended  to  be  placed between the REFDI trace and input traces to better shield the noise. On the MAX22195 EV kit, the REFDI resistor R11 is placed on the bottom layer while all input traces are routed on the top layer with GND layer in between. The REFDI via and trace are surrounded by solid ground plane  to  isolate  them  from  input  traces.  Refer  to  the MAX22195 EV Kit PCB Layout Diagrams for more details.

## IEC 61000-4 Immunity Compliance

The  typical  application  for  the  MAX22195  requires  it  to pass  basic  transient  immunity  standards  as  defined  by IEC  61000-4-x,  covering  -2  for  Electrostatic  Discharge (ESD),  -4  for  Electrical  Fast  Transient/Burst  (EFT), and  -5  for  Surge  Immunity.  The  MAX22195  EV  kit includes circuitry to support testing to these standards to support ±2kV Line-to-Line Surge, ±8kV Contact ESD, and ±15kV Air Gap ESD. Pulse withstanding Resistor R9 and TVS D1 (SMAJ33A) provide protection from Surge and ESD  voltage  applied  through  VDD24.  C6  is  a  1000pF safety rated Y capacitor placed between Protective Earth (PE) and field ground (GND) to improve transient immunity (EFT). Refer to Table 2 for MAX22195 EV kit transient immunity test results.

Table 2. MAX22195 EV Kit Transient Immunity Test Results

| TEST   | TEST                           | CONDITIONS                                                                                                                                                       | RESULT                                                                                      |
|--------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Surge  | Line-to-Line                   | IEC 61000-4-5, 1.2/50µs pulse, 40Ω+0.5µF CDN, minimum 1kΩ resistor in series with IN1-IN8                                                                        | ±2kV                                                                                        |
| Surge  | Line-to-Ground                 | IEC 61000-4-5, 1.2/50µs pulse, 40Ω+0.5µF CDN, minimum 1kΩ resistor in series with IN1-IN8                                                                        | ±1kV                                                                                        |
| Surge  | VDD24-to-Ground                | IEC 61000-4-5, 1.2/50µs pulse, TVS SMAJ33A (40Ω CDN) or SM30T39AY (0Ω CDN) between VDD24 and GND                                                                 | ±1kV                                                                                        |
| EFT    | Field Input                    | IEC 61000-4-4, 5kHz/100kHz, 15ms/0.75ms burst time, 300ms burst period, 1000pF Y capacitor between GND                                                           | Criterion A: READY and OP1-OP8 operate without degradation of performance                   |
| EFT    | Field Input                    | and Earth                                                                                                                                                        | Criterion B: OP1- OP8 operate without degradation of performance; READY signal is corrupted |
| EFT    | VDD24                          | IEC 61000-4-4, 5kHz/100kHz, 15ms/0.75ms burst time, 300ms burst period, TVS SMAJ33A or SM30T39AY between VDD24 and GND, 1000pF Y capacitor between GND and Earth | Criterion A: READY and OP1-OP8 operate without degradation of performance                   |
| ESD    | Field Input, Contact Discharge | IEC 61000-4-2, minimum 1kΩ resistor in series with IN1- IN8                                                                                                      | ±8kV                                                                                        |
| ESD    | Field Input, Air-Gap Discharge | IEC 61000-4-2, minimum 1kΩ resistor in series with IN1- IN8                                                                                                      | ±15kV                                                                                       |
| ESD    | VDD24, Contact Discharge       | IEC 61000-4-2, TVS SMAJ33A or SM30T39AY between VDD24 and GND                                                                                                    | ±8kV                                                                                        |
| ESD    | VDD24, Air-Gap Discharge       | IEC 61000-4-2, TVS SMAJ33A or SM30T39AY between VDD24 and GND                                                                                                    | ±15kV                                                                                       |

Figure 1. Terminal Block Connection and Input Test Points on the MAX22195 EV Kit

<!-- image -->

## Ordering Information

| PART           | TYPE                               |
|----------------|------------------------------------|
| MAX22195EVKIT# | EV Kit with MAX22195ATJ+ installed |

# Denotes RoHS compliant

│

## MAX22195 EV Kit Bill of Materials

| ITEM REF_DES      | DNI/DNP QTY MFG PART #   | DNI/DNP QTY MFG PART #                                                                | MANUFACTURER                          | VALUE             | DESCRIPTION                                                                                                                                         |
|-------------------|--------------------------|---------------------------------------------------------------------------------------|---------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 C1              | -                        | 1 C2012X7S2A105K125AB;GRJ21BC72A105KE11;CGA4J3 X7S2A105K125AB;GRM21BC72A105KE01       | TDK;MURATA;TDK                        | 1UF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                           |
| 2 C2, C4          | -                        | 2 CC0603KRX7R0BB104;GRM188R72A104KA35;GCJ188 R72A104KA01;HMK107B7104KA;06031C104KAT2A | YAGEO;MURATA;MURATA;TAIYO YUDEN;AVX   | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                         |
| 3 C3              | -                        | 1 C1608X7R1V105K080AC;CGA3E1X7R1V105K080AC                                            | TDK;TDK                               | 1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                            |
| 4 C6              | -                        | 1 GA352QR7GF102KW01                                                                   | MURATA                                | 1000PF            | CAP; SMT (2211); 1000PF; 10%; 250V; X7R; CERAMIC CHIP                                                                                               |
| 5 D1              | -                        | 1 SMAJ33A                                                                             | VISHAY GENERAL SEMICONDUCTOR          | 33V               | DIODE; TVS; SMA (DO-214AC); VRM=33V; IPP=7.5A TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN;                                                    |
| 6 EARTH           | -                        | 1                                                                                     | 5012 KEYSTONE                         | N/A               | BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                |
| 7 GND_TP1-GND_TP4 | -                        | 4                                                                                     | 5011 KEYSTONE                         | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |
| 8 IN1-IN8         | -                        | 8                                                                                     | 5125 KEYSTONE                         | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |
| 9 J1              | -                        | 1 PEC03SAAN                                                                           | SULLINS ELECTRONICS CORP.             | PEC03SAAN         | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                                                        |
| 10 J2             | -                        | 1 TSW-104-07-L-S                                                                      | SAMTEC                                | TSW-104-07-L-S    | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                                   |
| 11 J3             | -                        | 1 PEC10SAAN                                                                           | SULLINS ELECTRONICS CORP.             | PEC10SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS                                                                                          |
| 12 LED1-LED8      | -                        | 8 LTST-C193KGKT-5A                                                                    | LITE-ON ELECTRONICS INC.              | LTST-C193KGKT-5A  | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC                                                           |
| 13 R1-R8          | -                        | 8 CRCW25121K50FKEGHP                                                                  | VISHAY                                | 1.5K              | RES; SMT (2512); 1.5K; 1%; +/-100PPM/DEGK; 1.5W                                                                                                     |
| 14 R9             | -                        | 1 CRCW2512150RFKEGHP                                                                  | VISHAY                                |                   | 150 RES; SMT (2512); 150; 1%; +/-100PPM/DEGK; 1.5W                                                                                                  |
| 15 R10            | -                        | 1 CRG0603F10K                                                                         | TE CONNECTIVITY                       | 10K               | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                               |
| 16 R11            | -                        | 1 ERJ-3EKF8661                                                                        | PANASONIC                             | 8.66K             | RESISTOR; 0603; 8.66K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                            |
| 17 R12            | -                        | 1 ERJ-3EKF1603                                                                        | PANASONIC                             | 160K              | RES; SMT (0603); 160K; 1%; +/-100PPM/DEGC; 0.1W                                                                                                     |
| 18 R13            | -                        | 1 CRCW060310K0FK;ERJ-3EKF1002                                                         | VISHAY DALE;PANASONIC                 | 10K               | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM DIODE; LED; LY L29K SERIES; SMARTLED; YELLOW; SMT (1608);                                        |
| 19 READY          | -                        | 1 LY L29K-H1K2-26-Z                                                                   | OSRAM                                 | LY L29K-H1K2-26-Z | VF=1.8V; IF=0.02A                                                                                                                                   |
| 20 READY_TP       | -                        | 1                                                                                     | 5014 KEYSTONE                         | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                            |
| 21 SU1, SU2       | -                        | 2 S1100-B;SX1100-B;STC02SYAN                                                          | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                             |
| 22 T1, T2         | -                        | 2 250-408                                                                             | WAGO                                  | 250-408           | CONNECTOR; FEMALE; THROUGH HOLE; COMPACT TERMINAL STRIP WITH PUSH BUTTON; STRAIGHT; 8PINS                                                           |
| 23 U1             | -                        | 1 MAX22195ATJ+                                                                        | MAXIM                                 | MAX22195ATJ+      | EVKIT PART - IC; HIGH-SPEED; OCTAL; DI WPARALLEL OUTPUT; TQFN32-EP; PACKAGE CODE: T3255Y-6; PACKAGE LAND PATTERN: 90-0603; PACKAGE OUTLINE: 21-0140 |
| 24 VDD3, VDD24    | -                        | 2                                                                                     | 5010 KEYSTONE                         | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                               |
| 25 PCB            | -                        | 1 MAX22195                                                                            | MAXIM                                 | PCB               | PCB:MAX22195                                                                                                                                        |
| 26 MTH1-MTH4      | DNI                      | 4 1902B                                                                               | GENERIC PART                          | N/A               | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                                                |
| 27 MTH1-MTH4      | DNI                      | 4 P440.375                                                                            | GENERIC PART                          | N/A               | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                                                                   |
| 28 C5             | DNI                      | 1 CGA9N3X7S2A106K230KB                                                                | TDK                                   | 10UF              | CAP; SMT (2220); 10UF; 10%; 100V; X7S; CERAMIC CHIP                                                                                                 |
| 29 R14-R17        | DNP                      | 0 CRCW25120000Z0EGHP                                                                  | VISHAY DRALORIC                       |                   | 0 RES; SMT (2512); 0; JUMPER; 1.5W                                                                                                                  |
| 30 R18-R25        | DNP                      | 0 CRCW06030000ZS;MCR03EZPJ000;ERJ-3GEY0R00                                            | VISHAY DALE;ROHM;PANASONIC            |                   | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                              |
| TOTAL             |                          | 62                                                                                    |                                       |                   |                                                                                                                                                     |

Evaluates: MAX22195

## MAX22195 EV Kit Schematic

<!-- image -->

## MAX22195 EV Kit PCB Layout Diagrams

MAX22195 EV Kit-Top Silkscreen

<!-- image -->

MAX22195 EV Kit-Internal 2

<!-- image -->

MAX22195 EV Kit-Top Layer

<!-- image -->

MAX22195 EV Kit-Internal 3

<!-- image -->

│

## MAX22195 EV Kit PCB Layout Diagrams (continued)

MAX22195 EV Kit-Bottom Layer

<!-- image -->

MAX22195 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX22195 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/18            | Initial release                                                                                                                                                                                                                                                                                                             | -               |
|                 1 | 5/19            | Updated Procedure , Detailed Description of Hardware , Power Supply , RDYEN and READY Monitor , External VDD24 Voltage Monitor , Type 1 , 3 Inputs , Type 2 Inputs and IEC61000-4 Immunity Compliance sections, and Table 1 and Table 2; replaced the EV Kit Photo , Figure 1, Bill of Materials, Schematic, and PCB Layout | 1, 3-9          |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitr\ and speci¿cations without notice at an\ time.

│

Evaluates: MAX22195