<!-- lastmod 2025-01-28 -->
<!-- image -->

## Evaluates: MAX20039/MAX20040,

MAX26039/MAX26040

## General Description

The MAX20040 evaluation kit (EV kit) is a fully assembled and tested application circuit for the MAX20040, which is a  small,  synchronous  buck-boost  converter  family  with integrated high-side and low-side switches. Each EV kit is designed to deliver up to 1.2A with input voltages from +4.5V to +36V, while using only 52µA quiescent current at no load. Input voltage can be lowered to +2V after regulation. Output-voltage quality can be monitored by observing the PGOOD signal.

## Benefits and Features

- +2V to +36V Input Supply Range
- Delivers up to 1.2A Output Current (MAX20040)
- Frequency-Synchronization Input
- Enable Input
- Voltage-Monitoring PGOOD Output
- Enable or Disable Spread Spectrum
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

©

Click here to ask an associate for production status of specific part numbers.

## MAX20040 Evaluation Kit

## Quick Start

## Required Equipment

- MAX20040 EV kit
- 2V to 36V, 3A power supply capable of providing 3A at 2V input
- Digital multimeter (DMM)
- Oscilloscope
- Electronic load capable of sinking 1.2A

## Procedure

Each  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation:

- 1) Verify  that  all  jumpers  are  in  their  default  positions according to Table 1.
- 2) Connect  the positive and negative terminals of the power supply to the SUP and GND1 test pads, respectively.
- 3) Set the power-supply voltage to 14V and current limit to 3A.
- 4) Turn on the power supply.
- 5) Verify using the DMM that OUT is approximately 5V.
- 6) Verify that switching frequency is approximately 400kHz by monitoring inductor switching voltage with the oscilloscope.

## Additional Evaluation

- 7) Connect  the  positive  and  negative  terminals  of  the electronic load to OUT and GND, respectively.
- 8) Set  the  electronic  load  to  the  desired  current  at  or below 1.2A, or use an equivalent resistive load with an appropriate power rating.
- 9) Turn on the power supply and electronic load.
- 10) Verify  that  the  voltage  across  the  VOUT  and  GND PCB pads is 5V ±2%.

319-100214; Rev 3; 3/24

## Detailed Description of Hardware

The MAX20040 EV kit provides a proven layout for the MAX20040  synchronous  buck  regulator.  The  device accepts input voltages as high as +36V and delivers up to 1.2A. The EV kit can handle an input supply transient up to +40V. Various test points are included for evaluation.

## External Synchronization

The  device  can  operate  in  two  modes,  forced-PWM (FPWM) or skip mode. Skip mode has better efficiency for  light-load  conditions.  When  SYNC  is  pulled  low,  the device operates in skip mode for light loads and FPWM mode  for  larger  loads.  When  SYNC  is  pulled  high,  the device is forced to operate in FPWM mode across all load conditions. SYNC can be used to synchronize with other supplies if a clock source is present. The device is forced to operate in FPWM mode when SYNC is connected to a clock source.

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTIONS                                          |
|----------|--------------------------|----------------------------------------------------|
| EN       | 1-2 (ON-middle)          | Buck-boost enabled                                 |
| SPS      | 2-3 (middle-OFF)         | Spread spectrum disabled                           |
| PGOOD PU | 1-2                      | PGOOD pulls up to V BIAS when OUT is in regulation |
| SYNC     | 1-2 (FPWM-middle)        | Forced-PWM mode                                    |

## Evaluates: MAX2039/MAX204, MAX26039/MAX2604

## Buck Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is low impedance when the output voltage is in regulation.  PGOOD is high impedance when the output voltage  drops  below  93%  (typ)  of  its  nominal  regulated voltage. To obtain a logic signal, pull up PGOOD to BIAS by installing shunts on jumpers PU and LED.

## Evaluating Other Output Voltages and Devices

The EV kit comes installed with a +5V MAX20040B (1.2A) device,  with  a  switching  frequency  of  400kHz.  For  +5V, 2.2MHz operation, see the appropriate component changes in the MAX20040 EV Kit Bill of Materials . Other output voltages  can  require  the  IC  (U1)  to  be  uninstalled  and reinstalled with the correct part number as well as other component changes. Refer to the MAX20039/MAX20040 and MAX26039/MAX26040 IC data sheets for details.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20040EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX20040 Evaluation Kit

## MAX20040 EV Kit Bill of Materials

|   ITEM | REF_DES          |   QTY | MFG PART #                              | MANUFACTURER                    | VALUE       | DESCRIPTION                                                |
|--------|------------------|-------|-----------------------------------------|---------------------------------|-------------|------------------------------------------------------------|
|      1 | C1               |     1 | EEE-FK1H470P                            | PANASONIC                       | 47UF        | CAP; SMT (CASE_E); 47UF; 20%; 50V; ALUMINUM-ELECTROLYTIC   |
|      2 | C2               |     1 | GCJ188R71H104KA12; GCM188R71H104K       | MURATA; MURATA                  | 0.1UF       | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC             |
|      3 | C3, C4           |     2 | GRM32ER71H475KA88; CNC6P1X7R1H475K250AE | MURATA; TDK                     | 4.7UF       | CAP; SMT (1210); 4.7UF; 10%; 50V; X7R; CERAMIC             |
|      4 | C5               |     1 | GCM188R71C104KA37; GRM188R71C104KA01    | MURATA; MURATA                  | 0.1UF       | CAP; SMT (0603); 0.1UF; 10%; 16V; X7R; CERAMIC;            |
|      5 | C6               |     1 | C0603C225K4PAC; GRM188R61C225KE15       | KEMET; MURATA                   | 2.2UF       | CAP; SMT (0603); 2.2UF; 10%; 16V; X5R; CERAMIC;            |
|      6 | C7, C8, C14, C15 |     4 | C1005X7R1H104K050BB; GRM155R71H104KE14  | TDK; MURATA                     | 0.1UF       | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC             |
|      7 | C9               |     1 | C0603C181K5GAC                          | KEMET                           | 180PF       | CAP; SMT (0603); 180PF; 10%; 50V; C0G; CERAMIC             |
|      8 | C10              |     1 | GRM1555C1H681GA01; C1005C0G1H681G050    | MURATA; TDK                     | 680PF       | CAP; SMT (0402); 680PF; 2%; 50V; C0G; CERAMIC              |
|      9 | C11              |     1 | C0402C220J3GAC                          | KEMET                           | 22PF        | CAP; SMT (0402); 22PF; 5%; 25V; C0G; CERAMIC               |
|     10 | C12, C13         |     2 | GRM32ER71E226KE15; CL32B226KAJNFN       | MURATA; SAMSUNG                 | 22UF        | CAP; SMT (1210); 22UF; 10%; 25V; X7R; CERAMIC              |
|     11 | D1               |     1 | BAT54ALT1G                              | ON SEMICONDUCTOR                | BAT54ALT1G  | DIODE; SCH; SMT (SOT-23); PIV=30V; IF=0.2A; COMMONANODE    |
|     12 | J1, J2, J4       |     3 | PCC03SAAN                               | SULLINS                         | PCC03SAAN   | CONNECTOR; MALE; THROUGH HOLE;                             |
|     13 | J3, J6-J10       |     6 | 9020 BUSS                               | WEICO WIRE                      | MAXIMPAD    | EVK KIT PARTS; MAXIM PAD; WIRE                             |
|     14 | J5               |     1 | PCC02SAAN                               | SULLINS                         | PCC02SAAN   | CONNECTOR; MALE; THROUGH HOLE                              |
|     15 | L1               |     1 | XAL5030-472ME                           | COILCRAFT                       | 4.7UH       | INDUCTOR; SMT; COMPOSITE CORE; 4.7UH; TOL=+/-20%; 5.9A     |
|     16 | L2               |     1 | 742792116                               | WURTH ELECTRONICS INC.          | 500         | INDUCTOR; SMT (1206); FERRITE- BEAD; 500; TOL=+/-25%; 2.5A |
|     17 | R1, R5           |     2 | ERJ-2GEJ104                             | PANASONIC                       | 100K        | RES; SMT (0402); 100K; 5%; +/-200PPM/ DEGC; 0.1000W        |
|     18 | R2               |     1 | ERJ-2RKF5102                            | PANASONIC                       | 51K         | RES; SMT (0402); 51K; 1%; +/-100PPM/ DEGC; 0.1000W         |
|     19 | R3               |     1 | CRCW040212K0FK; MCR01MZPF1202           | VISHAY DALE; ROHM SEMICONDUCTOR | 12K         | RES; SMT (0402); 12K; 1%; +/-100PPM/ DEGC; 0.0630W         |
|     20 | R7, R9- R11      |     4 | ERJ-2GE0R00                             | PANASONIC                       | 0           | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                |
|     21 | R8               |     1 | CRCW040222K0FK                          | VISHAY DALE                     | 22K         | RES; SMT (0402); 22K; 1%; +/-100PPM/ DEGC; 0.0630W         |
|     22 | TP1-TP4          |     4 | 5007                                    | KEYSTONE                        | N/A         | TEST POINT; WHITE;                                         |
|     23 | U1               |     1 | MAX20040BATPA/VY+                       | Analog Devices                  | MAX20039_40 | EVKIT PART - IC; MAX20039_40; TQFN20-EP                    |
|     24 | PCB              |     1 | MAX20039AE13                            | Analog Devices                  | PCB         | PCB:MAX20039AE13                                           |

│

Evaluates: MAX2039/MAX204,

MAX26039/MAX2604

## MAX20040 Evaluation Kit

## MAX20040 EV Kit Schematic

<!-- image -->

## MAX20040 EV Kit PCB Layout Diagrams

<!-- image -->

MAX20040 EV Kit Component Guide-Solder Mask Top

<!-- image -->

MAX20040 EV Kit PCB Layout-Top Layer

Evaluates: MAX2039/MAX204,

MAX26039/MAX2604

│

Evaluates: MAX2039/MAX204,

## MAX20040 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20040 EV Kit PCB Layout-Inner Layer 1

MAX20040 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

│

Evaluates: MAX2039/MAX204,

## MAX20040 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20040 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX20040 EV Kit PCB Layout-Solder Mask (Bottom)

│

## MAX20040 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/18            | Initial release                                                                                                                                                              | -               |
|                 1 | 12/18           | Updated Detailed Description of Hardware and MAX20040 EV Kit Bill of Materials                                                                                               | 2, 3            |
|                 2 | 10/20           | Updated MAX20040 EV Kit Schematic                                                                                                                                            | 4               |
|                 3 | 3/24            | Added MAX26039/MAX260040; updated Detailed Description of Hardware , MAX20040 EV Kit Bill of Materials , MAX20040 EV Kit Schematic , and MAX20040 EV Kit PCB Layout Diagrams | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX2039/MAX204,

MAX26039/MAX2604