<!-- lastmod 2022-08-02 -->
## MAX25207 Evaluation Kit

## General Description

The MAX25207 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX25207  automotive  2.2MHz synchronous  step-down  controllers  with  bypass  mode. The default EV kit delivers 7A with input voltages up to 60V, but it  can  be  configured  to  deliver  up  to  20A. The output voltage quality can be monitored by observing the PGOOD signal.

## Features

- +3.5V to +60V Input Supply Range
- Output Voltage: 14V in Buck Mode (Follows Input in Bypass Mode)
- Output Current: 7A (Configurable to 20A)
- Switching Frequency: 440kHz
- Forced-PWM Mode of Operation
- Spread-Spectrum Control
- Enable Input
- Voltage Monitoring PGOOD Output
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX25207

## Quick Start

## Required Equipment

- MAX25207 EV kit
- DC power supply: 3.5V to 60V, 10A
- 1 digital multimeter (DMM)
- Electronic load capable of sinking 7A at 14V
- Oscilloscope

## Procedure

The MAX25207 EV kit is fully assembled and tested. Use the following steps to verify board operation.

- 1) Verify that all jumpers are in their default configura -tions according to Table 1.
- 2) Connect the power supply across SUP and PGND connectors.
- 3) Connect the positive and negative terminals of an electronic load across VOUT and PGND connectors.
- 4) Connect the multimeter across VOUT and PGND.
- 5) Set the power-supply voltage to 24V and current limit to 10A.
- 6) Turn on the power supply.
- 7) Verify that VOUT is approximately 14V using a digital multimeter.
- 8) Use oscilloscope to observe switching node of the inductor. It should show 440kHz switching frequency in buck mode.
- 9) Decrease the power supply voltage to 13V.
- 10)  Verify that VOUT is approximately 13V using a digital multimeter.
- 11)  Use oscilloscope to observe switching node of the inductor. It should show 100% duty cycle in bypass mode.
- 12)  Set the power supply voltage to 24V.
- 13)  Set the electronic load to the desired current at or below 6A.
- 14)  Turn on the electronic load.
- 15)  Verify that the voltage across VOUT and GND pads is 14V.
- 16)  Decrease the power supply voltage to 13V.
- 17)  Verify that VOUT is approximately 13V.

<!-- image -->

## Detailed Description of Hardware

The EV kit comes installed with the MAX25207 controller  IC  with  an  external  resistor  divider  to  set  the  output  voltage  to  14V.  To  optimize  efficiency,  refer  to  the MAX25206/7/8 IC datasheet.

## Buck Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is high impedance when the output voltage is in regulation or in bypass mode.

## ENBK Function

The  controller  automatically  transitions  between  buck and bypass modes of operation depending on the VBYP threshold  programming.  To  force  buck  operation,  set ENBK = HIGH using the jumper setting.

## Alternate BOM Configuration

The board can be configured using alternate BOM to create a 20A design. See Component List for alternate BOM.

Evaluates: MAX25207

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTIONS                                    |
|----------|--------------------------|----------------------------------------------|
| ENABLE   | 1-2                      | Buck enabled                                 |
| SPS      | 2-3                      | No spread spectrum                           |
| SYNC     | 1-2                      | FPWM mode                                    |
| ENBK     | 2-3                      | Automatic transition between bypass and buck |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25207EVKIT# | EV Kit |

#Denotes RoHS compliance.

│

## Component List

## MAX25207EVKIT# DEFAULT: 14VOUT, 440kHz, 7A

| REFERENCE DESIGNATOR   |   QTY | DESCRIPTION                                               | MFG PART #                                                                          |
|------------------------|-------|-----------------------------------------------------------|-------------------------------------------------------------------------------------|
| C4                     |     1 | 47µF ±20% 100V Aluminum-Electrolytic Capacitor (CASE_H13) | EEV-TG2A470Q                                                                        |
| C5                     |     1 | 22000PF ±5% 50V Ceramic Capacitor (0402)                  | GCM155R71H223JA55                                                                   |
| C6                     |     1 | 2.2μF ±10% 100V X7R Ceramic Capacitor (1210)              | GRM32ER72A225KA35;CGA6N3X7R2A225K230AB; CC1210KKX7R0BB225;HMK325B7225KM             |
| C8                     |     1 | 1800pF ±5% 50V X7R Ceramic Capacitor (0402)               | GRM155R71H182JA01                                                                   |
| C9, C21                |     2 | 4.7μF ±10% 100V X7R Ceramic Capacitor (1210)              | CNA6P1X7R2A475K250AE                                                                |
| C12, C23, C24          |     3 | 0.1μF ±10% 100V X7R Ceramic Capacitor (0603)              | CC0603KRX7R0BB104;GRM188R72A104KA35; GCJ188R72A104KA01;HMK107B7104KA;06031C104KAT2A |
| C16                    |     1 | 2.2μF ±10% 10V X7R Ceramic Capacitor (0603)               | GRM188R71A225KE15;CL10B225KP8NNN; C1608X7R1A225K080AC                               |
| C19, C20               |     2 | 47μF ±20% 25V X7R Ceramic Capacitor (2220)                | CGA9N3X7R1E476M230KB                                                                |
| L1                     |     1 | 6.8μH ±20% 18.5A Composite Inductor                       | XAL1010-682ME                                                                       |
| Q2, Q3                 |     2 | N-Channel 80V Surface Mount SO-8L (6.15mmx5.13mm)         | SQJA84EP-T1_GE3                                                                     |
| R2, R6-R8              |     4 | 0Ω Resistor (0402)                                        | CRCW04020000Z0EDHP; RCS04020000Z0                                                   |
| R3                     |     1 | 4.02Ω Resistor (0402)                                     | CRCW04024R02FKED                                                                    |
| R4, R17                |     2 | 10k Ω Resistor (0402)                                     | CRCW040210K0FK;RC0402FR-0710KL                                                      |
| R5                     |     1 | 1Ω Resistor (0402)                                        | CRCW04021R00FK                                                                      |
| R10                    |     1 | 0.01Ω Resistor (2512)                                     | PMR100HZPFU10L0                                                                     |
| R11                    |     1 | 100kΩ Resistor (0402)                                     | TNPW0402100KBE                                                                      |
| R12                    |     1 | 66.5kΩ Resistor (0402)                                    | ERJ-2RKF6652                                                                        |
| R15                    |     1 | 100kΩ Resistor (0603)                                     | TNPW0603100KBYEN                                                                    |
| R19                    |     1 | 191kΩ Resistor (0402)                                     | CRCW0402191KFK                                                                      |
| U1                     |     1 | VERSATILE AUTOMOTIVE 60V 2.2MHZ BUCK CONTROLLER           | MAX25207ATPA/VY+                                                                    |

Evaluates: MAX25207

## Component List (continued)

## ALTERNATE CONFIGURATION: 14VOUT, 440kHz, 20A (40V MAX INPUT)

| REFERENCE DESIGNATOR   |   QTY | DESCRIPTION                                               | MFG PART #                                                                          |
|------------------------|-------|-----------------------------------------------------------|-------------------------------------------------------------------------------------|
| C4                     |     1 | 47µF ±20% 100V Aluminum-Electrolytic Capacitor (CASE_H13) | EEV-TG2A470Q                                                                        |
| C5                     |     1 | 22000PF ±5% 50V Ceramic Capacitor (0402)                  | GCM155R71H223JA55                                                                   |
| C6                     |     1 | 2.2μF ±10% 100V X7R Ceramic Capacitor (1210)              | GRM32ER72A225KA35;CGA6N3X7R2A225K230AB; CC1210KKX7R0BB225;HMK325B7225KM             |
| C7                     |     1 | 240µF ±20% 63V Aluminum-Electrolytic Capacitor (CASE_KE0) | EMHS630ARA241MKE0S                                                                  |
| C8                     |     1 | 1800pF ±5% 50V X7R Ceramic Capacitor (0402)               | GRM155R71H182JA01                                                                   |
| C9, C21, C22           |     3 | 4.7μF ±10% 100V X7R Ceramic Capacitor (1210)              | CNA6P1X7R2A475K250AE                                                                |
| C10                    |     1 | 8.2pF ±0.25% 50V X7R Ceramic Capacitor (0402)             | GRM155R71H182JA01                                                                   |
| C11, C19, C20, C26-28  |     6 | 47μF ±20% 25V X7R Ceramic Capacitor (2220)                | CGA9N3X7R1E476M230KB                                                                |
| C12, C23, C24,C25      |     4 | 0.1μF ±10% 100V X7R Ceramic Capacitor (0603)              | CC0603KRX7R0BB104;GRM188R72A104KA35; GCJ188R72A104KA01;HMK107B7104KA;06031C104KAT2A |
| C16                    |     1 | 2.2μF ±10% 10V X7R Ceramic Capacitor (0603)               | GRM188R71A225KE15;CL10B225KP8NNN; C1608X7R1A225K080AC                               |
| L1                     |     1 | 2μH ±20% 26.3A Composite Inductor                         | XAL1580-202ME                                                                       |
| Q1-Q4                  |     4 | MOSFET N-CH 40V 21A 78A 5DFN                              | NVMFS5C460NLAFT1G                                                                   |
| R2, R6-R8              |     4 | 0Ω Resistor (0402)                                        | CRCW04020000Z0EDHP; RCS04020000Z0                                                   |
| R3                     |     1 | 2Ω Resistor (0402)                                        | CRCW04022R0FK;CRCW04022R00FK                                                        |
| R4, R17                |     2 | 10k Ω Resistor (0402)                                     | CRCW040210K0FK;RC0402FR-0710KL                                                      |
| R5                     |     1 | 0.51Ω Resistor (0402)                                     | ERJ-2BQFR51                                                                         |
| R10, R13               |     2 | 0.006Ω Resistor (2512)                                    | PMR100HZPFU6L00                                                                     |
| R11                    |     1 | 100kΩ Resistor (0402)                                     | TNPW0402100KBE                                                                      |
| R12                    |     1 | 66.5kΩ Resistor (0402)                                    | ERJ-2RKF6652                                                                        |
| R15                    |     1 | 100kΩ Resistor (0603)                                     | TNPW0603100KBYEN                                                                    |
| R19                    |     1 | 191kΩ Resistor (0402)                                     | CRCW0402191KFK                                                                      |
| U1                     |     1 | VERSATILE AUTOMOTIVE 60V 2.2MHZ BUCK CONTROLLER           | MAX25207ATPA/VY+                                                                    |

│

Evaluates: MAX25207

## MAX25207 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX25207

## MAX25207 EV Kit PCB Layouts

MAX25207 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX25207 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX25207 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX25207 EV Kit PCB Layouts (continued)

MAX25207 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

MAX25207 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX25207 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  0a[im ,ntegrated reserYes the right to change the circuitry and specifications Zithout notice at any time

│

Evaluates: MAX25207