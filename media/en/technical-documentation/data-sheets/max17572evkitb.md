<!-- lastmod 2022-08-02 -->
## MAX17572 5V Output Evaluation Kit

## General Description

The MAX17572 5V output evaluation kit (EV kit) provides a proven design to evaluate the MAX17572 high-voltage, high-efficiency, synchronous step-down DC-DC converter. The EV kit is preset for 5V output at load currents up to 1A and features a 500kHz switching frequency for optimum efficiency and component size. The EV kit features adjustable input  undervoltage-lockout,  adjustable  soft-start,  opendrain RESET signal, and external frequency synchronization.

## Features

- Operates From a 6V to 60V Input Supply
- 5V Output Voltage
- Up to 1A Output Current
- 500kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17572 in 5V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17572 5V output EV kit
- 6V to 60V, 2A DC input power supply
- Load capable of sinking 1A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed .

- 1) Set the power supply at a voltage between 6V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the V IN  PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 1A load to the V OUT  PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the V OUT  PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1 (see Table 1 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 5V

<!-- image -->

## MAX17572 5V Output Evaluation Kit

## Detailed Description of Hardware

The  MAX17572  5V  output  EV  kit  provides  a  proven design  to  evaluate  the  MAX17572  high-voltage,  high efficiency,  synchronous  step-down  DC-DC  converter. The EV kit is preset for 5V output from 6V to 60V input at load currents up to 1A and features a 500kHz switching frequency  for  optimum  efficiency  and  component  size. The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. An additional  RESET  PCB  pad  is  available  for  monitoring whether the converter output is in regulation.

## Soft-Start Capacitor Selection

The device implements adjustable soft-start operation to reduce inrush current. A capacitor connected from the SS pin  to  GND  programs  the  soft-start  time.  The  selected output capacitance (C SEL ) and the output voltage (V OUT ) determine  the  minimum  required  soft-start  capacitor  as follows:

<!-- formula-not-decoded -->

The  soft-start time  (t SS ) is  related  to  the  capacitor connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  2ms  soft-start  time,  a  12nF capacitor should be connected from the SS pin to GND.

## Setting the Undervoltage-Lockout Level

The device offers an adjustable input undervoltage-lockout level.  Set  the  voltage  at  which  the  device  turns  on  with a resistive voltage-divider connected from V IN  to SGND.

## Table 1. TBD

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17572_ OUTPUT                                        |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to VIN                                           | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

│

## Evaluates: MAX17572 in 5V Output-Voltage Application

Connect  the  center  node  of  the  divider  to  EN/UVLO. Choose R1 to be 3.3MΩ and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on. Ensure that V INU  is higher than 0.8 x V OUT .

If the EN/UVLO pin is driven from an external signal source, a series resistance of minimum 1kΩ is recommended to be placed between the signal source output and the EN/UVLO pin, to reduce voltage ringing on the line.

## Adjusting Output Voltage

Set the output voltage with a resistive voltage-divider connected from the positive terminal of the output capacitor (V OUT ) to SGND. Connect the center node of the divider to the FB pin. Use the following procedure to choose the resistive voltage-divider values:

Calculate  resistor  R4  from  the  output  to  the  FB  pin  as follows:

<!-- formula-not-decoded -->

Where COUT\_SEL (in µF) is the actual derated value of the output capacitance used and R3 is in kΩ. The minimum allowable value of R3 is (5.6 x V OUT ), where R3 is in kΩ. If  the  value  of  R3  calculated  using  the  above  equation is less than (5.6 x V OUT ), increase the value of R3 to at least (5.6 x V OUT ).

<!-- formula-not-decoded -->

R3 is in kΩ.

## MAX17572 5V Output Evaluation Kit

Figure 1. Setting the Input Undervoltage Lockout

<!-- image -->

## EV Kit Performance Report

<!-- image -->

## Evaluates: MAX17572 in 5V Output-Voltage Application

<!-- image -->

Figure 2: Adjusting Output Voltage

<!-- image -->

│

## MAX17572 5V Output Evaluation Kit

## EV Kit Performance Report (continued)

<!-- image -->

## Evaluates: MAX17572 in 5V Output-Voltage Application

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Vishay          | www.vishay.com    |
| Onsemi          | www.onsemi.com    |

Note:

Indicate that you are using the MAX17572 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17572EVKITB# | EV KIT |

│

## MAX17572 5V Output Evaluation Kit

## MAX17572 EV System Bill of Materials

|   NO. | DESCRIPTION                                      |   QUANTITY | DESIGNATOR        | PART NUMBER                                  |
|-------|--------------------------------------------------|------------|-------------------|----------------------------------------------|
|     1 | 2.2uF 10%, 100V ,X7R, Ceramic capacitor (1210)   |          1 | C1                | MURATA GRM32ER72A225KA35                     |
|     2 | 10uF 10%, 10V ,X7R, Ceramic capacitor (1210)     |          1 | C2                | MURATA GRM32DR71A106KA01                     |
|     3 | 33uF,20%,80V, ELECT,10mm                         |          1 | C3                | PANASONIC EEE-FK1K330P                       |
|     4 | 1uF 10%, 6.3V ,X7R, Ceramic capacitor (0603)     |          1 | C4                | MURATA GRM188R70J105KA01                     |
|     5 | 5600pF,10%,50V,X7R,0402, Ceramic capacitor(0402) |          1 | C5                | KEMET C0402C562K5RAC                         |
|     6 | 0.1uF,10%,50V,X7R, Ceramic capacitor(0402)       |          2 | C6,C7             | MURATA GRM155R71H104KE14                     |
|     7 | 47pF,10%,50V,X7R,0402, Ceramic capacitor(0402)   |          1 | C8                | MURATA GRM1555C1H470JA01                     |
|     8 | 100pF,10%,50V,X7R,0402, Ceramic capacitor(0402)  |          1 | C9                | KEMET C0402C101K5GAC, TDKC1005C0G1H101K050BA |
|     9 | 0.1uF,10%,100V,X7R,0603, Ceramic capacitor(0603) |          1 | C10               | MURATA GRM188R72A104KA35                     |
|    10 | Diode PIV=20V; IF=0.5A                           |          1 | D1                | ON SEMICONDUCTOR NSR05F20NXT5G               |
|    11 | 3-pin header (36-pin header 0.1' centers )       |          1 | JU1               | Sullins: PTC36SAAN                           |
|    12 | INDUCTOR, 15uH, 2.8A                             |          1 | L1                | COILCRAFT XAL4040-153ME                      |
|    13 | RES+,3.32MOHM,1%,0402                            |          1 | R1                |                                              |
|    14 | RES+,604K OHM,1%,0402                            |          1 | R2                |                                              |
|    15 | RES+,178K OHM,1%,0402                            |          1 | R3                |                                              |
|    16 | RES+, 39KOHM,1%,0402                             |          1 | R4                |                                              |
|    17 | RES+, 4.7OHM,1%,0402                             |          1 | R5                |                                              |
|    18 | RES+,100K OHM,1%,0402                            |          1 | R6                |                                              |
|    19 | RES+,40.2K OHM,1%,0402                           |          1 | R7                |                                              |
|    20 | RES+,1K OHM,1%,0402                              |          1 | R8                |                                              |
|    21 | Buck Converter MAX17572ATJ+                      |          1 | U1                | MAX17572ATJ+                                 |
|    22 | 3 pin headers                                    |          1 | See Jumper Table1 | SULLINS STC02SYAN                            |

## Evaluates: MAX17572 in 5V Output-Voltage Application

## MAX17572 EV System Schematic

<!-- image -->

## MAX17572 5V Output Evaluation Kit

## MAX17572 EV System PCB Layout

MAX17572 5V EV Kit-Top Silkscreen

<!-- image -->

## Evaluates: MAX17572 in 5V Output-Voltage Application

MAX17572 5V EV Kit-Top

<!-- image -->

MAX17572 5V EV Kit-Bottom

<!-- image -->

│

## MAX17572 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,nteJrated reserYes the riJht to chanJe the circuitr\ and speci¿cations without notice at an\ time.

│

Evaluates: MAX17572 in 5V

Output-Voltage Application