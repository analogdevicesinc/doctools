<!-- lastmod 2022-08-02 -->
## MAXM17502 5V Output Evaluation Kit

## General Description

The MAXM17502 evaluation kit (EV kit) is a demonstration circuit  of  the  MAXM17502  high-voltage,  high-efficiency, current  mode,  synchronous  step-down  DC-DC  switching power  module.  The  EV  kit  is  designed  to  provide  5V with  up  to  1A  load  of  current  from  a  wide  input-voltage range of 12V to 60V. The EV kit switches at an optimal 540kHz switching frequency to allow for small component and  solution  sizes  while  maintaining  high  performance. The  EV  kit  provides  a  precision-enable  input  and  an open-drain RESET output signal to provide a simple and reliable  startup  sequence.  The  EV  kit  also  includes optional  component  footprints  to  program  different  output voltages,  an  adjustable  input  undervoltage-lockout,  and  a soft-start time to control inrush current during startup. The MAXM17502  module  data  sheet  provides  a  complete description of the part and should be read in conjunction with this evaluation kit data sheet prior to modifying the demo circuit.

## Features

- Highly Integrated Solution with an Integrated, Shielded Inductor
- Wide 12V to 60V Input Range
- Preset 5V Output Voltage
- Up to 1A Output Current
- High Efficiency 84% (V IN = 24V, V OUT = 5V at 1.0A)
- 540kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- Open-Drain RESET Output
- Internally Compensated
- Overcurrent and Overtemperature Protection
- Low-Profile, Surface-Mount Components
- Lead(Pb)-Free and RoHS Compliant
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates:  MAXM17502 in a 5V

## Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAXM17502 EV kit
- 60V DC power supply (V IN )
- Dummy load capable of sinking 1A
- Digital voltmeter (DVM)
- 100MHz dual-trace oscilloscope

## Procedure

The EV kit is fully assembled and tested. Please follow the  steps  below  to  verify  board  operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 12V and 60V. Disable the power supply.
- 2) Connect the positive and negative terminals of the power supply to IN and PGND PCB pads, respectively.
- 3) Connect the positive and negative terminals of the 1A load to OUT and PGND2 PCB pads, respectively, and set the load to 0A.
- 4) Connect the DVM across the OUT PCB pad and the PGND2 PCB pad.
- 5) Verify that no shunts are installed across pin 1-2 on jumper JU1 to enable UVLO (see Table 1 for details).
- 6) Enable the input power supply.
- 7) Verify the DVM display 5V.
- 8) Increase the load up to 1A to verify the DVM continue displaying 5V.

<!-- image -->

## MAXM17502 5V Output Evaluation Kit

## Detailed Description of Hardware

The MAXM17502 EV kit is a proven circuit to demonstrate the  high-voltage,  high-efficiency,  and  compact  solutionsize of the synchronous step-down DC-DC power module. The output voltage is preset for 5V to operate from 12V to  60V and provides up to 1A load current. The optimal frequency  is  set  at  540kHz  to  maximize  efficiency  and minimize  component  size.  The  EV  kit  includes  JU1  to enable/disable UVLO of the device. The RESET PCB pad is also available for monitoring output voltage regulation to enable or disable the application circuit of the load. The electrolytic capacitor (C51) is required only when the V IN power supply is situated far from the device circuit.

## Soft-Start Input (SS)

The device integrates a 10nF soft-start capacitor to limit inrush current during startup. The minimum soft-start time is 1.8ms. The soft-start time can be increased by connect -ing an additional capacitor (C SS ) from SS to GND. The value of the additional capacitor can be calculated from the desired soft-start as follows:

<!-- formula-not-decoded -->

where t SS  is in ms and C SS  is in nF.

## Evaluates:  MAXM17502 in a 5V Output-Voltage Application

## Programmable Undervoltage-Lockout (UVLO)

The EV kit offers an adjustable input undervoltage-lockout level by resistor dividers connecting between IN, EN/UVLO, and GND pins. For normal operation, a shunt should not be installed across pins 1-2 on JU1 to enable the output through an external pull up 3.3MΩ resistor from EN/UVLO pin to IN pin. To disable the output, install the shunt across pins 1-2 on JU1 to pull EN/UVLO pin to GND. See Table 1 for JU1 setting details. The EV kit also provides an optional R56 PCB footprint to program a UVLO threshold voltage at which an input voltage level device turns on. The R56 resistor can be calculated by the following equation:

<!-- formula-not-decoded -->

where  V INU   is  the  input  voltage  at  which  the  device  is required to turn on and R56 unit is in kΩ.

## Setting V OUT  with a Resistive Voltage-Divider at FB

The EV kit is preset for 5V and offers an adjustable output voltage range as low as 0.9V and up to 5V at 1A maximum load. The adjustable output voltage can be programmed by  the  set  of  resistor-dividers  R1  and  R2.  Refer  to  the Components Selection Table of the MAXM17502 IC data sheet  to  select  optimal  component  values  for  each specific input voltage range from 12V to 60V and an output voltage from 0.9V to 5V. To obtain an output voltage other than those provided in Table 1 of the MAXM17502 module data sheet, R1 and R2 need to be modified according to the  equations  described  in Setting  the  Output  Voltage section of the MAXM17502 data sheet.

## Table 1. UVLO Enable/Disable Configuration (JU1)

| SHUNT POSITION   | EN PIN           | MAXM17502_OUTPUT   |
|------------------|------------------|--------------------|
| Installed        | Connected to GND | Disable            |
| Not installed*   | Connected to VIN | Enable             |

* Default position.

## MAXM17502 5V Output Evaluation Kit

## Typical Operating Characteristics

(V IN = 12V - 60V, V OUT = 5V, I OUT  = 0 -1A, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates:  MAXM17502 in a 5V Output-Voltage Application

<!-- image -->

<!-- image -->

## MAXM17502 5V Output Evaluation Kit

## Component Suppliers

| SUPPLIER                 | WEBSITE                  |
|--------------------------|--------------------------|
| Murata Americas          | www.murata.com           |
| NEC TOKIN America, Inc.  | www.nec-tokinamerica.com |
| Panasonic Corp.          | www.panasonic.com        |
| SANYO Electric Co., Ltd. | www.sanyodevice.com      |
| TDK Corp.                | www.component.tdk.com    |
| TOKOAmerica, Inc.        | www.tokoam.com           |

Note: Indicate that you are using the MAXM17502 when contacting these component suppliers.

## MAXM17502 EV Kit Bill of Materials

|   S.NO | Designation                    | VALUE     |   QTY | DESCRIPTION                                                                                                                                                  | MFG PART #                           | MANUFACTURER              |
|--------|--------------------------------|-----------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|---------------------------|
|      1 | C1                             | 2.2UF     |     1 | CAPACITOR; SMT (1206); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                | GRM31CR72A225KA73; KRM31KR72A225KH01 | MURATA                    |
|      2 | C2                             | 10UF      |     1 | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                            | C1210C106K3RAC; GRM32DR71E106K       | KEMET/MURATA              |
|      3 | C51                            | 33UF      |     1 | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 33UF; 80V; TOL=20%; MODEL=FK SERIES                                                                          | EEE-FK1K330P                         | PANASONIC                 |
|      4 | GND, VOUT, PGND1, PGND2, PVIN1 | MAXIMPAD  |     5 | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                     | 9020 BUSS                            | WEICO WIRE                |
|      5 | JU1                            | PEC02SAAN |     1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                    | PEC02SAAN                            | SULLINS                   |
|      6 | R1                             | 75K       |     1 | RESISTOR; 0603; 75K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                       | ERJ-3EKF7502V                        | PANASONIC                 |
|      7 | R2                             | 16.5K     |     1 | RESISTOR; 0603; 16.5K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                                                     | CRCW060316K5FK                       | VISHAY DALE               |
|      8 | R55                            | 3.3M      |     1 | RESISTOR, 0603, 3.3M OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                      | CRCW06033M30FK                       | VISHAY DALE               |
|      9 | SH1                            | STC02SYAN |     1 | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                      | STC02SYAN                            | SULLINS ELECTRONICS CORP. |
|     10 | TP1, TP3-TP5                   | N/A       |     4 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN | 5005                                 | KEYSTONE                  |
|     11 | U1                             | MAXM17502 |     1 | EVKIT PART-MODULE; PWRM; HIGH VOLTAGE; HIGH-EFFICIENCY STEP-DOWN POWER MODULE; LGA28-3EP                                                                     | MAXM17502ALI+T                       | MAXIM                     |
|     12 |                                | PCB       |     1 | PCB: MAXM17502                                                                                                                                               | MAXM17502                            | MAXIM                     |

TOTAL

19

Evaluates:  MAXM17502 in a 5V

Output-Voltage Application

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17502EVKIT# | EV Kit |

# Denotes lead(Pb)-free and RoHS compliant.

## MAXM17502 5V Output Evaluation Kit

## MAXM17502 EV Kit PCB Layout Diagrams

MAXM17502 EV Kit-Bottom

<!-- image -->

## Evaluates:  MAXM17502 in a 5V Output-Voltage Application

MAXM17502 EV Kit-Top

<!-- image -->

## MAXM17502 EV Kit Schematic

<!-- image -->

## MAXM17502 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates:  MAXM17502 in a 5V

Output-Voltage Aplication