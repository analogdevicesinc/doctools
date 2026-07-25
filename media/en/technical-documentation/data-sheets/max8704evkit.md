<!-- lastmod 2022-08-04 -->
## General Description

The MAX8704 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains  a  MAX8704 low-voltage linear regulator for I/O supplies. The high-current, low-voltage linear regulator provides an adjustable or preset output voltage that can deliver up to 5A continuously. The EV kit requires an input voltage source of 1V to 5.5V and a low-power 5V bias supply.

The MAX8704 EV kit has an output current limit, which prevents damage to the linear regulator. The EV kit also includes an adjustable power limit to protect the external MOSFET from overheating. A power-good (PGOOD) output signal is also available to indicate loss of voltage regulation. The MAX8704 is available in a 10-pin µMAX ®  package.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1            |     1 | 470µF ± 20%, 6.3V POSCAP capacitor (D4) Sanyo 6TPD470M            |
| C2            |     1 | 10µF ± 20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M  |
| C4, C5        |     2 | 22µF ± 20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J226M |
| C6            |     1 | 0.01µF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H103K |
| C7            |     1 | 1µF ± 10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J105K   |
| C8            |     1 | 1000pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102K |
| C9            |     1 | 0.1µF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K  |

<!-- image -->

## Features

- Output Voltage Range Adjustable to as Low as 0.5V (Voltage-Dividing
- ♦

Preset to 1.2V or 1.5V (Jumper Selectable) Resistors)

- ♦ Provides Up to 5A, 2.5W Power Limit
- ♦ 1V to 5.5V Input Voltage Range
- ♦ Configurable Output Current Limit
- ♦ Open-Drain PGOOD Output Signal
- ♦ Low-Profile, Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8704EVKIT | 0°C to +70°C | 10 µMAX      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| JU1           |     1 | 3-pin header                                                          |
| JU2           |     1 | 2-pin header                                                          |
| N1            |     1 | 8.7A, 20V n-channel MOSFET (8-pin SO) International Rectifier IRF7401 |
| N2            |     1 | 115mA, 60V n-channel MOSFET (SOT23) Central Semiconductor 2N7002      |
| R1, R2        |     0 | Not installed, resistors (0603)                                       |
| R3            |     1 | 0.010 Ω ± 1%, 1W sense resistor (2010) IRC LRC-LRF 2010-01-R010-F     |
| R4            |     1 | 200k Ω ± 1% resistor (0603)                                           |
| R5, R6        |     2 | 100k Ω ± 5% resistor (0603)                                           |
| None          |     2 | Shunts                                                                |
| None          |     1 | MAX8704 PC board                                                      |
| U1            |     1 | MAX8704EUB (10-pin µMAX)                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX8704 Evaluation Kit

## Connections and Setup

- 1) Verify that no shunt is installed on jumper JU2 (EV kit ON).
- 2) Connect the voltmeter to the VOUT and GND pads.
- 3) Connect the positive terminal of the VCC power supply to the VCC pad. Connect the negative terminal of the VCC power supply to the GND pad. Set the VCC power supply to 5V.
- 4) Connect the positive terminal of the VIN power supply to the VIN pad. Connect the negative terminal of the VIN power supply to the GND pad. Set the VIN power supply to 2V.
- 5) Turn on both power supplies.
- 6) Verify that the output (VOUT) is 1.5V if JU1 shunt is between pins 1 and 2, or 1.2V if JU1 shunt is between pins 2 and 3. Caution: Do not change the jumper setting on JU1 while the EV kit is powered on.
- 7) Verify that PGOOD is 5V.
- 8) Set the electronic load to 1A, and disable the electronic load's input.

Dual Mode is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| International Rectifier | 310-322-3331 | 310-726-8721 | www.irf.com           |
| IRC                     | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Sanyo Electronic Device | 619-661-6835 | 619-661-1055 | www.sanyodevice.com   |
| TDK                     | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX8704 EV kit when contacting these component suppliers.

## Quick Start

The MAX8704 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 5V, 100mA DC power supply (VCC)
- 1V to 5.5V, 5A DC power supply (VIN)
- One electronic load (e.g., HP 6060B)
- One voltmeter
- 9) Connect the positive terminal of the electronic load to the VOUT pad. Connect the negative terminal of the electronic load to the GND pad.
- 10) Enable the electronic load's input. Repeat steps 6 and 7.

## Detailed Description

The MAX8704 EV kit contains a low-voltage linear regulator.  The  regulator delivers an accurate preset or adjustable output voltage from an input voltage in the 1V to 5.5V range. The EV kit uses a separate 5V biasing  power supply to power the control circuitry of the MAX8704 and drive the external n-channel power MOSFET.

## Output Voltage (VOUT)

The MAX8704 EV kit features a Dual-Mode™ feedback circuit that enables the output voltage to be set by either jumper JU1, or by voltage-dividing resistors R1 and R2. Resistors R1 and R2 are not populated. In the jumper feedback mode, jumper JU1 presets the MAX8704 EV kit output voltage to either 1.2V or 1.5V (see Table 1). In the voltage-divider feedback mode, the MAX8704 EV kit's output voltage can be set by voltage-dividing resistors R1 and R2 in the following equation:

<!-- formula-not-decoded -->

where R2 = 10k Ω (typ), and VFB = 0.5V.

The minimum adjustable output voltage is 0.5V (FB = CSN). The maximum adjustable output voltage is limited by the gate driver's output-voltage swing range, and the gate-threshold voltage of the selected MOSFET.

Refer to the Output Voltage and Dual-Mode Feedback section in the MAX8704 IC data sheet for more information on selecting the voltage-dividing resistor values for R1 and R2.

<!-- image -->

## Output Current Limit

The MAX8704 EV kit features an output current limit that prevents damage to the linear regulator. As configured, the output current limit is set to 5A by current-sense resistor R3. To set the output current limit to a different value, replace the surface-mount resistor R3 (2010) with a different resistor value. Refer to the Current Limit section in the MAX8704 IC data sheet for more information on setting the output current limit.

## External MOSFET Power Limit

The MAX8704 EV kit features a power limit to protect the external MOSFET from overheating. As configured, the external MOSFET power limit is set to 2.5W by power limiting resistor R4. To set the external MOSFET power limit to a different value, replace surface-mount resistor R4 (0603) with a different resistor value. Refer to  the MOSFET Power-Limit Protection section in the MAX8704 IC data sheet for more information on setting the external MOSFET power limit.

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | FB PIN CONNECTED TO                   | MAX8704 EV KIT OUTPUT VOLTAGE             |
|------------------|---------------------------------------|-------------------------------------------|
| 1-2 (default)    | V CC                                  | 1.5V                                      |
| 2-3              | GND                                   | 1.2V                                      |
| Not installed*   | Voltage-dividing resistors R1 and R2* | V V R R OUT = × +       0 5 1 1 2 . |

Table 2. Jumper JU2 Functions

| SHUNT LOCATION          | SHDN PAD                          | SHDN PAD                          | EV KIT STATUS                                     |
|-------------------------|-----------------------------------|-----------------------------------|---------------------------------------------------|
| Not installed (default) | Floating                          | Floating                          | VOUT enabled                                      |
| Not installed           | Connected to external TTL source* | Floating                          | Logic low: VOUT disabled Logic high: VOUT enabled |
| Not installed           | Floating                          | Connected to external TTL source* | Logic low: VOUT enabled Logic high: VOUT disabled |
| Installed               | Floating                          | Floating                          | VOUT disabled                                     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8704 Evaluation Kit

## PGOOD

The MAX8704 features an open-drain power-good output (PGOOD). The MAX8704 pulls the PGOOD output pin low when the output is out of regulation, or when the EV kit is in shutdown mode. The MAX8704 EV kit includes a PGOOD PC board pad for interfacing with this signal. A pullup resistor (R5) is connected between PGOOD and VCC to provide a 5V logic-level output.

## Jumper Selection

## Output Voltage Selection

The MAX8704 EV kit's output voltage can be changed by the setting on jumper JU1, or by voltage-dividing resistors R1 and R2. Jumper JU1 provides the options to set the EV kit's output voltage. Table 1 lists the selectable jumper options.

## Shutdown ( SHDN and SHDN)

The MAX8704 EV kit features a shutdown mode that reduces the MAX8704 quiescent current. Jumper JU2 selects the shutdown mode for the MAX8704. Table 2 lists the selectable jumper options.

## MAX8704 Evaluation Kit

Figure 1. MAX8704 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8704 Evaluation Kit

<!-- image -->

Figure 2. MAX8704 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX8704 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8704 Evaluation Kit

Figure 4. MAX8704 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2004 Maxim Integrated Products