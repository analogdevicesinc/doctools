<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX17083 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the typical 5A application circuit of the MAX17083. The MAX17083 is a DC-DC converter that steps down the system's 3.3V or 5V input supply for low-voltage, low-power applications.

The MAX17083 EV kit provides a 1.1V output voltage from a 2.4V to 5.5V input range. It delivers up to 5A output current while achieving greater than 90% efficiency. Programmed through jumper JU4, the EV kit operates at 1MHz switching frequency and has superior line- and load-transient response. The EV kit also allows the evaluation of other adjustable output voltages from 0.75V to 2.7V, by varying the SET pin and changing resistors R3 and R4.

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 10µF ±10%, 10V X5R ceramic capacitors (0805) Murata GRM21BR61A106K TDK C2012X5R0J106M    |
| C3, C5        |     2 | 1µF ±10%, 6.3V X7R ceramic capacitors (0402) Murata GRM155R61A105K TDK C1005X5R0J105M    |
| C4, C6        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) TDK C1005X5R1C104K Murata GRM155R71C104K   |
| C7            |     1 | Not installed, POSCAP (D Case)                                                           |
| C8            |     0 | 0.1µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM319R71H104K TDK C3216X7R1H104K    |
| C9            |     0 | Not installed, ceramic capacitor (0402)                                                  |
| C20           |     1 | 220µF, 6m Ω , 2V ESR POSCAP (D Case) SANYO 2TPF220M6 Panasonic EEFSD0E221R (7m Ω , 2.5V) |

Features

- ♦ 2.4V to 5.5V Input Range
- ♦ Configured for 1.1V Output Voltage
- ♦ Adjustable Output-Voltage Range (0.75V to 2.7V)
- ♦ 5A Output Current
- ♦ 90% Efficiency (VIN = 3.3V, VOUT = 1.1V at 2A)
- ♦ 1MHz Switching Frequency
- ♦ Pin-Selectable Four-Level Switching Frequency (500kHz, 750kHz, 1MHz, and 1.5MHz)
- ♦ Enable Input
- ♦ Power-Good Output Indicator (POK)
- ♦ Low-Profile Surface-Mount Components
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17083EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| D1            |     1 | Green surface-mount LED (0805)                                                                 |
| EN, POK       |     2 | Test points                                                                                    |
| JU1, JU2      |     2 | 2-pin headers                                                                                  |
| JU3, JU4      |     2 | 4-pin headers                                                                                  |
| L1            |     1 | 1.0µH, 6.8A, 14.2m Ω inductor (5.8mm x 6.2mm x 3.0mm) TOKO FDV0530-1R0M NEC TOKIN MPLC0525L1R0 |
| R1            |     1 | 100k Ω ±5% resistor (0603)                                                                     |
| R2            |     1 | 1k Ω ±5% resistor (0603)                                                                       |
| R3            |     1 | 0 Ω resistor (0402)                                                                            |
| R4, R9        |     0 | Not installed, resistors (0402); R4 is open; R9 is short (PCB trace)                           |
| U1            |     1 | 5A step-down regulator (24 TQFN) Maxim MAX17083ETG+                                            |
| -             |     4 | Shunts                                                                                         |
| -             |     1 | PCB: MAX17083 EVALUATION KIT+                                                                  |

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX17083 Evaluation Kit

## Procedure

The MAX17083 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 2) Verify that shunts are not installed across JU1 and JU4 (1MHz).
- 3) Verify  that  a  shunt  is  installed  across  JU2 (enabled).
- 4) Verify that a shunt is installed across JU3, pins 1-2 (VOUT = 1.1V).
- 5) Enable the power supplies (VIN and VCC).
- 6) Observe the 1.1V output with the DMM and/or oscilloscope. Look at the LX switching node while varying the load current.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NEC TOKIN America, Inc.                | 408-324-1790 | www.nec-tokinamerica.com    |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX17083 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 2.4V to 5.5V DC power supply (VIN)
- 5V DC power supply (VCC)
- Dummy load capable of sinking 5A
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope

## Detailed Description of Hardware

## Jumper Settings

Several jumper settings in the following tables illustrate some features of the MAX17083 EV kit.

## VCC Bias Supply

The MAX17083 EV kit can be configured to operate from a single DC power supply through configuration of jumper JU1. When a shunt is installed across JU1, VCC is  powered from the VIN input through R9. When a shunt is not installed, the user must provide an additional  power supply at the VCC pad. Table 1 lists the selectable jumper options.

## Enable Input

The MAX17083 EV kit features a 2-pin jumper (JU2) that selects the shutdown control input. Table 2 lists the selectable jumper options.

Table 1. Jumper JU1 Functions

| JUMPER POSITION   | VCC PIN                                  | VIN/VCC RANGE                        |
|-------------------|------------------------------------------|--------------------------------------|
| Installed         | Connected to VIN through R9              | VIN = 4.5 to 5.5V; VCC = VIN         |
| Not installed*    | User-provided power at VCC and PGND pads | VIN = 2.4 to 5.5V; VCC = 4.5 to 5.5V |

Table 2. Jumper JU2 Functions

| JUMPER POSITION   | EN PIN                | REGULATOR OUTPUT   |
|-------------------|-----------------------|--------------------|
| Installed*        | Connected to VCC      | Enabled            |
| Not installed     | Pulled low through R1 | Disabled           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17083 Evaluation Kit

## FB Threshold Selection

Jumper JU3 selects one of the four preset feedback voltage levels. The EV kit's feedback regulation voltage is set according to Table 3.

Table 3. Jumper JU3 Functions

## Switching Frequency Selection (FREQ)

The MAX17083 EV kit features a 4-pin jumper (JU4) that selects PWM-mode switching frequency. Switching-frequency selection is set according to Table 4. Refer to the MAX17083 IC data sheet for different external components when operating at different switching frequencies.

## Setting VOUT with a Resistive Voltage-Divider at FB

The MAX17083 produces an adjustable 0.75V to 2.7V output voltage by connecting FB to a resistive divider. To obtain an output voltage other than 1.1V, replace R3 and install resistor R4 with values according to the following equation:

<!-- formula-not-decoded -->

where VFB = 0.75V. Note that jumper JU3 must be set to pins 1-4 (SET = GND) for VFB = 0.75V. Component changes are required for output voltages greater than 2V. Refer to the MAX17083 IC data sheet for more information.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| JUMPER POSITION   | SET PIN   |   FB REGULATION VOLTAGE (V) |
|-------------------|-----------|-----------------------------|
| 1-2*              | REF       |                         1.1 |
| 1-3               | VCC       |                         1.8 |
| 1-4               | GND       |                        0.75 |
| Not installed     | OPEN      |                         1.5 |

## Table 4. Jumper JU4 Functions

| JUMPER POSITION   | FREQ PIN   | FREQUENCY   |
|-------------------|------------|-------------|
| 1-2               | REF        | 750kHz      |
| 1-3               | VCC        | 1.5MHz      |
| 1-4               | GND        | 500kHz      |
| Not installed*    | Open       | 1MHz        |

## MAX17083 Evaluation Kit

Figure 1. MAX17083 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17083 Evaluation Kit

Figure 2. MAX17083 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX17083 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17083 Evaluation Kit

Figure 4. MAX17083 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

Figure 5. MAX17083 EV Kit PCB Layout-PGND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17083 Evaluation Kit

Figure 6. MAX17083 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7