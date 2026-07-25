<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX16193

## General Description

The MAX16193 evaluation kit (EV kit) is a fully tested and assembled circuit that demonstrates the capabilities of the MAX16193, a dual-channel, low voltage window-detector supervisor circuit. The MAX16193 EV kit is designed to facilitate  the  evaluation  of  the  MAX16193's  0.3%  overvoltage/undervoltage fault detection capability. A jumper, JP1,  provides  the  option  to  connect  the  reset  output's pullup resistor to a voltage other than VDD. Refer to the MAX16193 IC datasheet for absolute maximum voltage ratings  voltage  on  the  reset  output. The  MAX16193  EV kit is available in a 1.5' x 1.5' PCB and operates over the automotive temperature range of -40°C to +125°C.

## MAX16193 EV Kit Files

| FILE                            | DECRIPTION              |
|---------------------------------|-------------------------|
| max16193_evkit_p1_Schematic     | EVKIT schematic         |
| MAX16193_EVKIT_P1_MARKETING_PCB | EVKIT PCB LAYOUT        |
| build_bom_max16193_evkit_p1     | EVKIT Bill of Materials |
| max16193_evkit_p1_odb           | EVKIT ODB               |

## MAX16193 EV Kit Photo

## MAX16193 Evaluation Kit

## Benefits and Features

- ±0.3% Threshold Accuracy
- 0.9V/3.28V Nominal Threshold
- ±4%/±3% UV/OV Monitoring Range
- 10ms Reset Timeout for RST1 and RST2 Signal
- Two Reset Output Pull-Up Voltage Options
- Proven 1.5' x 1.5' 2-Layer 2oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

319-100881; Rev 1; 3/22

## MAX16193 Evaluation Kit

## Quick Start

## Required Equipment

- MAX16193 EV kit
- 5V/100mA DC power supply
- 1V/50mA high-precision DC power supply
- 5V/50mA high-precision DC power supply
- Two digital multimeters (DMM1 and DMM2)
- Four-channel oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

## Caution: Do not turn on power supply until all con -nections are completed.

- 1) Connect the positive terminal of the 5V/100mA power supply to VDD pad. Connect the ground terminal of the power supply to GND pad.
- 2) Connect the positive terminal of the 1V/50mA DC power supply to VMON1 pad. Connect the ground terminal of the power supply to GND pad.
- 3) Connect the positive terminal of the 5V/50mA DC power supply to VMON2 pad. Connect the ground terminal of the power supply to GND pad.
- 4) Connect the positive terminal of the DMM1 to VMON1\_TP test point and the negative terminal of the DMM1 to GND.

Figure 1. Undervoltage/Overvoltage Threshold Accuracy

<!-- image -->

Evaluates: MAX1693

- 5) Connect the positive terminal of the DMM2 to VMON2\_TP test point and the negative terminal of the DMM2 to GND.
- 6) Ensure that jumper JP1 is in its default setting, see Table 1 for more detail.
- 7) Connect oscilloscope channel 1 to IN1 test point and channel 2 to RST1 test point.
- 8) Connect oscilloscope channel 3 to IN2 test point and channel 4 to RST2 test point.
- 9) Turn on the 5V/100mA power supply and slowly increase its output voltage to 5V.
- 10)  Turn on the 1V/50mA DC power supply and slowly increase its output voltage to 0.9V.
- 11)  Turn on the 5V/50mA DC power supply and slowly increase its output voltage to 3.28V.
- 12)  Verify that the reading on DMM1 and DMM2 are 0.9V and 3.28V, respectively.
- 13)  Increase the 1V/50mA DC power supply voltage from 0.9V to 0.939V in approximately 1mV steps and verify that the RST1 signal on the oscilloscope pulls low around VIN1's V OVTH  value.
- 14)  Decrease the 1V/50mA DC power supply voltage from 0.9V to 0.861V in approximately 1mV steps and verify that the RST1 signal on the oscilloscope pulls low around VIN1's V UVTH  value.
- 15)  Increase the 5V/50mA DC power supply voltage from 3.28V to 3.389V in approximately 1mV steps and verify that RST2 signal on the oscilloscope pulls low around VIN2's V OVTH  value.
- 16)  Decrease the 5V/50mA DC power supply voltage from 3.28V to 3.171V in approximately 1mV steps and verify that the RST2 signal on the oscilloscope pulls low around VIN2's V UVTH  value.
- 17)  The EV kit is ready for further testing.

## Table 1. Jumper, JP1, settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                          |
|----------|------------------|--------------------------------------|
| JP1      | 1-2*             | RST1 and RST2 are pulled up to VDD.  |
| JP1      | 2-3              | RST1 and RST2 are pulled up to VEXT. |

│

## Calculating OV/UV Threshold Voltage

The  MAX16193  monitors  a  system  supply  voltage  for undervoltage/overvoltage  window-threshold.  Depending on the system supply tolerance requirement, the undervoltage/overvoltage  thresholds  can  be  factory-trimmed from  ±2%  to  ±5%  with  respect  to  the  selected  nominal input threshold voltage. The following is a detailed calculation  of  how  to  determine the undervoltage/overvoltage threshold levels with ±0.3% threshold accuracy.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Component Suppliers

| SUPPLIER                 | PHONE             | WEBSITE                     |
|--------------------------|-------------------|-----------------------------|
| TDK                      | +81 3 67 78 10 00 | www.tdk-electronics.tdk.com |
| KEYSTONE                 | (516) 328-7500    | www.keyelco.com             |
| WURTH ELECTRONICS INC    | +1 877 6902207    | www.we-ics.com              |
| KEMET                    | +91-95131-45888   | www.kemet.com/en/us.html    |
| AVX                      | +1 (864) 967-2150 | www.avx.com                 |
| LITE-ON ELECTRONICS INC. | 0515-83368598     | www.liteon.com/en-us        |
| SAMTEC                   | 1-800-726-8329    | www.samtec.com              |
| VISHAY                   | 1-800-344-4539    | www.vishay.com              |
| PANASONIC                | 0571-87257895     | www.panasonic.cn            |
| BOURNS                   | +1 951-781-5500   | www.bourns.com              |
| YAGEO                    | +886 2 6629 9999  | www.yageo.com/en/Home       |

Note:

Indicate that you are using the MAX16193 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16193EVKIT# | EV Kit |

Evaluates: MAX1693

Where VIN\_NOM is the selected nominal input threshold voltage, TOL is the input tolerance, V UVTH  is undervoltage  threshold  voltage,  and  V OVTH   is  the  overvoltage threshold voltage.

The MAX16193 monitors the supply voltage with ±0.3% accuracy  over  the  operating  temperature  and  supply range. The accuracy range is shown as follows:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Where  V UVTH\_A   is  the  undervoltage  threshold  accuracy  range  and  V OVTH\_A   is  the  overvoltage  threshold accuracy.

│

## MAX16193 EV Kit Bill of Materials

| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | VAR STATUS                                                                                | MAXINV                                                                                    | MFG PART #                                                                                           | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                      | COMMENTS                                                                                  |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| 1                                                                                         | 1                                                                                         | C3                                                                                        | Pref                                                                                      | 20-000U1-03                                                                               | 885012206071; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A | WURTH ELECTRONICS INC; TDK;KEMET;MURATA;TDK;AV X                                          | 0.1UF                                                                                     | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                   |                                                                                           |
| 2                                                                                         | 5                                                                                         | GND, VDD, VEXT, VMON1, VMON2                                                              | Pref                                                                                      | 01-9020BUSS20AWG-00                                                                       | 9020 BUSS                                                                                            | WEICO WIRE                                                                                | MAXIMPAD                                                                                  | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                                                                                        |                                                                                           |
| 3                                                                                         | 1                                                                                         | JP1                                                                                       | Pref                                                                                      | 01-PCC03SAAN3P-21                                                                         | PCC03SAAN                                                                                            | SULLINS                                                                                   | PCC03SAAN                                                                                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                         |                                                                                           |
| 4                                                                                         | 4                                                                                         | MH1-MH4                                                                                   | Pref                                                                                      | 02-SOM35016H-00                                                                           | 9032                                                                                                 | KEYSTONE                                                                                  | 9032                                                                                      | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                        |                                                                                           |
| 5                                                                                         | 1                                                                                         | R1                                                                                        | Pref                                                                                      | 80-0100R-71                                                                               | RG1608P-101-B; ERA-3YEB101; ERA-3AEB101                                                              | SUSUMU CO LTD.;PANASONIC; PANASONIC                                                       | 100                                                                                       | RES; SMT (0603); 100; 0.10%; +/-25PPM/DEGC; 0.1000W                                                                                                                              |                                                                                           |
| 6                                                                                         | 2                                                                                         | R2, R3                                                                                    | Pref                                                                                      | 80-0010K-24                                                                               | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                                        | VISHAY DALE;PANASONIC; YAGEO                                                              | 10K                                                                                       | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                |                                                                                           |
| 7                                                                                         | 5                                                                                         | RST1, RST2, VDD_TP, VMON1_TP, VMON2_TP                                                    | Pref                                                                                      | EH111000004178                                                                            | 20-2137                                                                                              | VERO TECHNOLOGIES                                                                         | N/A                                                                                       | TEST POINT; PIN DIA=1.65MM; TOTAL LENGTH=7.5MM; BOARD HOLE=1.02; BLACK; PHOSPHOR BRONZE WIRE; RECOMMENDED FOR BOARD THICKNESS=1.6MM ; NOTE:PURCHASE DIRECT FROM THE MANUFACTURER |                                                                                           |
| 8                                                                                         | 1                                                                                         | U1                                                                                        | Pref                                                                                      | 00-SAMPLE-01                                                                              | MAX16193                                                                                             | MAXIM                                                                                     | CS33                                                                                      | IC; MAX16193; TDFN; 0.3% ACCURACY DUAL- CHANNEL SUPERVISORY CIRCUIT; PACKAGE OUTLINE DRAWING: 21-100417; LAND PATTERN DRAWING: 90-0091                                           |                                                                                           |
| 9                                                                                         | 1                                                                                         | PCB                                                                                       | -                                                                                         | EPCB16193                                                                                 | MAX16193                                                                                             | MAXIM                                                                                     | PCB                                                                                       | PCB:MAX16193                                                                                                                                                                     | -                                                                                         |
| DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                                 | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                                                                                                             | DO NOT PURCHASE(DNP)                                                                      |
| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | Var Status                                                                                | MAXINV                                                                                    | MFG PART #                                                                                           | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                      | COMMENTS                                                                                  |
| 1                                                                                         | 2                                                                                         | C1, C2                                                                                    | DNP                                                                                       | 20-000U1-03                                                                               | 885012206071; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A | WURTH ELECTRONICS INC;TDK; KEMET;MURATA;TDK;AVX                                           | 0.1UF                                                                                     | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                   |                                                                                           |
| TOTAL                                                                                     | 2                                                                                         |                                                                                           |                                                                                           |                                                                                           |                                                                                                      |                                                                                           |                                                                                           |                                                                                                                                                                                  |                                                                                           |
| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)            | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)                                                                                        | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) |
| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | Var Status                                                                                | MAXINV                                                                                    | MFG PART #                                                                                           | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                      | COMMENTS                                                                                  |

Evaluates: MAX1693

## MAX16193 Evaluation Kit

## MAX16193 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX1693

## MAX16193 Evaluation Kit

## MAX16193 EV Kit PCB Layout

MAX16193 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX16193 EV Kit PCB Layout-Bottom

<!-- image -->

Evaluates: MAX1693

MAX16193 EV Kit PCB Layout-Top

<!-- image -->

MAX16193 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX16193 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION        | PAGES CHANGED   |
|-------------------|-----------------|--------------------|-----------------|
|                 0 | 1/22            | Initial release    | -               |
|                 1 | 3/22            | Added EV Kit Photo | 1               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX1693