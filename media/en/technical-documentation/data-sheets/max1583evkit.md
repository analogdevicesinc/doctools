<!-- lastmod 2022-08-03 -->
## General Description

The MAX1583 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board for evaluating the MAX1583 white LED flash boost converter. The EV kit  accepts a 2.6V to 5.5V input voltage and drives up to five series white LEDs with a constant current to provide camera flash/strobe in cell phones, PDAs, DSCs, and other hand-held devices. The device's switching frequency is 1MHz, allowing tiny external components. Two logic inputs control four modes of operation: shutdown mode (0.5µA max), movie mode for high-efficiency continuous lighting (programmable up to 100mA), precharge mode for charging a reservoir capacitor to 24V while the LEDs are off (POK output indicates a full reservoir capacitor), and strobe mode for firing the flash during an exposure with a regulated current programmable up to 300mA (100mA with installed components). A pushbutton pulse generator is installed to simulate a 30ms flash pulse.

The EV kit comes with the MAX1583X (1A current limit) installed, but the entire MAX1583 family can be evaluated with minor component changes.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1            |     1 | 22µF, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J226M            |
| C2            |     1 | 10µF ± 10%, 25V X5S ceramic capacitor (1206) Taiyo Yuden TMK316C106KL |
| C3, C4        |     2 | 0.01µF ± 10%, 16V X7R ceramic capacitors (0402) TDK C1005X7R1E103K    |
| C5            |     1 | 0.1µF ± 10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K      |
| D1            |     1 | 30V, 500mA, V F = 0.4V Schottky diode (SOD-323) Diodes, Inc. B0530WS  |

<!-- image -->

## Features

- ♦ Supports Up to 5 LEDs for Strobe/Flash
- ♦ Four Operational Modes
- ♦ Input Current Limiting

Strobe: Up to 300mA (Preset to 100mA)

Precharge: With POK Indicator

Movie: Up to 100mA (Preset to 20mA)

Shutdown: 0.01µA (typ) Quiescent Current

1A (MAX1583X) 500mA (MAX1583Y)

250mA (MAX1583Z)

- ♦ 24V Output Overvoltage Protection
- ♦ 80% Efficient (PLED/PIN) Movie Mode
- ♦ Thermal-Shutdown Protection
- ♦ 10-Lead 3mm x 3mm TDFN Package
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX1583EVKIT | EV Kit |

Note: To evaluate the MAX1583Y or MAX1583Z, request a MAX1583YETB or MAX1583ZETB free sample with the EV kit.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| D2            |     2 | White LEDs Nichia NS2W123B                               |
| D5            |     1 | 30V, 100mA Schottky diode (SOD 523) Central Semi CMOSH-3 |
| JU1, JU2      |     2 | 3-pin headers                                            |
| JU3           |     1 | 2-pin header                                             |
| L1            |     1 | 4.7µH, 1.06A, 450m Ω inductor TOKO 984FB-4R7M            |
| R1            |     1 | 6.04k Ω ± 1% resistor (0402)                             |
| R2            |     1 | 3.01k Ω ± 1% resistor (0402)                             |
| R3, R4, R5    |     3 | 100k Ω ± 5% resistors (0402)                             |
| SW1           |     1 | Momentary pushbutton switch Panasonic EVQ-PHP03T         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1583 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| U1            |     1 | White LED boost converter (10 TDFN) Maxim MAX1583XETB            |
| U2            |     1 | Low-power microprocessor reset circuit (SOT23) Maxim MAX6422XC23 |
| -             |     2 | Shunts                                                           |
| -             |     1 | PCB: MAX1583 EVALUATION KIT                                      |

## Quick Start

## Recommended Equipment

- 0 to +6V at 1A, variable-output power supply
- Two digital multimeters (DMMs)

## Procedure

The MAX1583 EV kit is fully assembled and tested. Perform the following steps to verify board operation:

- 1) Verify that shunts are installed on pins 2-3 of jumpers JU1 (EN2) and JU2 (EN1). This places the device into shutdown mode.
- 2) Verify that JU3 is open.
- 3) Preset the power supply to 2.7V and turn off. Do not turn on the power supply until all connections are completed.
- 4) Connect the positive lead of the power supply to the VIN pad on the EV kit PCB. Connect the ground lead of the power supply to the GND pad on the EV kit PCB.
- 5) Connect the positive lead of one DMM to the OUT pad on the EV kit PCB and connect the negative lead of the DMM to the GND pad. This DMM measures the voltage at OUT (VOUT).
- 6) Connect the positive lead of the other DMM to POK on the EV kit PCB and connect the negative lead of the DMM to the GND pad. This DMM measures the voltage at POK (VPOK).
- 7) Turn on the power supply.
- 8) Verify that the white LEDs are off.
- 9) Remove the shunt on jumper JU2 and place it between pins 1-2 of JU2. This places the device into movie mode.
- 10) Verify  that  the  white  LEDs  light  up.  VOUT should read approximately 7V.
- 11) Sweep the input voltage from 2.7V to 5.5V, verifying that  the  LEDs  remain on with constant brightness and VOUT does not change.
- 12) Set the power supply to 2.7V.
- 13) Remove the shunt on JU2 and place it between pins 1-2 of JU3. Remove the shunt on JU1 and place it  between pins 1-2 of JU1. This places the device into precharge mode.
- 14) Verify that the white LEDs are off. Verify that VOUT is approximately 23.5V and VPOK is approximately 2.7V.
- 15) Sweep the power supply to 5.5V. Verify that the LEDs remain off, VOUT is approximately 23.5V, and VPOK tracks VVIN.
- 16) Set the power supply to 3.3V.
- 17) Push the button on the bottom of the EV kit. This enables a strobe/flash.
- 18) Verify that the LEDs flash.

## Detailed Description of Hardware

## Jumper Selection

EN1 and EN2 on the MAX1583 provide control for shutdown mode, movie mode, precharge mode, and strobe mode. Jumpers JU1 and JU2 connect EN2 and EN1 to either VIN or GND (see Table 1). An external signal can be used to drive EN1 or EN2 by removing the corresponding shunt completely from the jumper and connecting the external signal to the appropriate connecting pad. JU3 enables the pulse generator for the strobe mode. JU3 must be open if a jumper is installed on JU2 or if EN1 is externally driven.

## Setting LED Current

The preset LED current in movie mode is 20mA. To set a different movie-mode LED current, change R2, where R2 = 60/ILED(MOVIE). The device is capable of moviemode currents up to 100mA.

The preset LED current in strobe mode is 100mA. To set  a  different  strobe-mode LED current, change R1, where R1 = 600/ILED(STROBE). The device can regulate strobe-mode LED currents up to 300mA; however, the LED installed on the EV kit has a maximum pulse-current  rating  of  100mA.  If  larger  currents  are  desired,  a new LED with a higher pulsed current rating must be installed on the EV kit.

## Evaluating Off-Board LEDs

The EV kit allows for easy evaluation of off-board LEDs. To evaluate off-board LEDs, first remove installed LEDs, D2. Next, connect the pad labeled OUT on the EV kit to

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

the anode of the series LED string under evaluation and connect the cathode of the external series LED string to the EV kit pad labeled LED.

## Changing the Strobe Pulse Width

The EV kit includes a pulse generator for convenience in evaluating the strobe function of the device. The strobe pulse width is determined by C4. To change the pulse width of the strobe, replace C4 with a capacitor corresponding to the following equation:

## MAX1583 Evaluation Kit

The minimum pulse width of the pulse generator is 1ms. Using a strobe pulse longer than 30ms may require a larger output reservoir capacitance (C2). Refer to the Reservoir Capacitance vs. Current Limit section in the MAX1583 IC data sheet for details on calculating the required capacitance.

<!-- formula-not-decoded -->

Table 1. JU1 and JU2 Functions (Dimming Control)

| JU2 POSITION   | EN1              | JU1 POSITION   | EN2              | MAX1583 OUTPUT   |
|----------------|------------------|----------------|------------------|------------------|
| 1-2            | Connected to VIN | 1-2            | Connected to VIN | Strobe mode      |
| 1-2            | Connected to VIN | 2-3            | Connected to GND | Movie mode       |
| 2-3            | Connected to GND | 1-2            | Connected to VIN | Precharge mode   |
| 2-3            | Connected to GND | 2-3            | Connected to GND | Shutdown mode    |

## Component Suppliers

| SUPPLIER            | COMPONENT      | PHONE        | WEBSITE               |
|---------------------|----------------|--------------|-----------------------|
| Diodes Incorporated | Schottky Diode | 805-446-4800 | www.diodes.com        |
| Nichia Corp.        | LEDs           | 248-352-6575 | www.nichia.com        |
| Panasonic Corp.     | Resistors      | 800-344-2112 | www.panasonic.com     |
| Taiyo Yuden         | Capacitors     | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.           | Capacitors     | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX1583 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1583 Evaluation Kit

Figure 1. MAX1583 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1583 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX1583 Evaluation Kit

Figure 3. MAX1583 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX1583 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1583 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION          | PAGES CHANGED   |
|-------------------|-----------------|----------------------|-----------------|
|                 0 | 4/04            | Initial release      | -               |
|                 1 | 7/10            | Updated component D2 | 1, 2            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->