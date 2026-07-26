<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8620Y evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that evaluates the MAX8620Y power-management IC. The MAX8620Y IC features a 500mA adjustable step-down DC-DC converter, two 300mA low-dropout linear regulators (LDOs), and a reset function.

The MAX8620Y EV kit is configured to operate over a 2.7V to 5.5V input range. The MAX8620Y EV kit stepdown converter's output voltage is configured for 1.8V at  500mA, and the two LDOs can be configured through jumpers to nine different output voltages in the 1.8V to 3.3V range. This makes the MAX8620Y suitable for  DSP or microprocessor (µP) power-management applications in handsets, PDAs, smartphones, and other portable applications.

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M   |
| C2, C3        |     2 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475K |
| C4            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K  |
| C5            |     1 | 150pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H151J    |
| C6            |     1 | 0.01µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H103K  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                  |
|---------------|-------|------------------------------|
| JU1, JU2, JU3 |     3 | 3-pin headers                |
| JU4           |     1 | 2-pin header                 |
| L1            |     1 | 2.2µH, 790mA inductor (1210) |
| R1            |     1 | 150k Ω ±1% resistor (0603)   |
| R2            |     1 | 75k Ω ±1% resistor (0603)    |
| R3            |     1 | 100k Ω ±5% resistor (0603)   |
| R4, R5, R6    |     3 | 1M Ω ±5% resistors (0603)    |
| SW1           |     1 | Momentary pushbutton switch  |
| U1            |     1 | MAX8620YETD                  |
| -             |     4 | Shunts (JU1-JU4)             |
| -             |     1 | PCB: MAX8620Y Evaluation Kit |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

Features

- ♦ 1.8V, 500mA, 2.5MHz Step-Down DC-DC Converter
- ♦ Up to 92% High-Efficiency Step-Down Converter
- ♦ Internal Synchronous Rectifier
- ♦ Two Low-Noise, 300mA LDOs with JumperSelectable Output Voltages
- ♦ 30ms (min) RESET Output Signal
- ♦ Demonstrates Hands-Free Enabling
- ♦ Power Sequencing and On/Off Control Logic
- ♦ Overcurrent and Thermal Protection
- ♦ Tiny 3mm x 3mm, 14-Pin TDFN Package with Exposed Pad
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX8620YEVKIT | 0°C to +70°C* | 14 TDFN-EP** |

## MAX8620Y Evaluation Kit

## Procedure

The MAX8620Y EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU1. This configures the PWR\_ON pin to be pulled high by VOUT1.
- 2) Verify that shunts are installed across pins 1-2 of jumpers JU2 and JU3. This configures VOUT1 and VOUT2 to provide 3.0V and 2.5V, respectively.
- 3) Verify that no shunt is installed on jumper JU4 (VOUT2 enabled).
- 4) Connect the 5V power supply across the IN and GND PCB pads.
- 5) Turn on the 5V power supply.
- 6) Momentarily press and release pushbutton switch SW1.
- 7) Verify that the voltage across the OUT1 and GND pads is 3.0V.
- 8) Verify that the voltage across the OUT2 and GND pads is 2.5V.
- 9) Verify that the voltage across the OUT3 and GND pads is approximately 1.8V.

## Table 1. Jumper JU1 Function

| SHUNT POSITION   | PWR_ON PIN CONNECTION        | EV KIT FUNCTION                                                      |
|------------------|------------------------------|----------------------------------------------------------------------|
| 1-2              | Connected to IN              | MAX8620Y is enabled by the input IN.                                 |
| 2-3              | Connected to OUT1            | MAX8620Y is enabled by the HF_PWR and maintained by the output OUT1. |
| Not installed    | Pulled to GND by resistor R6 | MAX8620Y is in shutdown mode.*                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | 770-436-3030 | www.murata.com        |
| TDK Corp.             | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX8620Y when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 5V, 2A power supply

## Detailed Description

The MAX8620Y EV kit features a 1.8V, 500mA stepdown converter, two configurable 300mA LDOs and a 30ms (min) delayed reset timer. The LDO outputs OUT1 and OUT2 can be configured through jumpers JU2 and JU3 to nine different output voltages in the 1.8V to 3.3V range. To reconfigure OUT1 and OUT2, the EV kit input power needs to be recycled. The MAX8620Y EV kit demonstrates the  hands-free enabling feature of the MAX8620Y through momentary pushbutton switch SW1. Additionally, the EV kit demonstrates the power-on sequencing capability of the MAX8620Y.

The step-down converter needs a very small output capacitor (C4) due to its unique feedback network, consisting of feedback resistors R1 and R2 and feedforward capacitor C5. The switching frequency of the MAX8620Y can be reconfigured up to 4MHz by appropriately selecting inductor L1 and capacitor C5. To reconfigure the MAX8620Y switching frequency, refer to the Inductor Selection section in the MAX8620Y data sheet. The MAX8620Y features overcurrent and thermal protection to provide device safety.

## PWR\_ON Enable

The MAX8620Y can be enabled by asserting a logichigh signal on the PWR\_ON pin using jumper JU1. An external controller can also be used to assert logichigh. See Table 1 for jumper JU1 configuration.

<!-- image -->

Table 2. Jumper JU4 Function

| SHUNT POSITION   | EN2 PIN CONNECTION           | EV KIT FUNCTION   |
|------------------|------------------------------|-------------------|
| Installed        | Connected to OUT1            | OUT2 is disabled  |
| Not installed    | Pulled to GND by resistor R4 | OUT2 is enabled   |

## HF\_PWR

The MAX8620Y IC can also be enabled using the HF\_PWR pin in conjunction with the PWR\_ON pin. Momentarily pressing switch SW1 on the MAX8620Y EV kit  emulates a rising edge on the HF\_PWR pin. The PWR\_ON pin must be asserted high within 1.23 seconds (typ) after a rising edge is detected at the HF\_PWR pin. Install a shunt across pins 2-3 of jumper JU1 or connect an external signal to the HF\_PWR PCB pad to test this feature. See Table 1 for jumper JU1 configuration.

## EN2

The MAX8620Y LDO output OUT2 can be disabled by asserting logic-high on the EN2 pin through jumper JU4 on the MAX8620Y EV kit board. See Table 2 for jumper JU4 configuration.

## Setting the Step-Down Converter Output Voltage

The step-down converter output OUT3 voltage can be reconfigured in the 0.6V to 2.5V range by selecting resistors R1 and R2 according to the following equation:

<!-- formula-not-decoded -->

where resistor R2 is typically 100k Ω and VOUT3 is the desired output voltage at the OUT3 PCB pad.

Table 3. LDOs Output Voltage Configuration

| JUMPER JU2 SHUNT POSITION   | JUMPER JU3 SHUNT POSITION   | EV KIT FUNCTION   | EV KIT FUNCTION   |
|-----------------------------|-----------------------------|-------------------|-------------------|
|                             |                             | OUT1 (V)          | OUT2 (V)          |
| 1-2                         | 1-2                         | 3.00*             | 2.50*             |
| 1-2                         | Not installed               | 2.85              | 2.85              |
| 1-2                         | 2-3                         | 3.00              | 3.00              |
| Not installed               | 1-2                         | 3.30              | 2.50              |
| Not installed               | Not installed               | 2.80              | 2.60              |
| Not installed               | 2-3                         | 3.30              | 1.80              |
| 2-3                         | 1-2                         | 2.85              | 2.60              |
| 2-3                         | Not installed               | 2.60              | 2.60              |
| 2-3                         | 2-3                         | 1.80              | 2.60              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The MAX8620Y's step-down converter operates with inductors in the 1µH to 4.7µH range. The MAX8620Y can support up to 500mA load current connected to the OUT3 PCB pad. Select an inductor rated for 100mA greater than the desired load current.

Ceramic capacitors with a dielectric rating of X5R or X7R type are recommended for the step-down converter's output capacitor C4 on the MAX8620Y EV kit. To achieve optimum load-transient performance and a very low output voltage ripple, the output capacitor's numerical value in  µF should be equal to or greater than the inductor value in µH. For example, the EV kit has a 2.2µF capacitor for C4 and thus L1 is a 2.2µH inductor.

Refer to the MAX8620Y data sheet for additional information on selecting inductor L1 and output capacitor C4.

## Setting LDO OUT1 and OUT2 Output Voltages

The MAX8620Y EV kit LDO outputs OUT1 and OUT2 can be configured through jumpers JU2 and JU3 to nine different output voltages in the 1.8V to 3.3V range. See Table 3 for jumpers JU2 and JU3 configuration. The EV kit input power needs to be recycled after reconfiguring jumpers JU2 and JU3.

## MAX8620Y Evaluation Kit

## MAX8620Y Evaluation Kit

## LDO Output Capacitor Selection and Regulator Stability

The MAX8620Y EV kit is configured for up to 300mA load current at OUT1 and OUT2. To reconfigure the EV kit  for  other  load  currents,  capacitors  C2  and  C3  may need replacement. See Table 4 for output capacitors C2 and C3 selection. For additional information, refer to the Capacitor Selection section in the IC data sheet.

Table 4. Capacitors C2 and C3 Selection

| OUT1, OUT2 CURRENT (mA)   |   SELECT C2, C3 (µF) |
|---------------------------|----------------------|
| 50 or less                |                  1.0 |
| 150 or less               |                  2.2 |
| 300 or less               |                  4.7 |

Figure 1. MAX8620Y EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Reset Timer

The MAX8620Y features a reset timer that can be used as a system reset signal. The MAX8620Y RESET pin is held low during power-up. The RESET is asserted high 30ms (min) after VOUT1 reaches 87% of its regulation voltage. This delayed reset signal confirms that output voltages must have settled to their final voltages.

<!-- image -->

<!-- image -->

## MAX8620Y Evaluation Kit

Figure 2. MAX8620Y EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX8620Y EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8620Y Evaluation Kit

Figure 4. MAX8620Y EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 2, 3, 5

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600