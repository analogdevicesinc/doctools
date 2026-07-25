<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: MAX77324

## General Description

The MAX77324 evaluation kit (EV kit) provides a proven design  to  evaluate  a  high-efficiency  synchronous  step -down  DC-DC  converter  with  integrated  MOSFETs  that operate over a 2.5V to 4.8V input voltage range, 0.6V to 2V output voltage range, and supports up to 1.5A of load current.  The  device  automatically  transitions  between PWM and SKIP modes of operation when the load condi -tion changes.

## MAX77324 Evaluation Kit

## Benefits and Features

- Proven PCB Reference Design and Layout
- Fully Assembled and Tested
- Sense Points for High-Accuracy Measurements
- Test Point and Jumper for Enable

Ordering Information appears at end of data sheet.

Figure 1. MAX77324 EV Kit Photo

<!-- image -->

## Quick Start

## Required Equipment

- MAX77324 EV kit
- Power supply with 6V and 1A capability
- Two digital voltmeter (DVM)
- Ammeter

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  these steps to verify board operation:

- 1) Install J1 as recommended in Table 1 .
- 2) Connect a disabled 3.8V bench power supply through an ammeter to the V IN  and PGND inputs. Set the in -put current limit of the bench power supply to 100mA. Set the ammeter range to its 10mA setting. Do not enable the output of the bench supply until prompted.
- 3) Connect a voltmeter to the VINS and GNDS terminals to measure input voltage.
- 4) Connect a voltmeter to the VOUTS and GNDS termi -nals to measure output voltage.
- 5) Enable the output of the bench power supply.
- 6) At this point, your setup is complete and the device under test (DUT) is Enabled. Confirm that your input current ammeter has ~45μA.
- 7) If  the  input  current  in  the  above  step  is  correct,  in -crease the input current limit of the bench supply to 1A. Also, increase the input ammeter range to 3A.
- 8) Observe the output voltage on the voltmeter between VOUTS and GNDS. Confirm that the output voltage matches the expected output voltage (refer to the Setting the Output Voltage section of the data sheet).
- At  higher  load/input  currents,  the  input  current ammeter  must  either  be  set  to  a  higher  range or bypassed, so as not to drop the input voltage (measured at VINS) below operating voltages.

## Detailed Description

## Enabling and Disabling the Regulator

Turn on the device by installing a jumper between posi -tions 1-2 on J1. The jumper connects the EN pin to V IN , enabling  the  regulator  with  soft-start.  Remove  jumper J1 to disable the regulator. EN has an internal pulldown resistor to ground.

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                  |
|------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1                     | 1-2                | 1-2: Connects EN to V IN to enable the regulator. Open: Disconnect EN from V IN to disable the regulator. EN has an internal pulldown resistor to ground. |

## Table 2. Setting the Output Voltage

|   V OUT (V) | R TOP (kΩ )   | R BOT (kΩ)   | C TOP (pF)   |
|-------------|---------------|--------------|--------------|
|         0.6 | Short         | Open         | Open         |
|        0.85 | 12.4          | 30.1         | 220          |
|         0.9 | 15            | 30.1         | 220          |
|        0.95 | 17.8          | 30.1         | 220          |
|         1.0 | 20            | 30.1         | 220          |
|         1.1 | 24.8          | 30.1         | 220          |
|         1.2 | 30.1          | 30.1         | 220          |
|        1.35 | 37.4          | 30.1         | 220          |
|         1.5 | 45.3          | 30.1         | 220          |
|         1.8 | 60.4          | 30.1         | 220          |
|         2.0 | 69.8          | 30.1         | 220          |

## MAX7324 Evaluation Kit

## Setting the Output Voltage

The  device  uses  resistors  to  set  the  output  voltage between 0.6V and 2V. Connect a resistor divider between V OUT,  FB,  and  AGND  as  shown  in  Figure  2 .  Choose R BOT (FB to AGND) to be less than or equal to 30.1kΩ. One percent accuracy resistors are highly recommended to  keep  the  accuracy  of  V OUT .  Calculate  the  value  of R TOP (V OUT  to  FB)  for  a  desired  output  voltage  with Equation 1.

## Equation 1:

<!-- formula-not-decoded -->

Where  V FB is  0.6V  and  V OUT is  the  desired  output voltage.

CTOP is to maintain the stability of the device. Suggest CTOP  to  be  220pF  for  the  full  operation  range  of  the device.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77324EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX77324

On the MAX77324 evaluation board, default V OUT is set to 1.2V by choosing the value of both R BOT and R TOP to be equal (30.1kΩ).

Figure 2. Setting the Output Voltage for MAX77324

<!-- image -->

## MAX77324 EV Kit Bill of Materials

| ITEM   | REF_DES                       | DNI/DNP   |   QTY | MFG PART #                             | MANUFACTURER              | VALUE     | DESCRIPTION                                                                                                      | COMMENTS   |
|--------|-------------------------------|-----------|-------|----------------------------------------|---------------------------|-----------|------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C2, C3                        | -         |     2 | C1608X5R0J226M080AC; GRM188R60J226ME15 | TDK;MURATA                | 22UF      | CAP; SMT (0603); 22UF; 20%; 6.3V; X5R; CERAMIC                                                                   |            |
| 2      | C4                            | -         |     1 | GRM155R71H221KA01; C1005X7R1H221K050BA | MURATA;TDK                | 220PF     | CAP; SMT (0402); 220PF; 10%; 50V; X7R; CERAMIC                                                                   |            |
| 3      | C7                            | -         |     1 | TCJB107M006R0070                       | AVX                       | 100UF     | CAP; SMT (3528); 100UF; 20%; 6.3V; TANTALUM                                                                      |            |
| 4      | EN                            | -         |     1 | 5002                                   | KEYSTONE                  | N/A       | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;            |            |
| 5      | GNDS, VINS, VOUTS             | -         |     3 | 5000                                   | KEYSTONE                  | N/A       | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 6      | J1                            | -         |     1 | PBC02SAAN                              | SULLINS ELECTRONICS CORP. | PBC02SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                        |            |
| 7      | L1                            | -         |     1 | HTTL25201T-R47MSRG-57                  | CYNTEC                    | 0.47UH    | INDUCTOR; SMT; COMPOSITE; 0.47UH; 20%; 6A;                                                                       |            |
| 8      | PGND, PGND2, PGND3, VIN, VOUT | -         |     5 | 9020 BUSS                              | WEICO WIRE                | MAXIMPAD  | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                        |            |
| 9      | R1, R2                        | -         |     2 | CRCW04023012FK; CRCW040230K1FK         | VISHAY;VISHAY             | 30.1K     | RES; SMT (0402); 30.1K; 1%; +/-100PPM/DEGC; 0.0630W                                                              |            |
| 10     | U1                            | -         |     1 | MAX77324EWTAD+                         | MAXIM                     | MAX77324  | EVKIT PART - IC; MAX77324; PACKAGE OUTLINE DRAWING: 21-100169; PACKAGE CODE: N60H1+1; 0.40MM PITCH               |            |
| 11     | PCB                           | -         |     1 | MAX77324SOLDERDOWN                     | MAXIM                     | PCB       | PCB:MAX77324SOLDERDOWN                                                                                           | -          |
| 12     | C1, C5                        | DNP       |     0 | N/A                                    | N/A                       | OPEN      | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                          |            |
| 13     | C6, C8                        | DNP       |     0 | N/A                                    | N/A                       | OPEN      | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                          |            |
| TOTAL  |                               |           |    19 |                                        |                           |           |                                                                                                                  |            |

Evaluates: MAX77324

## MAX7324 Evaluation Kit

## MAX77324 EV Schematic

<!-- image -->

Evaluates: MAX77324

## MAX7324 Evaluation Kit

## MAX77324 EV PCB Layout

MAX77324 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77324 EV Kit PCB Layout-Top

<!-- image -->

MAX77324 EV Kit PCB Layout-Bottom

<!-- image -->

MAX77324 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX7324 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------|-----------------|
|                 0 | 5/18            | Initial release                         | -               |
|                 1 | 7/26            | Updated Bill of Materials and Schematic | 4, 5            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.

Evaluates: MAX77324