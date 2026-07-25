<!-- lastmod 2022-08-02 -->
## MAX16191 Evaluation Kit

## General Description

The MAX16191 evaluation kit (EV kit) is a fully tested and assembled circuit that demonstrates the capabilities of the MAX16191, a single-channel, low-voltage window-detector supervisor circuit. The MAX16191 EV kit is designed to facilitate the evaluation of the MAX16191's 0.35% overvoltage/undervoltage (OV/UV) faults detection capability. A jumper, JP1, provides the option to connect the reset output's pullup resistor to a voltage other than V CC . See MAX16191 IC data sheet for absolute maximum voltage ratings voltage on reset output. The MAX16191 EV kit is available in a 1' x 1' PCB and operates over the automotive temperature range of -40°C to +125°C.

## MAX16191 EV Kit Files

| FILE                           | DESCRIPTION             |
|--------------------------------|-------------------------|
| max16191_evkit_a_Schematic     | EVKIT schematic         |
| MAX16191_EVKIT_A_MARKETING_PCB | EVKIT PCB LAYOUT        |
| build_bom_max16191_evkit_a     | EVKIT Bill of Materials |
| max16191_evkit_a_odb           | EVKIT ODB               |

## MAX16191 EV Kit Board Photo

<!-- image -->

<!-- image -->

Evaluates: MAX16191

## Features

- ±0.35% Threshold Accuracy
- 0.875V Nominal Threshold Range
- ±3% UV/OV Monitoring Range
- 10ms Reset Timeout for RST signal
- Two Reset Output Pullup Voltage Options
- Proven 1' x 1' 2-Layer 2oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX16191 Evaluation Kit

## Quick Start

## Required Equipment

- MAX16191 EV kit
- 5V/100mA DC power supply
- 1V/50mA high-precision DC power supply
- One digital multimeter (DMM)
- Function generator
- Two-channel oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution: Do not turn on power supply until all connections are completed.

- 1) Connect the positive terminal of the 5V/100mA power supply to VDD pad. Connect the ground terminal of the power supply to GND pad.
- 2) Connect the positive terminal of the 1V/50mA DC power supply to VMON pad. Connect the ground terminal of the power supply to GND pad.
- 3) Connect the positive terminal of the DMM to VMON\_ TP test point and the negative terminal of the DMM to GND.
- 4) Ensure jumper (JP1) is in its default setting. See Table 1 for more details.
- 5) Connect oscilloscope channel 1 to IN test point and channel 2 to RST test point.
- 6) Turn on the 5V/100mA power supply and slowly increase its output voltage to 5V.
- 7) Turn on the 1V/50mA DC power supply and slowly increase its output voltage to 0.875V.
- 8) Verify that the reading on the DMM is 0.875V.
- 9) Increase the 1V/50mA DC power supply voltage from 0.875V to 0.910V in approximately 1mV steps and verify that RST signal on the oscilloscope pulls low at around V OVTH  value.

## Table 1. Jumper, JP1, Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION               |
|----------|------------------|---------------------------|
| JP1      | 1-2*             | RST is pulled up to VDD.  |
| JP1      | 2-3              | RST is pulled up to VEXT. |

* Default Jumper Position

Evaluates: MAX16191

- 10)  Decrease the 1V/50mA DC power supply voltage from 0.875V to 0.840V in approximately 1mV steps and verify that the RST signal on the oscilloscope pulls low at around V UVTH  value.
- 11)  The EV kit is ready for further testing.

## Calculating OV/UV Thresholds Voltage

The MAX16191 monitors a system supply voltage for UV/ OV window-threshold. Depending on the system supply tolerance  requirement,  the  UV/OV  thresholds  can  be factory-trimmed  from  ±2%  to  ±5%.  The  tolerance  setting is symmetrical with respect to the selected nominal input  threshold  voltage. A  detailed  calculation  of  how  to determine the UV/OV threshold levels with ±3% threshold accuracy is shown as follows:

VIN\_NOM = 0.875V

TOL = ± 3%

VUVTH  =  V IN\_NOM (1  -  3%)  =  0.875V  *(1  -  0.03)  = 0.875V - 0.02625V = 0.84875V

VOVTH  =  V IN\_NOM (1  +  3%)  =  0.875V*  (1  +  0.03)  = 0.875V + 0.02625V = 0.90125V

Where VIN\_NOM is the selected nominal input threshold voltage,

TOL is the input tolerance

VUVTH is UV threshold voltage and

VOVTH is the OV threshold voltage

The MAX16191 monitors the supply voltage with ±0.35% accuracy  over  the  operating  temperature  and  supply range.  The  accuracy  range  for  the  0.875V  ±0.35%  is shown below:

VUVTH\_A = V IN\_NOM  (1 -3%±0.35%)

VOVTH\_A = V IN\_NOM  (1+3% ±0.35%)

where V UVTH\_A  is the UV threshold accuracy range and VOVTH\_A  is the OV threshold accuracy

│

## Evaluates: MAX16191

Figure 1. Undervoltage/Overvoltage Threshold Accuracy

<!-- image -->

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

Indicate that you are using the MAX16191 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16191EVKIT# | EV Kit |

# Denotes RoHS compliance.

│

## MAX16191 EV Kit Bill of Materials

| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | VAR STATUS                                                                                | MAXINV                                                                                    | MFG PART #                                                                                        | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                     | COMMENTS                                                                                  |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| 1                                                                                         | 1                                                                                         | C1                                                                                        | Pref                                                                                      | 20-000U1-03                                                                               | 885012206071;C1608X7R1E104K080AA; C0603C104K3RAC;GRM188R71E104KA01; C1608X7R1E104K;06033C104KAT2A | WURTH ELECTRONICS INC;TDK;KEMET; MURATA;TDK;AVX                                           | 0.1UF                                                                                     | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                  |                                                                                           |
| 2                                                                                         | 4                                                                                         | GND_TP, RST, VDD_TP, VMON_TP                                                              | Pref                                                                                      | EH111000004178                                                                            | 20-2137                                                                                           | VERO TECHNOLOGIES                                                                         | N/A                                                                                       | TEST POINT; PIN DIA=1.65MM; TOTAL LENGTH=7.5MM; BOARD HOLE=1.02; BLACK; PHOSPHOR BRONZE WIRE; RECOMMENDED FOR BOARD THICKNESS=1.6MM ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER |                                                                                           |
| 3                                                                                         | 1                                                                                         | JP1                                                                                       | Pref                                                                                      | 01-PEC03SAAN3P-21                                                                         | PEC03SAAN                                                                                         | SULLINS                                                                                   | PEC03SAAN                                                                                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                       |                                                                                           |
| 4                                                                                         | 1                                                                                         | R1                                                                                        | Pref                                                                                      | 80-0100R-CA18                                                                             | RNCP0603FTD100R                                                                                   | STACKPOLE ELECTRONICS INC                                                                 | 100 RES; SMT (0603); 100; 1%; +/- 100PPM/DEGC; 0.1250W                                    | 100 RES; SMT (0603); 100; 1%; +/- 100PPM/DEGC; 0.1250W                                                                                                                          |                                                                                           |
| 5                                                                                         | 1                                                                                         | R2                                                                                        | Pref                                                                                      | 80-0010K-53                                                                               | CRCW060310K0JN;ERJ-3GEYJ103                                                                       | VISHAY DALE;PANASONIC                                                                     | 10K                                                                                       | RES; SMT (0603); 10K; 5%; +/- 200PPM/DEGK; 0.1000W                                                                                                                              |                                                                                           |
| 6                                                                                         | 1                                                                                         | SU1                                                                                       | Pref                                                                                      | 02-JMPFS1100B-00                                                                          | S1100-B;SX1100-B;STC02SYAN                                                                        | KYCON;KYCON;SULLINS ELECTRONICS CORP.                                                     | SX1100-B                                                                                  | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                         |                                                                                           |
| 7                                                                                         | 1                                                                                         | U1                                                                                        | Pref                                                                                      | 00-SAMPLE-01                                                                              | MAX16191ATA00/VY+                                                                                 | MAXIM                                                                                     | MAX16191ATA00 /VY+                                                                        | EVKIT PART - IC; 0.3%; ACCURACY SUPERVISORY CIRCUIT; PACKAGE OUTLINE: 21-100341; PACKAGE LAND PATTERN: 90-100117; PACKAGE CODE: T822CY-2; TDFN8                                 |                                                                                           |
| 8                                                                                         | 1                                                                                         | PCB                                                                                       | -                                                                                         | EPCB16191                                                                                 | MAX16191                                                                                          | MAXIM                                                                                     | PCB                                                                                       | PCB:MAX16191                                                                                                                                                                    | -                                                                                         |
| TOTAL                                                                                     | 11                                                                                        |                                                                                           |                                                                                           |                                                                                           |                                                                                                   |                                                                                           |                                                                                           |                                                                                                                                                                                 |                                                                                           |
| DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                              | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                                                                                                            | DO NOT PURCHASE(DNP)                                                                      |
| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | VAR STATUS                                                                                | MAXINV                                                                                    | MFG PART #                                                                                        | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                     | COMMENTS                                                                                  |
| TOTAL                                                                                     | 0                                                                                         |                                                                                           |                                                                                           |                                                                                           |                                                                                                   |                                                                                           |                                                                                           |                                                                                                                                                                                 |                                                                                           |
| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)         | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)                                                                                       | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) |
| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | VAR STATUS                                                                                | MAXINV                                                                                    | MFG PART #                                                                                        | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                     | COMMENTS                                                                                  |
| TOTAL                                                                                     | 0                                                                                         |                                                                                           |                                                                                           |                                                                                           |                                                                                                   |                                                                                           |                                                                                           |                                                                                                                                                                                 |                                                                                           |

## MAX16191 EV Kit Schematic Diagram

<!-- image -->

│

## MAX16191 EV Kit PCB Layouts

MAX16191 EV Kit PCB Layout--Silk Top

<!-- image -->

MAX16191 EV Kit PCB Layout--Top

<!-- image -->

Evaluates: MAX16191

MAX16191 EV Kit PCB layout--Bottom

<!-- image -->

MAX16191 EV Kit PCB Layout--Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG. 0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VSHFL¿FDWLRQ

<!-- image -->

│

Evaluates: MAX16191