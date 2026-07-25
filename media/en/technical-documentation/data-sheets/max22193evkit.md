<!-- lastmod 2022-11-22 -->
## MAX22193 Evaluation Kit

## General Description

The MAX22193 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX22193,  a  high-speed,  quad, industrial digital input with parallel output device.

The MAX22193 EV kit provides a terminal block for all four inputs and a header for all four outputs for easy monitoring and  evaluation.  Four  field-side  LEDs  are  provided  to indicate  the  input  status,  as  well  as  a  READY  LED  to indicate the MAX22193 is operating normally.

Ordering Information appears at end of data sheet.

## Features

- Easy Evaluation of the MAX22193
- Configured for IEC 61131-2 Type 1/3
- Support IEC 61131-2 Type 2 on Signal Channel
- Parallel Output for Simultaneous Signal Delivery
- Configurable External V DD24  Voltage Monitoring
- Robust Design with ±2kV Input Surge Protection
- Withstands ±8kV Contact Electrostatic Discharge (ESD) and ±15kV Airgap ESD
- Fully Assembled and Tested
- Proven PCB Layout

## MAX22193 EV Kit Block Diagram

Figure 1. MAX22193 EV Kit Block Diagram

<!-- image -->

## EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX22193

## MAX22193 Evaluation Kit

## Quick Start

## Required Equipment

- MAX22193EVKIT#
- Two 24V DC voltage supplies
- Digital multimeter and oscilloscope

## Procedure

The MAX22193 EV kit is fully assembled and tested. The EV kit is configured for four Type 1 or Type 3 inputs. Follow the steps to verify operation of the MAX22193.

1.  Verify that all jumper settings are in their default positions as shown in Table 1 and Figure 2 .
2.  Conn ect the DC power supply between the EV kit's VDD24 and GND test points. Set the DC power supply output to 24V and then enable the output. Observe that the READY LED (DS5, yellow) on the EV kit is turned on, indicating that the EV kit is powered up normally.
3.  Connect another 24V DC voltage supply to input channel 1 between the TP1 and GND test points. Connect the oscilloscope probe to header J2 between OP1 (pin 2) and GND (pin 1 or 6).
4.  Set the voltage supply to 24V and then enable the output. Observe that LED1 (green) is on and OP1 logic output transitions to high (3.3V, typ) on the oscilloscope.
5.  Repeat steps 4 and 5 for input channels 2, 3, and 4.

NOTE : On the MAX22193 EV kit, the sequence of the input test points from top to bottom is as follows: IN3, IN4, IN1, and IN2. See the MAX22193 EV Kit Schematic and Layout for details.

## Table 1. MAX22193 EV Kit Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                        |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------|
| J4       | 1-2*             | Connect RDYEN to V DD3 to enable the READY output.                                                                 |
| J4       | 2-3              | Connect RDYEN to GND to disable the READY output.                                                                  |
| J5       | 1-2*             | Connect EXTVM to GND to use internal threshold (14V, typical) for V DD24 voltage monitoring.                       |
| J5       | 1-3              | Connect EXTVM to external resistor divider to set external threshold for V DD24 voltage monitoring.                |
| J5       | 1-4              | Connect EXTVM to V DD3 to disable V DD24 voltage monitoring at the READY pin when the device is powered by V DD3 . |

Evaluates: MAX22193

## Evaluates: MAX22193

## Detailed Description of Hardware

The  MAX22193  EV  kit  provides  a  proven  layout  for  a  4-channel  digital  input  solution  with  parallel  output  using  the MAX22193. The EV kit supports IEC 61131-2 Type 1, 3 operation and can be configured to support Type 2. This flexibility makes it easier to evaluate the system performance of the MAX22193.

## Power Supply

The EV kit is powered by the 24V external DC supply, connected to VDD24 and GND test points. The MAX22193 has an integrated voltage regulator to provide a 3.3V output at V DD3 , which can be used to power the digital isolators or other field-side circuits. Alternatively, if an external 24V DC supply is not available, the device can be powered using an external 3.0V to 5.5V DC supply connected to VDD3 and GND test points while leaving the VDD24 test point unconnected.

## READY and RDYEN

READY is an open-drain PMOS output to indicate that the MAX22193 is working normally. A READY LED (DS5) is provided on the EV kit as a visual indicator of the signal status. When READY is low, the READY LED is off indicating that the device is not ready for operation. The READY output can also be monitored on the READY\_TP test point.

RDYEN is used to enable or disable the READY output. Jumper J4 on the EV kit is used to set the RDYEN; set J1 to the 1-2 position to enable the READY signal and set to the 2-3 position to disable it (see Table 1 for jumper settings).

## External VDD24 Voltage Monitor

The EXTVM pin can be connected in three ways on the EV kit using jumper J5:

- Connect J5 to the 1-2 position to use internal threshold (14V (typ)) for V DD24  voltage monitoring.
- Connect J5 to the 1-4 position to disable VDD24 voltage monitoring at the READY pin if the EV kit is powered by V DD3 using an external DC supply.
- Connect J5 to the 1-3 position to use an external resistive divider (R12 and R13) to set the external threshold for VDD24  voltage monitoring. The default R12 and R13 values set the V DD24  threshold to about 14V (typ). If another VDD24  threshold is desired, resistors R12 and R13 can be changed accordingly.

See Table 1 for jumper settings. Refer to the MAX22193 IC data sheet for more information on the EXTVM pin.

## Type 1/3 Inputs

The MAX22193 EV kit is configured to support the trip points (voltage and current) to satisfy the requirements of IEC 61131-2 Type 1 and Type 3 inputs. Resistor R10 sets the current limiter at a nominal 2.40mA and input resistors R5 to R8 set the voltage thresholds to ensure compliance. The input resistors R5 and R6 are 1.5kΩ, 1.5W pulse withstanding resistors to support IEC 61000-4-5 surge tolerance up to ±2kV line-to-ground and line-to-line. The input resistors R7 and R8 are paired with TVS diodes D1 and D2 to protect the MAX22193 from surge transients. A separate LED for each input port indicates the status of each input.

## Type 2 Inputs

The MAX22193 EV kit can be configured to support Type 2 inputs. Type 2 inputs require a higher current limit (6mA, minimum). The current limiter for each channel is set to a nominal 7mA by reducing resistor R10 to 6kΩ. To set the input voltage thresholds correctly , input resistors R5 to R8 need to be reduced to 470Ω.

## REFDI Layout

The REFDI resistor is used to set the required input current limit of all input channels. Care must be taken during the layout that the REFDI resistor and REFDI trace are routed far away from all field input traces, especially IN4, to limit the high voltage transients such as electrical fast transients or surge pulses to be coupled into REFDI circuitry. A ground plane  is  recommended  to  be  placed  between  the  REFDI  trace  and  input  traces  to  better  shield  the  noise.  On  the MAX22193 EV kit,  the  REFDI  trace  is  surrounded  by  a  solid  ground  plane  to  isolate  it  from  input  traces.  See  the MAX22193 EV kit PCB Layout for more information.

## MAX22193 Evaluation Kit

## Evaluates: MAX22193

## IEC 61000-4-X Immunity Compliance

The typical application for the MAX22193 requires it to pass basic transient immunity standards as defined by IEC 610004-X, covering -2 for electrostatic discharge (ESD) and -5 for surge immunity. The MAX22193 EV kit includes circuitry to support testing these standards up to ±2kV line-to-ground and line-to-line surge, ±8kV contact ESD, and ±15kV air gap ESD. TVS diode D3 (SMAJ33CA) provides protection from surge and ESD voltages applied at V DD24 . A Schottky diode D4  (PMEG4005EH) provides  reverse  current  protection  at  V DD24 .  C1  is  a  3300pF  safety  rated  Y  capacitor  placed between protective earth (PE) and field ground (GND) to improve transient immunity. See Table 2 for the MAX22193 EV kit transient immunity test results.

## Table 2. MAX22193 EV Kit Transient Immunity Test Results

Figure 2. MAX22193 EV Kit Terminal Block Connections, Input Test Points, and Jumper Settings

| TEST   | TEST              | CONDITION                                                                            | RESULT   |
|--------|-------------------|--------------------------------------------------------------------------------------|----------|
| Surge  | Line-to-line      | IEC 61000-4- 5, 1.2/50μs, 40Ω + 0.5μF CDN, minimum 470Ω , 1.5W pulse-                | ±2kV     |
| Surge  | Line-to-ground    | withstanding resistors in series with IN1-IN4, or SMAJ33CA between IN_ and ground.   | ±2kV     |
| Surge  | V DD24 -to-ground | IEC 61000-4- 5, 1.2/50μs, 40Ω + 0.5μF CDN, SMAJ33CA between V DD24 and ground.       | ±1kV     |
| ESD    | IN_, Contact      | IEC 61000-4-2, minimum 470 Ω , 1.5W pulse-withstanding resistors in series with IN1- | ±8kV     |
| ESD    | IN_, Airgap       | IN4, or SMAJ33CA between IN_ and ground.                                             | ±15kV    |
| ESD    | V DD24 , Contact  | IEC 61000-4-2, SMAJ33CA between IN_ and ground.                                      | ±8kV     |
| ESD    | V DD24 , Airgap   | IEC 61000-4-2, SMAJ33CA between IN_ and ground.                                      | ±15kV    |

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22193EVKIT# | EV Kit |

#Denotes RoHS-compliant.

Evaluates: MAX22193

## MAX22193 EV Kit Bill of Materials

|   ITEM | REF_DES   | DNP   |   QTY | MFG PART #                                                                          | MFG                                   | VALUE               | DESCRIPTION                                                                                |
|--------|-----------|-------|-------|-------------------------------------------------------------------------------------|---------------------------------------|---------------------|--------------------------------------------------------------------------------------------|
|      1 | C1        | -     |     1 | VJ2220Y332KXUSTX 1;GA355QR7GF332K W01                                               | VISHAY VITRAMON;M URATA               | 3300PF              | CAP; SMT (2220); 3300PF; 10%; 250V; X7R; CERAMIC                                           |
|      2 | C2        | -     |     1 | C1608X7R1V105K08 0AC                                                                | TDK                                   | 1UF                 | CAP; SMT (0603); 1UF; 10%; 35V; X7R; CERAMIC                                               |
|      3 | C3        | -     |     1 | CGA9N3X7S2A106K 230KB                                                               | TDK                                   | 10UF                | CAP; SMT (2220); 10UF; 10%; 100V; X7S; CERAMIC                                             |
|      4 | C4, C6    | -     |     2 | CC0603KRX7R0BB1 04;GRM188R72A104 KA35;HMK107B7104 KA;06031C104KAT2 A;GRM188R72A104K | YAGEO;MUR ATA;TAIYO YUDEN;AVX; MURATA | 0.1UF               | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                            |
|      5 | C5        | -     |     1 | C2012X7S2A105K12 5AB;GRJ21BC72A10 5KE11;GRM21BC72A 105KE01                          | TDK;MURATA ;MURATA                    | 1UF                 | CAP; SMT (0805); 1UF; 10%; 100V; X7S; CERAMIC                                              |
|      6 | D1-D3     | -     |     3 | SMAJ33CA                                                                            | VISHAY GENERAL SEMICONDU CTOR         | 33V                 | DIODE; TVS; SMA (DO-214AC); VRM=33V; IPP=7.5A                                              |
|      7 | D4        | -     |     1 | PMEG4005EH                                                                          | NXP                                   | PMEG4 005EH         | DIODE; SCH; SMT (SOD-123F); PIV=40V; IF=0.5A                                               |
|      8 | DS5       | -     |     1 | LY L29K-H1K2-26-Z                                                                   | OSRAM                                 | LY L29K- H1K2- 26-Z | DIODE; LED; LY L29K SERIES; SMARTLED; YELLOW; SMT (1608); VF=1.8V; IF=0.02A                |
|      9 | J1        | -     |     1 | 250-408                                                                             | WAGO                                  | 250-408             | CONNECTOR; FEMALE; THROUGH HOLE; COMPACT TERMINAL STRIP WITH PUSH BUTTON; STRAIGHT; 8PINS  |
|     10 | J2        | -     |     1 | PEC06SAAN                                                                           | SULLINS ELECTRONIC S CORP.            | PEC06 SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS                                  |
|     11 | J4        | -     |     1 | PCC03SAAN                                                                           | SULLINS                               | PCC03 SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC   |
|     12 | J5        | -     |     1 | TSW-104-07-L-S                                                                      | SAMTEC                                | TSW- 104-07- L-S    | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS          |
|     13 | LED1-LED4 | -     |     4 | LTST-C193KGKT-5A                                                                    | LITE-ON ELECTRONIC S INC.             | LTST- C193K GKT-5A  | DIODE; LED; STANDARD; YELLOW- GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC |
|     14 | R5, R6    | -     |     2 | RPC2512JT1K50                                                                       | STACKPOLE ELECTRONIC S INC.           | 1.5K                | RES; SMT (2512); 1.5K; 5%; +/- 100PPM/DEGC; 1.5000W;                                       |
|     15 | R7, R8    | -     |     2 | CRCW06031K50JN                                                                      | VISHAY DALE                           | 1.5K                | RES; SMT (0603); 1.5K; 5%; +/- 200PPM/DEGK; 0.1000W                                        |
|     16 | R9        | -     |     1 | CRG0603F10K                                                                         | TE CONNECTIVI TY                      | 10K                 | RES; SMT (0603); 10K; 1%; +/- 100PPM/DEGC; 0.1000W                                         |
|     17 | R10       | -     |     1 | CRCW060318K0FK                                                                      | VISHAY DALE                           | 18K                 | RES; SMT (0603); 18K; 1%; +/- 100PPM/DEGC; 0.1000W                                         |

## MAX22193 Evaluation Kit

## Evaluates: MAX22193

## MAX22193 Evaluation Kit

|   18 | R12                  | -   |   1 | ERJ-3EKF1603                                                  | PANASONIC                               | 160K      | RES; SMT (0603); 160K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                      |
|------|----------------------|-----|-----|---------------------------------------------------------------|-----------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------|
|   19 | R13                  | -   |   1 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0 | VISHAY;PAN ASONIC;YAG EO;STACKPO LE     | 10K       | RES; SMT (0603); 10K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                       |
|   20 | SPACER1- SPACER4     | -   |   4 | 9032                                                          | KEYSTONE                                | 9032      | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                |
|   21 | SU2, SU3             | -   |   2 | S1100-B;SX1100- B;STC02SYAN                                   | KYCON;KYC ON;SULLINS ELECTRONIC S CORP. | SX1100 -B | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                  |
|   22 | TP1-TP4              | -   |   4 | 5125                                                          | KEYSTONE                                | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|   23 | TP5, TP8             | -   |   2 | 5010                                                          | KEYSTONE                                | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |
|   24 | TP6, TP7, TP10, TP12 | -   |   4 | 5011                                                          | KEYSTONE                                | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|   25 | TP9                  | -   |   1 | 5012                                                          | KEYSTONE                                | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|   26 | TP11                 | -   |   1 | 5014                                                          | KEYSTONE                                | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|   27 | U1                   | -   |   1 | MAX22193                                                      | MAXIM                                   | MAX22 193 | EVKIT PART - IC; PACKAGE OUTLINE DRAWING: 21-0139; LAND PATTERN: 90-0037; TQFN20-EP                                      |
|   28 | PCB                  | -   |   1 | MAX22193                                                      | MAXIM                                   | PCB       | PCB:MAX22193                                                                                                             |
|   29 | R1-R4                | DNP |   0 | N/A                                                           | N/A                                     | OPEN      | PACKAGE OUTLINE 0603 RESISTOR                                                                                            |

## Evaluates: MAX22193

## MAX22193 EV Kit Schematic

<!-- image -->

## Evaluates: MAX22193

## MAX22193 EV Kit PCB Layout

MAX22193 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX22193 EV Kit PCB Layout -Layer 2

<!-- image -->

## MAX22193 Evaluation Kit

MAX22193 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX22193 EV Kit PCB Layout -Layer 3

<!-- image -->

## Evaluates: MAX22193

## MAX22193 EV Kit PCB Layout

MAX22193 EV Kit PCB Layout -Bottom Layer

<!-- image -->

## MAX22193 Evaluation Kit

MAX22193 EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX22193

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX22193 Evaluation Kit