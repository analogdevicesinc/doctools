<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX16822B Evaluation Kit

## General Description

The MAX16822B evaluation kit (EV kit) demonstrates the MAX16822B hysteretic current-mode high-brightness LED (HBLED) driver IC. The MAX16822B EV kit is configured as a step-down topology with a constantcurrent HBLED driver circuit for external HBLEDs. The MAX16822B EV kit operates from a DC supply voltage of 6V to 65V and is configured to deliver up to 350mA of current to user-supplied HBLEDs. The output voltage for  the  HBLED string can go up to 64V and depends upon the EV kit's input voltage.

The MAX16822B EV kit can be configured for digital pulse-width modulation (PWM) dimming operation using a digital PWM input signal to control the HBLEDs' brightness. The MAX16822B has an undervoltage lockout (UVLO) feature that disables the EV kit at low input voltage. The EV kit circuit also features a thermal foldback and temperature simulation circuit feature. The MAX16822B EV kit is a fully assembled and tested surface-mount board. The MAX16822B EV kit can also evaluate the MAX16822A, or for higher currents, a MAX16832 IC.

Warning: Voltages exceeding 42V may exist on the LED+ and LED- output pads.

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 100V X7R ceramic capacitor (1210) Murata GRM32CR72A105K                         |
| C2            |     1 | 0.01µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H103K                       |
| C3            |     0 | Not installed, ceramic capacitor (1210)                                                   |
| D1            |     1 | 100V, 1A Schottky rectifier diode (SMB) Central Semiconductor CMSH1-100 (Top Mark: CS100) |
| JU1, JU2      |     2 | 2-pin headers                                                                             |
| L1            |     1 | 220µH, 0.720A inductor Coilcraft MSS1038-224KL                                            |

Features

- ♦ 6V to 65V Wide Supply Voltage Range
- ♦ 333mA LED Current
- ♦ Digital PWM Dimming Control
- ♦ Analog Dimming Control
- ♦ Thermal Foldback and Temperature Simulation Circuit
- ♦ Evaluates MAX16822A (IC Replacement Required)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16822BEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| R1            |     1 | 0.600 Ω ±1%, 0.5W sense resistor (1206) IRC LRC-LRF1206LF-01-R600-F |
| R2            |     1 | 100k Ω ±10% potentiometer                                           |
| R3            |     1 | 20k Ω ±5% resistor (0805)                                           |
| R4            |     1 | 100k Ω ±5% resistor (0805)                                          |
| TP1           |     1 | PC mini red test point                                              |
| TP2           |     1 | PC mini black test point                                            |
| U1            |     1 | Step-down HBLED driver (8 SO) Maxim MAX16822BASA+                   |
| -             |     2 | Shunts (JU1, JU2)                                                   |
| -             |     1 | PCB: MAX16822B Evaluation Kit+                                      |

1

## MAX16822B Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX16822B when contacting these component suppliers.

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX16822B EV kit
- 6V to 65V, 500mA power supply
- Two digital voltmeters
- A series-connected HBLED string rated no more than 350mA
- A current probe to measure HBLED current

## Procedure

The MAX16822B EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

## Warning: Voltages exceeding 42V may exist on the LED+ and LED- output pads.

- 1) Verify  that  a  shunt  is  not  installed  across  jumper JU1 (enabled).
- 2) Verify  that  a  shunt  is  installed  across  jumper  JU2 (temperature simulation).
- 3) Connect the power supply's positive terminal to the VIN PCB pad on the EV kit. Connect the power supply's ground terminal to PGND PCB pad.
- 4) Connect the digital voltmeters across the VIN and PGND PCB pads and the LED+ and LED- PCB pads.
- 5) Connect the anode of the HBLED string to the LED+ pad.
- 6) Connect the cathode of the HBLED string to the LED- pad.
- 7) Clip the current probe across the HBLED+ wire to measure the HBLED current.
- 8) Turn on the power supply and increase the input voltage to 48V (HBLED dependent).
- 9) Using a voltmeter, verify that the voltage across TP1 and TP2 is &gt; 2V. If it is not, adjust potentiometer R2 to obtain a reading &gt; 2V.

## Detailed Description of Hardware

The MAX16822B evaluation kit (EV kit) demonstrates the MAX16822B hysteretic constant-current HBLED driver in an 8-pin SO package. The MAX16822B EV kit is configured in a step-down topology with constant current, driving a string of user-supplied external HBLEDs. The MAX16822B EV kit operates from a DC supply voltage of 6V to 65V and requires up to 500mA. The MAX16822B IC's UVLO is configured from 6V to 6.5V internally.

The EV kit circuit is configured to deliver 350mA of current  into  a  series  HBLED  string  with  a  maximum  64V forward voltage. The average series inductor current is set to 333mA (typ) by resistor R1. The MAX16822B thermal foldback feature can be evaluated by connecting a negative temperature coefficient (NTC) thermistor to  the  TEMP\_I and PGND PCB pads on the EV kit. Alternatively,  a  temperature-varying thermistor circuit can be simulated using potentiometer R2 and resistor R3. The EV kit also features a DIM PCB pad to evaluate digital PWM dimming operation of the external HBLEDs.

The MAX16822B EV kit PCB has been designed for maximum thermal dissipation when evaluating the MAX16832 IC. The PCB has thermal vias under U1 and additional thermal vias adjacent to U1's copper pad. These vias carry additional heat to the bottom layer ground plane for maximum thermal conductivity. However, these vias are not a PCB layout requirement for the MAX16822 design.

## Jumper Selection

The MAX16822B EV kit features several jumpers to reconfigure the PWM and linear dimming, thermal foldback feature, and for reconfiguring the external HBLED current.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16822B Evaluation Kit

## Enable and HBLED Dimming Control

The MAX16822B EV kit features a jumper to enable and disable the MAX16822B IC (U1). Installing jumper JU1 disables the MAX16822B IC. Additionally, HBLED dimming is achieved on the MAX16822B EV kit by applying a digital PWM signal at the DIM PCB input pad. Remove the shunt at jumper JU1 to enable HBLED dimming using a digital PWM signal at the DIM and PGND PCB pads. Apply a digital PWM signal with a 0.6V logic-low (or less) and a 2.8V logic-high (or more) level and frequencies from 200Hz to 20kHz. To adjust the HBLED brightness, vary the signal duty cycle from 0 to 100%. See Table 1 for jumper JU1 setting of the HBLED dimming operation.

## Table 1. Enable and HBLED Dimming (Jumper JU1)

| SHUNT POSITION   | DIM PIN                              | EV KIT ENABLE OR DIMMING OPERATION         |
|------------------|--------------------------------------|--------------------------------------------|
| Not installed    | Connected to VIN through resistor R4 | Enabled or analog dimming* (see Table 2)   |
| Not installed    | Connected to PWM signal              | Enabled, PWM signal applied at DIM PCB pad |
| Installed        | Connected to PGND                    | Disabled                                   |

*Analog dimming is achieved by placing a resistor (RDIM) across the TEMP\_I and PGND PCB pads. Remove the shunt across jumpers JU1 and JU2 and use the following equation to calculate the current for the TEMP\_I PCB pad resistor, which is necessary to reduce the HBLED driving current. Refer to the Analog Dimming section in the MAX16822A/MAX16822B IC data sheet for information on the analog dimming feature.

<!-- formula-not-decoded -->

where RDIM is the TEMP\_I pad resistor, ILEDDIM is the required current for the desired HBLED current, and ILED is configured for 322mA.

Alternatively, installing jumper JU2 and adjusting potentiometer R2 can simulate analog dimming. Or, for DC control analog dimming, install jumper JU2 and apply a DC voltage in the 0.7V to 2V range at the TP1 (positive) and TP2 (PGND) test points.

<!-- image -->

## Thermal Foldback and Temperature Simulation

The MAX16822B EV kit features a thermal foldback and temperature simulation circuit available at the TEMP\_I PCB pad and jumper JU2. Jumper JU2 sets the mode of  operation,  temperature simulation, or thermal foldback. Potentiometer R2 and resistor R3 form the adjustable temperature simulation circuit. Test points TP1 and TP2 (PGND) provide access to the signal for adjusting the voltage.

To evaluate the MAX16822B IC thermal foldback feature, remove jumper JU2 and connect an NTC thermistor  to  the  TEMP\_I  and  PGND PCB pads. Refer to the Thermal  Foldback section  in  the  MAX16822A/ MAX16822B IC data sheet for information on using the thermal foldback feature. See Table 2 for configuring jumper JU2 for the desired mode of operation.

## Table 2. Temperature Simulation and Thermal Foldback (Jumper JU2)

| SHUNT POSITION   | TEMP_I PIN                           | EV KIT OPERATION       |
|------------------|--------------------------------------|------------------------|
| Installed        | Connected to R2 and R3               | Temperature simulation |
| Not installed    | Connected to external NTC thermistor | Thermal foldback       |

## Setting External HBLED Current

Resistor R1 sets the MAX16822B EV kit average HBLED current up to 333mA. However, the HBLED average current can be set up to 350mA after replacing resistor R1. Use the following equation to calculate R1 when reconfiguring the HBLED current:

<!-- formula-not-decoded -->

where ILED is the desired HBLED average current. Refer to the Selecting RSENSE to Set LED Current section  in  the  MAX16822A/MAX16822B IC data sheet for information on setting the HBLED current.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16822B Evaluation Kit

Figure 1. MAX16822B EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16822B Evaluation Kit

Figure 2. MAX16822B EV Kit Component Placement GuideComponents Side

<!-- image -->

<!-- image -->

Figure 3. MAX16822B EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16822B Evaluation Kit

Figure 4. MAX16822B EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_