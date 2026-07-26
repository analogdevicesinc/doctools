<!-- lastmod 2022-08-02 -->
## MAXM17504 5V Output Evaluation Kit

## General Description

The  MAXM17504  evaluation  kit  (EV  kit)  is  a  demonstration circuit  of  the  MAXM17504  high-voltage,  high-efficien -cy, current-mode scheme, synchronous step-down DC-DC  switching  power  module.  The  MAXM17504 EV  kit  is  designed  for  5V  output  and  delivers  up  to 3.5A  load  current  from  a  wide  input  voltage  range  of 11V  to  60V.  The  EV  kit  switches  at  an  optimal  500kHz switching frequency to allow the use of small component sizes  that  help  minimize  solution  size  while  maintaining high  performance.  The  EV  kit  provides  a  precisionenable  input,  an  open-drain RESET output  signal,  and external frequency synchronization to provide a simple and reliable  startup  sequence  and  eliminate  beat  frequency between  regulators.  The  EV  kit  also  includes  optional  component  footprints  to  program  different  output voltages, an adjustable input undervoltage-lockout, and a soft-start time to control inrush current during startup. The MAXM17504 data sheet provides a complete description of  the  part  that  should  be  read  in  conjunction  with  this evaluation  kit  data  sheet  prior  to  modifying  the  demo circuit.

Evaluates:  MAXM17504 in 5V

Output-Voltage Application

## Features

- Highly Integrated Solution with Integrated Shield Inductor
- Wide 11V to 60V Input Range
- Preset 5V Output with a Fixed Resistor-Divider on Feedback Pin (FB)
- Programmable Output Voltage Feature (0.9V to 12V)
- Up to 3.5A Output Current
- High 92.5% Efficiency (V IN  = 12V, V OUT  = 5V at 1.0A)
- 500kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- Selectable PWM, PFM, or DCM Mode
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Low-Profile, Surface-Mount Components
- Lead(Pb)-Free and RoHS Compliant
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17504 5V Output Evaluation Kit

## Quick Start

## Recommended Equipment

- MAXM17504 evaluation kit
- 11V to 60V DC power supply (V IN )
- Dummy load capable of sinking 3.5A
- Digital voltmeter (DVM)
- 100MHz dual-trace oscilloscope

## Procedure

The MAXM17504 EV kit is fully  assembled  and  tested. Please follow the steps below to verify board operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 11V and 60V. Disable the power supply.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to IN and PGND PCB pads, respectively.
- 3) Connect  the  positive  and  negative  terminals  of  the 3.5A load to OUT and PGND2 PCB pads, respectively, and set the load to 0A.
- 4) Connect the DVM across the OUT PCB pad and the PGND2 PCB pad.
- 5) Verify that no shunts are installed across pins 1-2 on jumper JU1 to enable UVLO (see Table 1 for details).
- 6) Verify that a shunt is installed across JU3 to disable the external synchronization (see Table 3 for details).
- 7) Verify that a shunt is installed across JU2 to enable PWM mode (see Table 2 for details).
- 8) Enable the input power supply.
- 9) Verify the DVM display 5V.
- 10)  Increase  the  load  up  to  3.5A  to  verify  the  DVM continue displaying 5V.

## Detailed Description of Hardware

The MAXM17504 EV kit is a proven circuit to demonstrate the  high-voltage,  high-efficiency,  and  compact  solution size  of  the  synchronous  step-down  DC-DC  power  module.  The  output  voltage  is  preset  to  5V  to  operate  from 11V  to  60V  and  provides  up  to  3.5A  load  current.  The optimal frequency is set at 500kHz to maximize efficiency and minimize component size. The EV kit includes jumper JU1 to enable/disable UVLO of the device, JU2 to configure  in  PWM,  PFM,  or  DCM  mode  in  advance  of light-load  efficiency,  and  JU3  to  enable/disable  external clock  synchronize  (SYNC).  The RESET PCB  pad  is

## Evaluates:  MAXM17504 in 5V Output-Voltage Application

also available for monitoring output-voltage regulation to enable/disable the application circuit of the load.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is programmed by the value of C1, the external  capacitor from SS to GND. The selected output capacitance (C SEL ) and  the  output  voltage  (V OUT )  determine  the  minimum value of C1, as shown by the following equation:

<!-- formula-not-decoded -->

where C1 is in nF and C SEL  is in µF.

The soft-start time (t SS ) is calculated by the equation below:

<!-- formula-not-decoded -->

where t SS  is in ms and C1 is in nF.

## Programmable Undervoltage-Lockout (UVLO)

The EV kit offers an adjustable input undervoltage-lockout level by resistor-dividers connecting between the IN, EN/ UVLO,  and  GND  pins.  For  normal  operation,  a  shunt should not be installed across pins 1-2 on JU1 to enable the output through an internal pullup 3.3MΩ resistor from EN/UVLO pin to IN pin. To disable the output, install the shunt  across  pins  1-2  on  JU1  to  pull  the  EN/UVLO  pin to GND. See Table 1 for JU1 setting details. The EV kit also provides an optional R3 PCB footprint to program a UVLO threshold voltage at which an input voltage level device turns on. The R3 resistor can be calculated by the following equation:

<!-- formula-not-decoded -->

where  V INU   is  the  input  voltage  at  which  the  device  is required to turn on, and R3 unit is in kΩ.

## Table 1. UVLO Enable/Disable Configuration (JU1)

| SHUNT POSITION   | EN PIN           | MAXM17504_ OUTPUT   |
|------------------|------------------|---------------------|
| Installed        | Connected to GND | Disable             |
| Not installed*   | Connected to VIN | Enable              |

* Default position.

│

## MAXM17504 5V Output Evaluation Kit

## MODE Selection (MODE)

The  device's  MODE  pin  can  be  used  to  select  among PWM, PFM, or DCM modes of operation in advance of constant  frequency  or  high-efficiency  at  light-load.  The logic  state  of  the  MODE  pin  is  latched  when  the  V CC and EN/UVLO voltage exceed the respective UVLO rising thresholds and all internal voltages are ready to allow LX switching.  The  changes  on  the  MODE  pin  are  ignored during  normal  operation.  Refer  to  the  MAXM17504 data  sheet  for  more  information  on  the  PWM,  PFM,  and DCM modes of operation.  Table  2  shows  EV  kit  jumper settings that can be used to configure the desired mode of operation.

## External Clock Synchronization (SYNC)

The internal oscillator of the device can be synchronized to  an  external  clock  signal  to  eliminate  beat  frequency between regulators through the SYNC pin. The external synchronization clock frequency must be between 1.1f SW to  1.4f SW ,  where  f SW   is  the  frequency  of  operation  set by R5. The minimum external clock high-pulse width and

## Table 2. MODE Description (JU2)

| SHUNT POSITION   | MODE PIN          | MAXM17504 MODE        |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3*             | Connected to GND  | PWM mode of operation |

* Default position.

## Evaluates:  MAXM17504 in 5V Output-Voltage Application

amplitude should be greater than 50ns and 2.1V, respectively. The minimum external clock low-pulse width should be greater than 160ns, and the maximum external clock low-pulse  amplitude  should  be  less  than  0.8V.  Table  3 describes the connection of the SYNC pin.

## Setting VOUT with a Resistive Voltage Divider at FB

The MAXM17504 EV kit is preset for 5V and offers an adjustable output voltage range from as low as 0.9V up to  12V  at  3.5A  maximum  load.  The  adjustable  output voltage can be programmed by the set of resistor dividers R1 and R2. Refer to Table 1 (Selection Component Values) in the MAXM17504 data sheet to select optimal component values  for  each  specific  input  voltage  range  from  4.5V up  to  60V  and  an  output  voltage  from  0.9V  up  to  12V. To obtain an output voltage other than the default setting outputs in Table 1, only seven component (R1, R2, C1, C2,  C3,  C4,  and  C8)  values  are  needed  to  modify  the equation  described  in  the Setting  the  Output  Voltage section of the MAXM17504 data sheet.

## Table 3. SYNC Description (JU3)

| SHUNT POSITION   | SYNC PIN                      | MAXM17504_SYNC                                       |
|------------------|-------------------------------|------------------------------------------------------|
| 1-2*             | Connected to SGND             | SYNC feature unused                                  |
| Not installed    | Connected to test loop on PCB | Frequency can be synchronized with an external clock |

* Default position.

│

## MAXM17504 5V Output Evaluation Kit

Evaluates:  MAXM17504 in 5V

Output-Voltage Application

## Typical Operating Characteristics (continued)

(V IN  = 11V - 60V, V OUT  = 5V, I OUT  = 0 - 3.5A, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAXM17504 5V Output Evaluation Kit

## Typical Operating Characteristics

(V IN  = 11V - 60V, V OUT  = 5V, I OUT  = 0 - 3.5A, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates:  MAXM17504 in 5V

Output-Voltage Application

│

## MAXM17504 5V Output Evaluation Kit

## Component Suppliers

| SUPPLIER                 | WEBSITE                  |
|--------------------------|--------------------------|
| Murata Americas          | www.murata.com           |
| NEC TOKIN America, Inc.  | www.nec-tokinamerica.com |
| Panasonic Corp.          | www.panasonic.com        |
| SANYO Electric Co., Ltd. | www.sanyodevice.com      |
| TDK Corp.                | www.component.tdk.com    |
| TOKOAmerica, Inc.        | www.tokoam.com           |

Note:

Indicate that you are using the MAXM17504 when contacting these component suppliers.

## Component List and Schematic

Refer to the following files attached to this data sheet for component information and schematic:

- MAXM17504EV\_BOM.xls
- MAXM17504\_EV\_Schematic.pdf

Evaluates:  MAXM17504 in 5V

Output-Voltage Application

│

## MAXM17504 5V Output Evaluation Kit

Figure 1. MAXM17504 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates:  MAXM17504 in 5V Output-Voltage Application

Figure 2. MAXM17504 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 3. MAXM17504 EV Kit PCB Layout-Component Side

<!-- image -->

## MAXM17504 5V Output Evaluation Kit

Figure 4. MAXM17504 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

## Evaluates:  MAXM17504 in 5V Output-Voltage Application

Figure 5. MAXM17504 EV Kit PCB Layout-PGND Layer 3

<!-- image -->

Figure 6. MAXM17504 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAXM17504 5V Output Evaluation Kit

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17504EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates:  MAXM17504 in 5V

Output-Voltage Application

## MAXM17504 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time.

│

Evaluates:  MAXM17504 in 5V

Output-Voltage Application