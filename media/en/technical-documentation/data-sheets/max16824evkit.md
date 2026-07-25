<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16824 evaluation kit (EV kit) demonstrates a high-voltage, 3-channel, linear high-brightness LED (HB LED) driver using the MAX16824 IC. This EV kit is configured to supply an LED current of 100mA per channel and operates from a 0.5A, 6.5V to 28V rated power supply.

The EV kit eases evaluation of the MAX16824 pulsewidth-modulation (PWM) dimming-control feature by providing three independent PWM inputs to all three channels. Each PWM input accepts a digital signal up to 5kHz.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 50V X7R ceramic capacitor (1210) Murata GRM32RR71H105K or TDK C3325X7R1H105K |
| C2            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K                       |
| R1, R2, R3    |     3 | 2 Ω ±1%, 0.25W sense resistors (1206) IRC WCR-WCR1206LF-2R00-F                         |
| U1            |     1 | Linear HB LED driver (16-pin TSSOP-EP*) Maxim MAX16824AUE+                             |
| -             |     1 | PCB: MAX16824 Evaluation Kit+                                                          |

## Features

- ♦ Operates from a 6.5V to 28V, 0.5A Supply
- ♦ 3 Channels for Driving High-Brightness LEDs
- ♦ 100mA LED Current per Channel
- ♦ Three Independent PWM Inputs
- ♦ PWM Dimming Control Up to 5kHz
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16824EVKIT+ | EV Kit |

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX16824 EV Kit
- 6.5V to 28V, 0.5A adjustable DC power supply
- Logic function generator
- Three LED loads, each rated as follows: Current rating ≥ 100mA Total LED string forward voltage VFLED ≤ 26.3V
- See the LED Load Configuration section for more information

## Procedure

The MAX16824 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all

connections are completed.

- 1) Set the power-supply output to over VFLED + 1.7V.
- 2) Set the function generator to produce a 5V-logic, 1kHz square wave with a 50% duty cycle.
- 3) Disable the power-supply and function generator output.
- 4) Connect the power-supply ground to the GND pad next to the IN pad.
- 5) Connect the power-supply positive output to the IN pad.
- 6) Connect the logic function generator ground to the GND pad next to the PWM pads.

## Component Suppliers

| SUPPLIER             | PHONE        | WEBSITE               |
|----------------------|--------------|-----------------------|
| IRC, Inc.            | 361-992-7900 | www.irctt.com         |
| Murata Mfg. Co., Ltd | 770-436-1300 | www.murata.com        |
| TDK Corp.            | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX16824 when contacting these component suppliers.

## MAX16824 Evaluation Kit

- 7) Connect the logic function generator output to each of the PWM pads (PWM1, PWM2, and PWM3).
- 8) Connect one LED load anode to each LED output pad (LED1+, LED2+, or LED3+).
- 9) Connect each LED load cathode to the corresponding LED input pad (LED1-, LED2-, or LED3-).
- 10) Enable the power-supply output.
- 11) Enable the logic function generator signal output.
- 12) Verify that the attached LEDs are illuminated.

## Detailed Description of Hardware

The MAX16824 EV kit demonstrates a high-voltage, 3-channel, linear high-brightness LED driver using the MAX16824 IC in a 16-pin TSSOP surface-mount package. This EV kit is configured to supply an LED current of 100mA per channel. The MAX16824 IC controls the LED current by maintaining a 200mV drop across each external sense resistor (R1, R2, and R3). The EV kit operates from a 0.5A, 6.5V to 28V rated power supply.

The three independent PWM inputs (PWM1, PWM2, and PWM3) control dimming for each channel. Each PWM input functions as an active-high enable for the corresponding LED channel.

The MAX16824 features an exposed paddle that uses the top-layer and bottom-layer PCB copper as a heatsink. The exposed paddle connects to GND.

## LED Load Configuration

The MAX16824 EV kit can drive three separate LED loads. Each LED load can consist of multiple LEDs connected in series. The LED load's forward voltage can be up to 26.3V. The EV kit drives LEDs rated for at least 100mA. Proper heat sinking of the LEDs is important for optimum LED performance and durability.

## Output Current Setting

The current for each MAX16824 EV kit LED channel (ILED1, ILED2, and ILED3) is configured to 100mA by three sense resistors (R1, R2, and R3, respectively). See the equation below to select a different LED current and a new resistor value. If designing for a higher LED current, verify that the desired current setting does not exceed the power rating of the corresponding resistor (R1, R2, or R3) or the LED load. Do not set the LED current above 150mA. Use the following equation to calculate the value of the new resistor:

<!-- formula-not-decoded -->

where ILED\_ is the desired LED current and R\_ is the resistor value required to set the desired current of the LED channel.

## High Input Voltage and Thermal Protection

The MAX16824 IC operates in linear mode. As a result, the IC can dissipate significant power if operated using a high input voltage and a small VFLED. High-power dissipation may cause the IC to go into thermal shutdown. Refer to the Thermal Protection section in the MAX16824/ MAX16825 IC data sheet for more information.

## LED Dimming

The MAX16824 EV kit features three independent PWM pads used for controlling LED brightness for each channel. Each channel can have a different dimming signal pattern. Use a digital PWM signal with a 5V logic level  and  a  switching  frequency between 100Hz and 5kHz. Frequencies lower than 100Hz can introduce flickering in the light output. Vary the duty cycle of the signal to adjust the LED brightness. LED brightness increases as the duty cycle increases and vice versa. When the PWM signal's duty cycle is 100%, the LEDs are continuously on. At 0% duty cycle, the outputs are disabled.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16824 Evaluation Kit

<!-- image -->

Figure 1. MAX16824 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16824 Evaluation Kit

Figure 2. MAX16824 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16824 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16824 Evaluation Kit

Figure 4. MAX16824 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5