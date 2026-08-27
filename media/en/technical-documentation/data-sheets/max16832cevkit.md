<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16832C evaluation kit (EV kit) demonstrates the MAX16832C hysteretic current-mode high-brightness LED (HB LED) driver IC. The MAX16832C EV kit is configured as a step-down topology with a constant-current HB LED driver circuit for external HB LEDs. The MAX16832C EV kit operates from a DC supply voltage of 6.5V to 65V and is configured to deliver 666mA of current to user-supplied HB LEDs. The output voltage for the HB LED string can go up to 64V and depends upon the EV kit's input voltage.

The MAX16832C EV kit can be configured for digital pulse-width modulation (PWM) dimming operation using a digital PWM input signal. The EV kit circuit also features a thermal-foldback and temperature-simulation circuit feature. The MAX16832C EV kit is a fully assembled and tested surface-mount board. Additionally, the PCB layout design has been maximized for optimum thermal dissipation. The MAX16832C EV kit can also evaluate a MAX16832A after replacing the IC, which can be ordered from the number listed below.

Warning: Voltages exceeding 42V could exist on the LED+ and LED- output pads.

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 100V X7R ceramic capacitor (1210) Murata GRM32CR72A105K             |
| C2            |     1 | 0.01µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H103K           |
| C3            |     0 | Not installed, ceramic capacitor (1210)                                       |
| D1            |     1 | 100V, 2A Schottky rectifier (SMA) Central Semi CMSH2-100M (Top Mark: CS2100M) |
| JU1, JU2      |     2 | 2-pin headers                                                                 |
| L1            |     1 | 220µH, 1.28A inductor Coilcraft MSS1260-224KLB                                |

Features

- ♦ 6.5V to 65V Wide Supply Voltage Range
- ♦ 666mA HB LED Current
- ♦ Digital PWM Dimming Control
- ♦ Analog Dimming Control
- ♦ Thermal-Foldback and Temperature-Simulation Circuit
- ♦ Demonstrates a Thermally Optimized PCB Layout Design
- ♦ Evaluates MAX16832A (IC Replacement Required)
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16832CEVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| R1            |     1 | 0.300 Ω ±1%, 0.5W sense resistor (1206) IRC LRC-LRF1206LF-01-R300-F |
| R2            |     1 | 100k Ω ±10% potentiometer                                           |
| R3            |     1 | 20k Ω ±5% resistor (0805)                                           |
| R4            |     1 | 100k Ω ±5% resistor (0805)                                          |
| TP1           |     1 | PC mini red test point                                              |
| TP2           |     1 | PC mini black test point                                            |
| U1            |     1 | Step-down HB LED driver (8 SO-EP*) Maxim MAX16832CASA+              |
| -             |     2 | Shunts (JU1, JU2)                                                   |
| -             |     1 | PCB: MAX16832C Evaluation Kit+                                      |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp             | 631-435-1110 | www.centralsemi.com         |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| IRC, Inc                               | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX16832C when contacting these component suppliers.

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX16832C Evaluation Kit

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- 6.5V to 65V, 1A power supply
- Two digital voltmeters
- A series-connected HB LED string rated no less than 666mA
- A current probe to measure HB LED current

## Procedures

The MAX16832C EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on the power supply until all connections are completed.

Warning: Voltages exceeding 42V could exist on the LED+ and LED- output pads.

- 1) Verify  that  a  shunt  is  not  installed  across  jumper JU1 (enabled).
- 2) Verify  that  a  shunt  is  installed  across  jumper  JU2 (temperature simulation).
- 3) Connect the power supply's positive terminal to the VIN PCB pad on the EV kit. Connect the power supply's ground terminal to PGND PCB pad.
- 4) Connect digital voltmeters across the VIN and PGND PCB pads and the LED+ and LED- PCB pads.
- 5) Connect the anode of the HB LED string to the LED+ pad.
- 6) Connect the cathode of the HB LED string to the LED- pad.
- 7) Clip the current probe across the HB LED+ wire to measure the HB LED current.
- 8) Turn on the power supply and increase the powersupply output voltage from 0V, slowly ramping it up to  65V (HB LED dependant). Do not hot plug &gt; 30V DC voltage on the evaluation board! It will generate over 70V high-voltage spark on the MAX16832C and damage the IC due to the power cable inductance-caused ringing with the input filter capacitor.
- 9) Using a voltmeter, verify that the voltage across TP1 and TP2 is &gt; 2V. If it is not, adjust potentiometer R2 to obtain a reading &gt; 2V.

## Detailed Description of Hardware

The MAX16832C EV kit demonstrates the MAX16832C hysteretic constant-current HB LED driver in an 8-pin SO package with an exposed pad. The MAX16832C EV kit is configured in a step-down topology with constant current driving a string of user-supplied external HB LEDs. The MAX16832C EV kit operates from a DC supply voltage of 6.5V to 65V and requires up to 1A. The MAX16832C IC's UVLO is configured from 6V to 6.5V internally.

The EV kit circuit is  configured to deliver 666mA of current  into  a  series  HB  LED  string  with  a  maximum 64V forward voltage. The average series inductor current  is  set  to  666mA  (typ)  by  resistor  R1.  The MAX16832C thermal-foldback feature can be evaluated by connecting a negative temperature coefficient (NTC) thermistor between the TEMP\_I and PGND PCB pads on the EV kit. Alternatively, a temperature-varying  thermistor  circuit  can  be  simulated  using  potentiometer R2 and resistor R3. The EV kit also features a DIM PCB pad to evaluate digital PWM dimming operation of the external HB LEDs.

The MAX16832C EV kit uses a 1oz copper, 2-layer PCB. It has been designed to provide an example of good thermal dissipation, incorporating thermal vias under U1's exposed pad and additional thermal vias adjacent to U1. These vias carry additional heat to the bottom-layer ground plane for maximum thermal conductivity when evaluating a MAX16832 IC.

## Jumper Selection

The MAX16832C EV kit features several jumpers to reconfigure the PWM dimming, thermal-foldback feature and for reconfiguring the external HB LED current.

## Enable and HB LED Dimming Control (Digital and Analog)

The MAX16832C EV kit features a jumper to enable and disable U1. Installing jumper JU1 disables the MAX16832C IC. Additionally, HB LED dimming can be achieved on the MAX16832C EV kit by applying a digital  PWM signal at the DIM PCB input pad. The signal can be applied using an open-collector or open-drain output rated for at least the VIN voltage. Alternatively, resistor R4 can be removed and TTL logic can control the DIM pin. Remove the shunt at jumper JU1 to enable HB LED dimming using a digital PWM signal at the DIM and PGND PCB pads. The applied signal should have a 0.6V logic-low (or less) and a 2.8V logic-high (or greater) level and frequencies from 200Hz to 20kHz. To adjust the HB LED brightness, vary the signal duty cycle from 0% to 100%. See Table 1 for jumper JU1 setting of the HB LED dimming operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16832C Evaluation Kit

Table 1. Enable and HB LED Dimming (Jumper JU1)

| SHUNT POSITION   | DIM PIN                     | EV KIT ENABLE OR DIMMING OPERATION         |
|------------------|-----------------------------|--------------------------------------------|
| Not installed    | Connected to VIN through R4 | Enabled or analog dimming * (see Table 2)  |
| Not installed    | Connected to PWM signal     | Enabled, PWM signal applied at DIM PCB pad |
| Installed        | Connected to PGND           | Disabled                                   |

*Analog dimming can be achieved by placing a resistor (RDIM) across the TEMP\_I and PGND PCB pads. Remove the shunt across jumpers JU1 and JU2, and then use the ILEDDIM equation to calculate the current for the TEMP\_I PCB pad resistor, necessary to reduce the HB LED driving current. Refer to the Analog Dimming section in the MAX16832A/MAX16832C IC data sheet for information on the analog-dimming feature.

<!-- formula-not-decoded -->

where RDIM is the TEMP\_I pad resistor, ILEDDIM is the required current for the desired HB LED current, and ILED is configured for 666mA.

Alternatively, installing jumper JU2 and adjusting potentiometer R2 can simulate analog dimming. Or, for DC-control analog dimming, install jumper JU2 and apply a DC voltage in the range of 0.7V to 2V at the TP1 (positive) and TP2 (PGND) test points.

## Thermal Foldback and Temperature Simulation

The MAX16832C EV kit features a thermal-foldback and temperature-simulation circuit available at the TEMP\_I PCB pads and jumper JU2. Jumper JU2 sets the mode of operation, temperature simulation, or thermal foldback. Potentiometer R2 and resistor R3 form the adjustable temperature-simulation circuit. Test points TP1 and TP2 (PGND) provide access to the signal for adjusting the voltage.

<!-- image -->

To evaluate the MAX16832C IC thermal-foldback feature, remove jumper JU2 and connect an NTC thermistor to the TEMP\_I and PGND PCB pads. Refer to the Thermal  Foldback  section  in  the  MAX16832A/ MAX16832C IC data sheet for information on using the thermal-foldback feature. See Table 2 for configuring jumper JU2 for the desired mode of operation.

## Table 2. Temperature Simulation and Thermal Foldback (Jumper JU2)

| SHUNT POSITION   | TEMP_I PIN                           | EV KIT OPERATION       |
|------------------|--------------------------------------|------------------------|
| Installed        | Connected to R2 and R3               | Temperature simulation |
| Not installed    | Connected to external NTC thermistor | Thermal foldback *     |

## Setting External HB LED Current

Resistor R1 sets the MAX16832C EV kit average HB LED current up to 666mA. However, the HB LED average current can be set up to 700mA after replacing resistor R1. Use the following equation to calculate R1 when reconfiguring the HB LED current:

<!-- formula-not-decoded -->

where ILED is the desired HB LED average current. Refer to the Selecting RSENSE to Set LED Current section  in  the  MAX16832A/MAX16832C IC data sheet for information on setting the HB LED current.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16832C Evaluation Kit

Figure 1. MAX16832C EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16832C Evaluation Kit

<!-- image -->

Figure 2. MAX16832C EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16832C EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16832C Evaluation Kit

Figure 4. MAX16832C EV KIT PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600