<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX40263

## General Description

The MAX40263 evaluation kit (EV kit) provides a proven design to evaluate the MAX40263 low-noise, low-power, low-bias-current dual operational amplifier with indepen -dent shutdown for each channel in a 10-pin QFN package. The EV kit circuit  is  preconfigured  as  noninverting amplifiers,  but  it  can  be  adapted  to  other  topologies  by changing a few of components. The EV kit comes with a MAX40263AVB+ installed.

## Features

- Accommodates Multiple Op-Amp Configurations
- Component Pads Allow for Sallen-Key Filter
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX40263 EV kit
- 1.7V to 5.5V, 1A DC power supply
- Precision voltage source
- Digital multimeter

## MAX40263 EV Kit Photo

<!-- image -->

## MAX40263 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

Take channel A as an example, follow the steps below to verify board operation:

- 1) Verify that all jumpers (JU1-JU7) are in their default positions, as shown in Table 1.
- 2) Set the power supply to +5V, set the current limit to 1A. Connect the positive terminal of the power supply to V DD and the negative terminal to GND.
- 3) Connect the positive terminal of the precision voltage source to INAP. Connect the negative terminal of the precision voltage source to GND. INAN is already connected to GND through jumper JU1.
- 4) Connect the DMM to monitor the voltage on OUTA. With the 10kΩ feedback resistors and 1kΩ series resistors, the gain of the noninverting amplifier is 11V/V.
- 5) Turn on the power supply.
- 6) Apply 100mV from the precision voltage sources. Observe the output at OUTA on the DMM that reads approximately 1.1V.

Ordering Information appears at end of data sheet.

## MAX40263 EV Kit Files

| FILE                                  | DESCRIPTION             |
|---------------------------------------|-------------------------|
| max40263_qfn10_evkit_b_ Schematic     | EVKIT SCHEMATIC         |
| MAX40263_QFN10_EVKIT_B_ MARKETING_PCB | EVKIT PCB LAYOUT        |
| marketing_bom_max40263_ qfn10_evkit_b | EVKIT BILL OF MATERIALS |
| max40263_qfn10_evkit_b_odb            | EVKIT ODB               |

## MAX40263 Evaluation Kit

## Detailed Description of Hardware

The MAX40263 EV kit provides a proven layout for the MAX40263 low-power  op  amp.  The  device  is  a  singlesupply  op  amp  that  is  ideal  for  sensor  interfaces,  looppowered  systems,  and  various  types  of  medical  and data-acquisition instruments.

The default configuration  for  the  device  in  the  EV  kit  is noninverting configuration.

## Op-Amp Configurations

The device is a single-supply op amp ideal for differential sensing,  noninverting  amplification,  buffering,  and  filtering. A few common configurations are shown in the next few sections.

The  following  sections  explain  how  to  configure  the  op amp.

## Power up requirement

MAX40263 has a built-in offset auto-calibration  function during  chip  power-up,  and  an  undesired  offset  can  be obtained if the chip power-up speed is slow.

To achieve targeted low offset values, it is suggested to either (a) use a power supply with a fast slew rate (power

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|-----------------------------------------------------------------|
| JU 1     | Installed*       | Connects INAN to GND                                            |
| JU2      | Not Installed*   | Disconnects INAP from GND                                       |
| JU3      | 1-2*             | Connects SHDNA to VDD to make channel A into normal operation   |
| JU3      | 2-3              | Connects SHDNA to GND to make channel A into shutdown operation |
| JU 4     | Installed*       | Connects INBN to GND                                            |
| JU5      | Not Installed*   | Disconnects INBP from GND                                       |
| JU6      | 1-2*             | Connects SHDNB to VDD to make channel B into normal operation   |
| JU6      | 2-3              | Connects SHDNB to GND to make channel B into shutdown operation |
| JU7      | Installed*       | Connect V SS to GND                                             |

*Default position.

## Evaluates: MAX40263

supply settles in &lt;10ms), or (b) power up the chip in the shutdown mode ( SHDNA = SHDNB = low) and enable the chip ( SHDNA = SHDNB = high) after the supply settles.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1 for channel A (R13 and R20 for channel B). The EV kit comes preconfigured for a gain of +11V/V. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the  shunt  on  jumper  JU1  and  install  a  shunt  on  jumper JU2 and feed an input signal on the INAN PCB pad for channel A, or remove the shunt on jumper JU4 and install a shunt on jumper JU5 and feed an input signal on the INBN PCB pad for channel B.

│

## MAX40263 Evaluation Kit

## Differential Amplifier

To configure the channel A of the EV kit as a differential amplifier,  replace  R1,  R2,  R3,  and  R5  with  appropriate resistors. When R1 = R2 and R3 = R5, the CMRR of the differential amplifier is determined by the matching of the resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

In  the  same  way,  to  configure  the  channel  B  of  the  EV kit  as  a  differential  amplifier,  replace  R13,  R17,  R18, and  R20  with  appropriate  resistors.  When  R13  =  R17 and R18 = R20, the CMRR of the differential amplifier is determined by the matching of the resistor ratios R13/R17 and R18/R20.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The Sallen-Key topology is ideal for filtering sensor sig -nals  with  a  second-order  filter  and  acting  as  a  buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key  topology  by  replacing  and  populating  a  few components. For channel A, the Sallen-Key topology can be configured as a unity-gain buffer by replacing R5 with a 0Ω resistor and removing resistor R1. The signal is non -inverting and applied to INAP. The filter component pads are  R2-R3 and R7-R8, where some must be populated with resistors and others with capacitors, and it is similar for channel B.

Lowpass  Sallen-Key  Filter: To  configure  the  channel A as a lowpass Sallen-Key filter, remove the shunt from jumper JU1, populate the R2 and R8 pads with resistors, and populate the R3 and R7 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

## Evaluates: MAX40263

To configure the channel B as a lowpass Sallen-Key filter, remove the shunt from jumper JU4, populate the R17 and R23 pads with resistors, and populate the R18 and R22 pads  with  capacitors.  The  corner  frequency  and  Q  are then given by:

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To  configure  the  channel A as a highpass Sallen-Key filter, remove the shunt from jumper JU1, populate the R3 and R7 pads with resistors, and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

To configure the channel B as a highpass Sallen-Key fil -ter, remove the shunt from jumper JU4, populate the R18 and R22 pads with resistors, and populate the R23 and R17 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

Bandpass Sallen-Key Filter: To  configure  the  channel A as bandpass Sallen-Key filter, remove the shunt from jumper JU1, replace R8, populate the R3 and R7 pads with  resistors,  and  populate  the  C8  and  R2  pads  with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

## MAX40263 Evaluation Kit

To configure the channel B as Bandpass Sallen-Key filter, remove the shunt from jumper JU4, replace R23, popu -late the R18 and R22 pads with resistors, and populate the  C15  and  R17  pads  with  capacitors. The  corner  frequency and Q are then given by:

<!-- formula-not-decoded -->

## Transimpedance Amplifier (TIA)

To configure the EV kit as a TIA, take channel A for example, place a shunt on jumper JU2 and replace R1 with 0Ω resistors. The output voltage of the TIA is the input current multiplied by the feedback resistor:

## Component Suppliers

| SUPPLIER                 | PHONE             | WEBSITE                         |
|--------------------------|-------------------|---------------------------------|
| KEYSTONE                 | (516) 328-7500    | www.keyelco.com/                |
| WURTH ELECTRONICS INC    | +1 877 6902207    | www.we-ics.com                  |
| TDK                      | +81 3 67 78 10 00 | www.tdk-electronics.tdk.com/    |
| KEMET                    | +91-95131-45888   | www.kemet.com/en/us.html        |
| AVX                      | +1 (864) 967-2150 | www.avx.com/                    |
| LITE-ON ELECTRONICS INC. | 0515-83368598     | www.liteon.com/en-us            |
| SAMTEC                   | 1-800-726-8329    | www.samtec.com/                 |
| VISHAY                   | 1-800-344-4539    | www.vishay.com/                 |
| PANASONIC                | 0571-87257895     | www.panasonic.cn/               |
| BOURNS                   | +1 951-781-5500   | www.bourns.com/                 |
| YAGEO                    | +886 2 6629 9999  | www.yageo.com/en/Home           |
| MAXIM                    | 408-601-1000      | www.maximintegrated.com/en.html |

Note: Indicate that you are using the MAX40263 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40263EVKIT# | EV kit |

#Denotes RoHS compliance.

where:

I INA  is the input current source applied at the INAN test point.

I BIAS  is the input bias current.

VOS is the input offset voltage of the op amp.

Use a  capacitor  and  0Ω  resistor  at  location  R4  or  R10 (and C8, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. Take channel A for example, the EV kit provides C8 and R6 pads for an optional capacitive-load driving circuit. C8 simulates the capacitive load while R6 acts as an isolation  resistor  to  improve  the  op  amp's  stability  at  higher capacitive loads. To improve the stability of the amplifier in such cases, replace R6 with a suitable resistor value to improve amplifier phase margin.

## Evaluates: MAX40263

<!-- formula-not-decoded -->

## MAX40263 EV Kit Bill of Materials

| ITEM   | REF_DES                                                      | DNI/DNP QTY   |   DNI/DNP QTY | MFG PART #                                                                                | MANUFACTURER                             | VALUE        | DESCRIPTION                                                                                                                 |
|--------|--------------------------------------------------------------|---------------|---------------|-------------------------------------------------------------------------------------------|------------------------------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| 1      | C1, C7                                                       | -             |             2 | C0603X7R500103JNP;C0603C103J5RAC                                                          | VENKEL LTD;KEMET                         | 0.01UF       | CAP; SMT (0603); 0.01UF; 5%; 50V; X7R; CERAMIC                                                                              |
| 2      | C2, C10                                                      | -             |             2 | GRM31CR71H475KA12;GRJ31CR71H475KE11; GXM31CR71H475KA10;UMK316AB7475KL; GRM31CR71H475KA12L | MURATA;MURATA;MURATA; TAIYO YUDEN;MURATA | 4.7UF        | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                              |
| 3      | GNDA, GNDA_1, GNDA_2, GNDB, GNDB_1, GNDB_2, TP4_GND, TP5_GND | -             |             8 |                                                                                           | 5011 KEYSTONE                            | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |
| 4      | INAN_1, INAP_1, INBN-_1, INBP_1, OUTA_1, OUTB_1              | -             |             6 |                                                                                           | 5012 KEYSTONE                            | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |
| 5      | JU1, JU2, JU4, JU5, JU7                                      | -             |             5 | PCC02SAAN                                                                                 | SULLINS                                  | PCC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                    |
| 6      | JU3, JU6                                                     | -             |             2 | PCC03SAAN                                                                                 | SULLINS                                  | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                    |
| 7      | MH1-MH4                                                      | -             |             4 | 9032                                                                                      | KEYSTONE                                 | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER;NO THREAD; M3.5; 5/8IN; NYLON                                                    |
| 8      | R1, R13                                                      | -             |             2 | CRCW06031K00FK;ERJ-3EKF1001; CR0603AFX-1001ELF                                            | VISHAY; PANASONIC;BOURNS                 | 1K           | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                            |
| 9      | R2, R6, R8, R12, R16, R17, R21, R23                          | -             |             8 | RC1608J000CS;CR0603-J/-000ELF; RC0603JR-070RL                                             | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH     | 0            | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                     |
| 10     | R5, R20                                                      | -             |             2 | CRCW060310K0FK;ERJ-3EKF1002; AC0603FR-0710KL;RMCF0603FT10K0                               | VISHAY;PANASONIC;YAGEO; STACKPOLE        | 10K          | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                           |
| 11     | SU1-SU7                                                      | -             |             7 | S1100-B;SX1100-B;STC02SYAN                                                                | KYCON;KYCON; SULLINS ELECTRONICS CORP.   | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                     |
| 12     | TP1-TP4                                                      | -             |             4 |                                                                                           | 5000 KEYSTONE                            | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;            |
| 13     | U1                                                           | -             |             1 | MAX40263                                                                                  | MAXIM                                    | MAX40263     | EVKIT PART - IC; MAX40263; PACKAGE OUTLINE DRAWING: 21-0610; LAND PATTERN NUMBER: 90-0386; PACKAGE CODE:V101A2CN+1; UTQFN10 |
| 14     | VDD, VSS                                                     | -             |             2 |                                                                                           | 5010 KEYSTONE                            | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                       |
| 15     | PCB                                                          | -             |             1 | MAX40263QFN10                                                                             | MAXIM                                    | PCB          | PCB:MAX40263QFN10                                                                                                           |
| 16     | INAN, INAP, INBN,                                            | DNP           |             0 | CN-BNC-011PG                                                                              | FIRST TECH ELECTRONICS, CO.              | CN-BNC-011PG | CONNECTOR; FEMALE; THROUGH HOLE; BNC JACK; STRAIGHT; 5PINS                                                                  |
| 17     | INBP, OUTA, OUTB C3, C6, C8, C11, C14, C15                   | DNP           |             0 | N/A                                                                                       | N/A                                      | OPEN         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                    |
| 18     | C4, C5, C9, C12, C13, C16                                    | DNP           |             0 | N/A                                                                                       | N/A                                      | SHORT        | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                    |
| 19     | R3, R4, R7, R9-R11, R14, R15, R18, R19, R22, R24             | DNP           |             0 | N/A                                                                                       | N/A                                      | OPEN         | PACKAGE OUTLINE 0603 RESISTOR                                                                                               |
| TOTAL  |                                                              |               |            56 |                                                                                           |                                          |              |                                                                                                                             |

## Evaluates: MAX40263

## MAX40263 Evaluation Kit

## MAX40263 EV Kit Schematics

<!-- image -->

│

## Evaluates: MAX40263

## MAX40263 Evaluation Kit

## MAX40263 EV Kit PCB Layouts

MAX40263 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## Evaluates: MAX40263

MAX40263 EV Kit PCB Layout-Top

<!-- image -->

│

## MAX40263 EV Kit PCB Layouts (continued)

MAX40263 EV Kit PCB Layout-Bottom

<!-- image -->

Evaluates: MAX40263

│

## MAX40263 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION        | PAGES CHANGED   |
|-------------------|-----------------|--------------------|-----------------|
|                 0 | 1/22            | Initial release    | -               |
|                 1 | 3/22            | Added EV kit photo | 1               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX40263