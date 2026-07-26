<!-- lastmod 2022-08-02 -->
## MAXM17544 3.3V Output Evaluation Kit

## General Description

The  MAXM17544  evaluation  kit  (EV  kit)  is  a  demonstration circuit  of  the  MAXM17544  high-voltage,  high-efficiency, current-mode  scheme,  synchronous  step-down,  DC-DC switching power module. The EV kit is designed for a 3.3V output and delivers up to 3.5A load current from a wide input-voltage range of 4.5V to 42V. The EV kit switches at an optimal 500kHz switching frequency to allow the use of small component-sizes, helping to minimize solution-size while maintaining high-performance. The EV kit provides a  precision-enable  input,  an  open-drain RESET output signal, and external frequency synchronization to provide a simple and reliable startup sequence and eliminate beat frequency between regulators. The EV kit also includes optional component footprints to program different output voltages,  an  adjustable  input  undervoltage-lockout,  and a soft-start  time  to  control  inrush  current  during  startup. The  MAXM17544  IC  data  sheet  provides  a  complete description of the part that should be read in conjunction with this evaluation kit data sheet prior to modifying the demo circuit.

Ordering Information appears at end of data sheet.

## Evaluates:  MAXM17544 in 3.3V Output-Voltage Application

## Features

- Highly Integrated Solution with Integrated Shield Inductor
- Wide 4.5V to 42V Input Range
- Preset 3.3V Output with a Fixed Resistor-Divider on FB (Feedback Pin)
- Programmable Output-Voltage Feature (0.9V to 12V)
- Up to 3.5A Output Current
- High 91.2% Efficiency (V IN  = 12V, V OUT  = 3.3V at 0.74A)
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

<!-- image -->

## MAXM17544 3.3V Output Evaluation Kit

## Quick Start

## Recommended Equipment

- MAXM17544 EV kit
- 4.5V to 42V DC power supply (V IN )
- Dummy load capable of sinking 3.5A
- Digital voltmeter (DVM)
- 100MHz dual-trace oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 4.5V and 42V. Disable the power supply.
- 2) Connect the positive and negative terminals of the power supply to IN and PGND PCB pads, respectively.
- 3) Connect the positive and negative terminals of the 3.5A load to OUT and PGND2 PCB pads, respectively, and set the load to 0A.
- 4) Connect the DVM across the OUT PCB pad and the PGND2 PCB pad.
- 5) Verify that no shunts are installed across pin 1-2 on jumper JU1 to enable UVLO (see Table 1 for details).
- 6) Verify that a shunt is installed across JU3 to disable the external synchronization (see Table 3 for details).
- 7) Verify that a shunt is installed across JU2 to enable PWM mode (see Table 2 for details).
- 8) Enable the input power supply.
- 9) Verify the DVM displays 3.3V.
- 10)  Increase the load up to 3.5A to verify the DVM continues displaying 3.3V.

## Detailed Description of Hardware

The  EV  kit  is  a  proven  circuit  to  demonstrate  the  highvoltage, high-efficiency, and compact solutionsize of the synchronous step-down,  DC-DC  power module. The output voltage is preset for 3.3V to operate from 4.5V to 42V and provides up to 3.5A load current. The  optimal  frequency  is  set  at  500kHz  to  maximize efficiency  and  minimize  component  size.  The  EV  kit  includes jumpers JU1 to enable/disable UVLO of the device, JU2 to configure in PWM, PFM, or DCM mode in advantage of light-load efficiency, and JU3 to enable/disable external clock synchronize (SYNC). The RESET PCB pad is also available  for  monitoring  output  voltage  regulation  to enable/disable the application circuit of the load. The electrolytic capacitor (C8) is required only when the V IN  power supply  is  situated  far  from  device  circuit.  When  R4  is open, the device switches at 500kHz switching frequency.

## Evaluates:  MAXM17544 in 3.3V Output-Voltage Application

On  the  bottom  layer,  additional  footprints  of  optional components are included to ease board modification for different input/output configurations.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is programmed by the value of the external capacitor from SS to GND (C1). The selected output capacitance (C SEL ) and  the  output  voltage  (V OUT )  determine  the  minimum value of C1, as shown by the following equation:

<!-- formula-not-decoded -->

where C1 is in nF and C SEL  is in µF

The  soft-start  time  (t SS )  is  calculated  by  the  equation below:

<!-- formula-not-decoded -->

where t SS  is in ms and C1 is in nF.

## Programmable Undervoltage Lockout (UVLO)

The  EV  kit  offers  an  adjustable-input  undervoltagelockout  level  by  resistor-dividers  connected  between IN,  EN/UVLO,  and  GND  pins.  For  normal  operation,  a shunt  should  not  be  installed  across  pins  1-2  on  JU1 to  enable  the  output  through  an  internal  pullup  3.3MΩ resistor from the EN/UVLO pin to IN pin. To disable the output,  install  the  shunt  across  pins  1-2  on  JU1  to pull  EN/UVLO  pin  to  GND.  See  Table  1  for  JU1 jumper  settings.  The  EV  kit  also  provides  an  optional R3 PCB footprint to program a UVLO threshold voltage at  which an input-voltage level device turns on. The R3 resistor can be calculated by the following equation:

<!-- formula-not-decoded -->

where  V INU   is  the  input  voltage  at  which  the  device  is required to turn on, and R3 unit is in kΩ.

## Table 1. UVLO Enable/Disable Configuration (JU1)

| SHUNT POSITION   | EN PIN           | MAXM17544_OUTPUT   |
|------------------|------------------|--------------------|
| Installed        | Connected to GND | Disable            |
| Not installed*   | Connected to VIN | Enable             |

## MAXM17544 3.3V Output Evaluation Kit

## Mode Selection (MODE)

The  device's  MODE  pin  can  be  used  to  select  among PWM, PFM, or DCM modes of operation in advance of constant frequency or high efficiency at light loads. The logic  state  of  the  MODE  pin  is  latched  when  the  VCC and  EN/UVLO  voltage  exceed  the  respective  UVLO rising  thresholds  and  all  internal  voltages  are  ready to  allow  LX  switching.  The  changes  on  the  MODE pin  are  ignored  during  normal  operation.  Refer  to  the MAXM17544 IC data sheet for more information on PWM, PFM, and DCM modes of operation. Table 2 shows EV kit jumper settings that can be used to configure the desired mode of operation.

## External Clock Synchronization (SYNC)

The internal oscillator of the device can be synchronized to  an  external  clock  signal  to  eliminate  beat  frequency between regulators through the SYNC pin. The external synchronization clock frequency must be between 1.1f SW to  1.4f SW ,  where  f SW   is  the  frequency  of  operation  set by R5. The minimum external clock high pulse width and

## Table 2. MODE Description (JU2)

| SHUNT POSITION   | MODE PIN         | MAXM17544_MODE        |
|------------------|------------------|-----------------------|
| Not installed    | Unconnected      | PFM mode of operation |
| 1-2              | Connected to VCC | DCM mode of operation |
| 2-3*             | Connected to GND | PWM mode of operation |

* Default position.

## Evaluates:  MAXM17544 in 3.3V Output-Voltage Application

amplitude should be greater than 50ns and 2.1V, respectively. The minimum external clock low pulse width should be greater  than  160ns,  and  the  maximum  external  clock low  pulse  amplitude  should  be  less  than  0.8V.  Table  3 describes the connection of the SYNC pin.

## Setting VOUT with a Resistive Voltage Divider at FB

The  EV  kit  is  preset  for  3.3V  and  offers  an  adjustable output voltage range as low as 0.9V up to 12V at 3.5A maximum  load.  The  adjustable  output  voltage  can  be programmed by the set of resistor dividers  R1  and  R2. Refer to the Table 1 (Selection Component Values) on the MAXM17544 IC data sheet to select optimal component values  for  each  specific  input  voltage  range  from  4.5V up to 42V and an output voltage from 0.9V up to 12V. To obtain a different output voltage other than default setting outputs in Table 1, only six component (R1, R2, C1-C3, and  C8)  values  need  to  be  modified  by  the  equation described in the Setting the Output Voltage section in the MAXM17544 IC data sheet.

## Table 3. SYNC Description (JU3)

| SHUNT POSITION   | SYNC PIN                      | MAXM17544_SYNC                                       |
|------------------|-------------------------------|------------------------------------------------------|
| 1-2*             | Connected to SGND             | SYNC feature unused                                  |
| Not installed    | Connected to test loop on PCB | Frequency can be synchronized with an external clock |

## MAXM17544 3.3V Output

## Evaluation Kit

## Typical Operating Characteristics

(V IN  = 4.5V - 42V, V OUT  = 3.3V, I OUT  = 0 - 3.5A, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates:  MAXM17544 in 3.3V

Output-Voltage Application

## MAXM17544 3.3V Output Evaluation Kit

Evaluates:  MAXM17544 in 3.3V

Output-Voltage Application

## Typical Operating Characteristics (continued)

(V IN  = 4.5V - 42V, V OUT  = 3.3V, I OUT  = 0 - 3.5A, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17544 3.3V Output Evaluation Kit

## Component Suppliers

| SUPPLIER                 | WEBSITE                  |
|--------------------------|--------------------------|
| Murata Americas          | www.murata.com           |
| NEC TOKIN America, Inc.  | www.nec-tokinamerica.com |
| Panasonic Corp.          | www.panasonic.com        |
| SANYO Electric Co., Ltd. | www.sanyodevice.com      |
| TDK Corp.                | www.component.tdk.com    |
| TOKOAmerica, Inc.        | www.tokoam.com           |

Note: Indicate that you are using the MAXM17544 when contacting these component suppliers.

## Component List and Schematic

Refer to the following files attached to this data sheet for component information and schematic:

- MAXM17544\_EV\_BOM.xls
- MAXM17544\_EV\_Schematic.pdf

Evaluates:  MAXM17544 in 3.3V

Output-Voltage Application

## MAXM17544 3.3V Output Evaluation Kit

Figure 1. MAXM17544 EV Kit Component Placement GuideComponent-Side

<!-- image -->

## Evaluates:  MAXM17544 in 3.3V Output-Voltage Application

Figure 2. MAXM17544 EV Kit Component Placement GuideSolder-Side

<!-- image -->

Figure 3. MAXM17544 EV Kit PCB Layout-Component Side

<!-- image -->

## MAXM17544 3.3V Output Evaluation Kit

Figure 4. MAXM17544 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

## Evaluates:  MAXM17544 in 3.3V Output-Voltage Application

Figure 5. MAXM17544 EV Kit PCB Layout-PGND Layer 3

<!-- image -->

Figure 6. MAXM17544 EV Kit PCB Layout-Solder-Side

<!-- image -->

## MAXM17544 3.3V Output Evaluation Kit

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17544EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates:  MAXM17544 in 3.3V

Output-Voltage Application

## MAXM17544 3.3V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications Zithout notice at any time.

Evaluates:  MAXM17544 in 3.3V

Output-Voltage Application