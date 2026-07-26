<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8989 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX8989 step-down converter with linear bypass regulator. The EV kit operates  from  a  2.7V  to  5.5V  power  supply  or  battery.  The output regulates to twice the voltage at REFIN (0.2V to 1.7V) and provides up to 2.5A drive capability.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                          |
|--------------------|-------|------------------------------------------------------------------------------------------------------|
| C1, C2, C4, C5, C6 |     5 | 4.7 F F 20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475M                                   |
| C3                 |     1 | 1000pF Q 5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H102J                                  |
| C7                 |     0 | Not installed, ceramic capacitor (0603)                                                              |
| JU1                |     1 | 2-pin header, 0.1in                                                                                  |
| JU2                |     1 | 3-pin header, 0.1in                                                                                  |
| L1                 |     1 | 4.7 F H Q 20%, 252m I , 850mA inductor, 1.2mm (max) height (2520) TOKO 1239AS-H-4R7N=P2 (DFE252012C) |
| U1                 |     1 | PWM step-down converter (9 WLP, 0.5mm pitch) Maxim MAX8989EWL+                                       |
| -                  |     2 | Shunts, 2-position                                                                                   |
| -                  |     1 | PCB: MAX8989 EVALUATION KIT+                                                                         |

## Evaluates:  MAX8989 MAX8989 Evaluation Kit

## Features

- S PA Step-Down Converter

25µs (typ) Settling Time for 0.4V to 3.2V OutputVoltage Change

Dynamic Output-Voltage Setting from 0.4V to VIN

85m I PFET and 100% Duty Cycle for Low Dropout

2MHz Switching Frequency

Low Output-Voltage Ripple

2% Output-Voltage Accuracy Over Load, Line, and Temperature

Tiny External Components

- S 2.5A Output-Current Capability
- S Simple Logic On/Off Control
- S Low 0.1µA Shutdown Current
- S 2.7V to 5.5V Supply Voltage Range
- S Thermal-Overload Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8989EVKIT+ | EV Kit |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX8989 when contacting these component suppliers.

## Evaluates:  MAX8989 MAX8989 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX8989 EV kit
- 2.7V  to  5.5V  power  supply  or  battery  capable  of delivering 2.5A
- Voltage  reference  or  power  supply  capable  of providing  0.2V  to  1.7V  (must  be  able  to  sink  and source up to 1mA)
- Voltmeter
- Load (resistor or electronic load)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Preset the power supply to 3.7V.
- 2) Preset the voltage reference between 0.2V and 1.7V.
- 3) Turn off the power supply and reference. Do not turn on the power supply until all connections are completed.
- 4) Remove the shunt from jumper JU1.
- 5) Connect  the  positive  power-supply  terminal  to  the EV kit PCB pad labeled IN.
- 6) Connect the negative power-supply terminal to the EV kit PCB pad labeled GND1.
- 7) Connect  the  positive  voltage-reference  terminal  to the EV kit PCB pad labeled REFIN.
- 8) Connect the negative voltage-reference terminal to the EV kit PCB pad labeled AGND.
- 9) Connect the load from OUT to GND2.

## Table 1. Jumper Settings (JU1, JU2)

|        | SHUNT POSITION   | SHUNT POSITION       | SHUNT POSITION                                   |
|--------|------------------|----------------------|--------------------------------------------------|
| JUMPER | OPEN             | 1-2                  | 2-3                                              |
| JU1    | Shutdown mode    | Output enabled       | -                                                |
| JU2    | -                | Forced-PWM operation | Skip mode enabled for light loads with VOUT < 1V |

- 10)  Turn on the power supply and voltage reference.
- 11)  Install the shunt on jumper JU1.
- 12)  With the voltmeter, verify that the voltage from OUT to PGND2 is approximately twice the reference voltage.

## Detailed Description of Hardware

The  MAX8989 output  regulates  to  twice  the  voltage  at REFIN and provides up to 2.5A drive capability. REFIN must connect to an external reference supply between 0.2V  and  1.7V.  Connect  the  ground  of  the  reference supply to the AGND PCB pad. Do not use AGND as a power-ground connection.

## Enable

Enable/shutdown control is provided by jumper JU1. For normal operation, place a shunt on the pins of JU1. For low-power shutdown mode, remove the shunt from JU1. In shutdown mode, the step-down regulator and LDO are off, reducing the supply current to 0.1µA (typ).

To drive the enable input from an external logic source, remove the shunt on JU1. Connect the logic signal to pin 2 of JU1. Connect the signal ground to AGND. Refer to the Electrical Characteristics section in the MAX8989 IC data sheet for the required logic levels.

## Skip Mode

The  device  has  an  optional  skip  mode.  To  enable  skip mode, connect pins 2-3 of jumper JU2. Skip mode provides  the  highest  possible  efficiency  during  light-load conditions, reducing the no-load supply current to 115µA (typ). Skip mode is only active when the output voltage is less than 1V.

To prevent the device from entering skip mode, connect pins 1-2 of JU2.

## Evaluates:  MAX8989 MAX8989 Evaluation Kit

Figure 1. MAX8989 EV Kit Schematic

<!-- image -->

## Evaluates:  MAX8989 MAX8989 Evaluation Kit

<!-- image -->

Figure 2. MAX8989 EV Kit Component Placement GuideComponent Side

Figure 3. MAX8989 EV Kit PCB Layout-Component Side (Layer 1)

<!-- image -->

Figure 4. MAX8989 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX8989 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

## Evaluates:  MAX8989 MAX8989 Evaluation Kit

Figure 6. MAX8989 EV Kit PCB Layout-Solder Side (Layer 4)

<!-- image -->

## Evaluates:  MAX8989 MAX8989 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/11            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.