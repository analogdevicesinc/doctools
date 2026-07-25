<!-- lastmod 2022-08-03 -->
## General Description

The MAX8633 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a dual-output low-dropout (LDO) linear regulator. The EV kit operates from a 2.7V to 5.5V input supply, is configured for 2.8V (OUT1) and 1.8V (OUT2), and can deliver up to 300mA at each output. The MAX8633 outputs can be set to 9 different output voltage settings. See the Output Voltage Settings section.

The MAX8633 EV kit can also evaluate the MAX8634, MAX8635, and MAX8636 dual-output LDO linear regulators.  See the Evaluating the MAX8634/MAX8635/ MAX8636 section for details on reconfiguring and operating the EV kit for evaluation of the MAX8634, MAX8635, and MAX8636.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 2.2µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J225K Taiyo Yuden JMK107BJ225KA |
| C4            |     0 | Not installed, ceramic capacitor (0402)                                                        |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                                  |
| JU4           |     0 | Not installed, 3-pin header                                                                    |
| R1            |     1 | 100k Ω ±5% resistor (0402)                                                                     |
| U1            |     1 | MAX8633ELA+ (8-pin µDFN 2mm x 2mm) (top mark: AAH)                                             |
| -             |     3 | Shunts                                                                                         |
| -             |     1 | MAX8633 EV kit PC board                                                                        |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE         |
|-------------|--------------|-----------------|
| Murata      | 770-436-1300 | www.murata.com  |
| Taiyo Yuden | 408-573-4150 | www.t-yuden.com |

Note: Indicate that you are using the MAX8633-MAX8636 when contacting these suppliers.

## Recommended Equipment

- 2.7V to 5.5V, 1A DC power supply
- Voltmeter

<!-- image -->

## Features

- ♦ Pin-Programmable Output Voltages
- ♦ 300mA Output Currents
- ♦ 2.7V to 5.5V Input Range
- ♦ Thin µDFN Package: 2mm x 2mm
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE         |
|--------------|--------------|--------------------|
| MAX8633EVKIT | 0°C to +70°C | 8 µDFN (2mm x 2mm) |

Note: To evaluate the MAX8634/MAX8635/MAX8636, request a MAX8634ELA+/MAX8635ELA+/MAX8636ELA+ free sample with the MAX8633EVKIT.

## Quick Start

The MAX8633 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Evaluating the MAX8633

- 1) Verify that a shunt is placed across jumper JU1 pins 1-2 to enable the MAX8633 outputs (OUT1 and OUT2).
- 2) Verify that a shunt is placed across pins 2-3 of jumpers JU2 and JU3.
- 3) Connect the positive terminal of the DC power supply to the VIN pad. Connect the negative terminal of the DC power supply to the GND pad.
- 4) Turn on the power supply and set it to 3.0V.
- 5) Verify that the voltage at OUT2 is 1.8V.
- 6) Verify that the voltage at OUT1 is 2.8V.

## Detailed Description

The MAX8633 EV kit operates from a 2.7V to 5.5V input power supply and is configured to evaluate the MAX8633, a pin-programmable LDO linear regulator. The EV kit provides output control through the SHDN jumper (JU1) and output monitoring (OUT2 only) at the RESET output pad.

The OUT1 and OUT2 output voltages are set through jumpers JU2 and JU3 to 1 of 9 output voltage settings. Each output is capable of providing up to a 300mA load current, provided that the max power dissipation of the IC package is not exceeded. See the Output Voltage Settings section for details on configuring the OUT1 and OUT2 output voltages.

The MAX8633 EV kit can also be used to evaluate the MAX8634, MAX8635, and MAX8636 pin-programmable

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8633 Evaluation Kit

LDO linear regulators. See the Evaluating the MAX8634/ MAX8635/MAX8636 section for details on reconfiguring and operating the EV kit when evaluating the MAX8634/ MAX8635/MAX8636.

## Shutdown Control ( SHDN )

The EV kit features a shutdown mode that disables all outputs, OUT1 and OUT2. The SHDN pin is set through jumper JU1. See Table 1 for jumper JU1 functions.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX8633 OUTPUTS   |
|------------------|------------------|-------------------|
| 1-2 (default)    | Connected to IN  | Enabled           |
| 2-3              | Connected to GND | Disabled          |

## Output Voltage Settings

The MAX8633 output voltages (VOUT1 and VOUT2) are set through jumpers JU2 and JU3 and are established at  power-on. Any changes to jumper JU2 or JU3 after power-on have no affect on the output voltages. For a change to the output voltage setting to take affect, the device must be shut down and repowered. This is accomplished by either cycling the power supply or by disabling then enabling the outputs with the shutdown control jumper, JU1. See Table 2 for jumper JU2 and JU3 functions.

## Table 2. Jumper JU2 and JU3 Functions

| SHUNT LOCATIONS   | SHUNT LOCATIONS   | SHUNT LOCATIONS   | SHUNT LOCATIONS   | MAX8633 OUTPUTS (V)   | MAX8633 OUTPUTS (V)   |
|-------------------|-------------------|-------------------|-------------------|-----------------------|-----------------------|
| JU3               | P1 PIN            | JU2               | P2 PIN            | V OUT1                | V OUT2                |
| Not installed     | Open              | Not installed     | Open              | 2.80                  | 1.50                  |
| Not installed     | Open              | 2-3               | GND               | 2.90                  | 1.50                  |
| Not installed     | Open              | 1-2               | IN                | 3.00                  | 1.50                  |
| 2-3               | GND               | Not installed     | Open              | 3.00                  | 1.60                  |
| 2-3*              | GND               | 2-3*              | GND               | 2.80                  | 1.80                  |
| 2-3               | GND               | 1-2               | IN                | 2.60                  | 1.85                  |
| 1-2               | IN                | Not installed     | Open              | 2.90                  | 1.85                  |
| 1-2               | IN                | 2-3               | GND               | 2.80                  | 2.60                  |
| 1-2               | IN                | 1-2               | IN                | 3.00                  | 2.80                  |

* Default setting.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## RESET

The MAX8633 features a RESET output that is used in monitoring the OUT2 voltage. RESET is  pulled  up  to VOUT1 150ms after VOUT2 reaches 87% of its configured voltage. As long as VOUT2 is below 87% of its configured voltage RESET will  remain low. VOUT1 and VOUT2 are configured through jumpers JU2 and JU3. See the Output Voltage Settings section.

## Evaluating the MAX8634/MAX8635/MAX8636

To evaluate the MAX8634/MAX8635/MAX8636 LDO linear regulator, the EV kit must be reconfigured. See Table 3 and Figure 1 for details on the EV kit configurations for each of the alternate devices. Refer to the MAX8633 IC data sheet for detailed information on the MAX8634/MAX8635/MAX8636.

## Table 3. EV Kit Configuration

| U1          | JU4           | R1            | C4                              |
|-------------|---------------|---------------|---------------------------------|
| MAX8634ELA+ | Not installed | Not installed | 0.01µF ceramic capacitor (0402) |
| MAX8635ELA+ | Installed     | Not installed | Not installed                   |
| MAX8636ELA+ | Not installed | Not installed | 0.01µF ceramic capacitor (0402) |

## Shutdown Control (MAX8634/MAX8635/MAX8636)

The MAX8634, MAX8635, and MAX8636 ICs provide shutdown capabilities for disabling the OUT1 and OUT2 outputs. The MAX8634 and MAX8635 provide shutdown controls ( SHDN1 and SHDN2 )  for  each  output and the MAX8636 provides a single shutdown control ( SHDN ) for both outputs. The shutdown pins are set through jumper JU1, JU2, or JU4. Refer to the appropriate MAX8634/MAX8635/MAX8636 shutdown control table (Tables 4 through 6) for jumper settings.

## Table 4. MAX8634 Shutdown Control

| JUMPER   | SHUTDOWN   | SHUNT LOCATION   | SHUNT LOCATION   |
|----------|------------|------------------|------------------|
|          | PIN        | 1-2              | 2-3              |
| JU1      | SHDN1      | OUT1 enabled     | OUT1 disabled    |
| JU2      | SHDN2      | OUT2 enabled     | OUT2 disabled    |

<!-- image -->

## MAX8633 Evaluation Kit

<!-- image -->

Figure 1. MAX8634, MAX8635, and MAX8636 Schematics. The above schematics illustrate the required EV kit configuration when evaluating the MAX8634/MAX8635/MAX8636

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8633 Evaluation Kit

## Table 5. MAX8635 Shutdown Control

| JUMPER   | SHUTDOWN   | SHUNT LOCATION   | SHUNT LOCATION   |
|----------|------------|------------------|------------------|
|          | PIN        | 1-2              | 2-3              |
| JU1      | SHDN1      | OUT1 enabled     | OUT1 disabled    |
| JU4      | SHDN2      | OUT2 enabled     | OUT2 disabled    |

## Table 6. MAX8636 Shutdown Control

| JUMPER   | SHUTDOWN PIN   | SHUNT LOCATION     | SHUNT LOCATION      |
|----------|----------------|--------------------|---------------------|
| JUMPER   | SHUTDOWN PIN   | 1-2                | 2-3                 |
| JU1      | SHDN           | OUT1, OUT2 enabled | OUT1, OUT2 disabled |

## Output Voltage Settings (MAX8634/MAX8635/MAX8636)

The MAX8634/MAX8635/MAX8636 output voltages (OUT1 and OUT2) are established at power-on. Any subsequent output voltage setting changes will not take affect until the power supply is cycled or until all outputs are disabled then enabled with the shutdown control jumper(s). When evaluating the MAX8634, the output voltages are set through jumper JU3 (Table 7). When evaluating the MAX8635 and MAX8636, the output voltages are set through jumpers JU2 and JU3 (Table 8).

## Table 7. MAX8634 Output Voltage Settings

| SHUNT LOCATION   | SHUNT LOCATION   | MAX8634 OUTPUTS (V)   | MAX8634 OUTPUTS (V)   |
|------------------|------------------|-----------------------|-----------------------|
| JU3              | P PIN            | OUT1                  | OUT2                  |
| Not installed    | Open             | 2.85                  | 2.85                  |
| 1-2              | IN               | 2.60                  | 2.60                  |
| 2-3              | GND              | 3.00                  | 2.85                  |

## Table 8. MAX8635/MAX8636 Output Voltage Settings

Figure 2. MAX8633 EV Kit Schematic

| SHUNT LOCATIONS   | SHUNT LOCATIONS   | SHUNT LOCATIONS   | SHUNT LOCATIONS   | OUTPUTS (V)   | OUTPUTS (V)   |
|-------------------|-------------------|-------------------|-------------------|---------------|---------------|
| JU3               | P1 PIN            | JU2               | P2 PIN            | OUT1          | OUT2          |
| Not installed     | Open              | Not installed     | Open              | 2.80          | 1.50          |
| Not installed     | Open              | 2-3               | GND               | 2.90          | 1.50          |
| Not installed     | Open              | 1-2               | IN                | 3.00          | 1.50          |
| 2-3               | GND               | Not installed     | Open              | 2.60          | 1.80          |
| 2-3               | GND               | 2-3               | GND               | 2.80          | 1.80          |
| 2-3               | GND               | 1-2               | IN                | 3.00          | 2.50          |
| 1-2               | IN                | Not installed     | Open              | 3.00          | 2.80          |
| 1-2               | IN                | 2-3               | GND               | 2.85          | 2.85          |
| 1-2               | IN                | 1-2               | IN                | 3.00          | 3.00          |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX8633 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX8633 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX8633 Evaluation Kit

Figure 4. MAX8633 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX8633 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5

Springer