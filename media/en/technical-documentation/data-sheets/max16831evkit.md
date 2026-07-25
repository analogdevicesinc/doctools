<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16831 evaluation kit (EV kit) demonstrates the MAX16831  current-mode,  high-brightness  LED (HBLED) driver IC. The MAX16831 EV kit is configured as a step-down/step-up (buck-boost) topology circuit with peak inductor current and average LED current control  for  external  LEDs.  The  MAX16831 EV kit operates from a DC supply voltage of 9V to 40V and is configured to deliver 1A of current. The maximum output voltage of the LED string can be up to 28V.

The MAX16831 EV kit can be configured for analogcontrol  PWM or digital PWM dimming operation using either  an  analog linear DC voltage or a digital PWM input signal to control the LEDs' brightness. This EV kit has an undervoltage lockout (UVLO) feature that disables the EV kit and overvoltage protection that protects  the  circuit  under  no-load  conditions.  The  EV  kit circuit  also  features  a  clock  output  and  features  an input for synchronizing to an external clock. The MAX16831 EV kit is a fully assembled and tested surface-mount printed-circuit board (PCB).

Caution: Do not power up the MAX16831 EV kit without connecting a load to the LED+ and LEDPCB pads.

Warning: Voltages exceeding 42V may exist on the LED+ and LED- output pads.

| DESIGNATION         |   QTY | DESCRIPTION                                                                    |
|---------------------|-------|--------------------------------------------------------------------------------|
| C1, C3, C4, C5, C15 |     5 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K            |
| C2                  |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K               |
| C6, C14             |     2 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H102K           |
| C7                  |     1 | 10µF ±10%, 16V X7R ceramic capacitor (1206) Murata GRM31CR71C106K              |
| C8                  |     1 | 100µF ±20%, 50V electrolytic capacitor (10.3mm x 10.3mm) Panasonic EEVFCIH101P |
| C9                  |     1 | 10µF ±10%, 50V X7S ceramic capacitor (1210) Taiyo Yuden UMK325C7106KM          |
| C10, C11, C12       |     3 | 4.7µF ±10%, 100V X7R ceramic capacitors (2220) Murata GRM55DR61H106K           |

Features

- ♦ 9V to 40V Wide Supply Voltage Range
- ♦ 1A Output Current
- ♦ Analog-Control PWM Dimming
- ♦ PWM Dimming Control
- ♦ Output Overvoltage Protection
- ♦ Buffered Clock Output
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16831EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C13           |     1 | 0.047µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H473K  |
| C16, C17      |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0603) Murata GQM1885C1H101J |
| D1            |     1 | 300mA, 100V diode (SOD123) Diodes Inc. 1N4148W-7-F                 |
| D2            |     0 | Not installed, diode (SOD123)                                      |
| D3            |     1 | 3A, 100V Schottky diode (PowerDI) Diodes Inc. PDS3100              |
| D4            |     1 | 1A, 100V Schottky diode (SMA) Diodes Inc. B1100-13-F               |
| JU1           |     1 | 2-pin header                                                       |
| L1            |     0 | Not installed, inductor                                            |
| L2            |     1 | 10µH, 9.2A inductor Sumida CDEP147NP-100MC-95                      |
| N1            |     1 | 60V, 3.2An-channelMOSFET(6-pinTSOP) Vishay Si3458DV-E3             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX16831 Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| N2            |     1 | 100V, 42A n-channel MOSFET (D-Pak) International Rectifier IRLR3110Z  |
| N3            |     0 | Not installed, MOSFET (D-Pak)                                         |
| R1            |     1 | 73.2k Ω ±1% resistor (0603)                                           |
| R2            |     1 | 12.4k Ω ±1% resistor (0603)                                           |
| R3            |     1 | 0.1 Ω ±1%, 500mW sense resistor (1206) IRC/TT LRC-LR-1206LF-01-R100-F |
| R4            |     1 | 100 Ω ±5% resistor (0603)                                             |
| R5            |     1 | 1 Ω ±5% resistor (0603)                                               |
| R6, R7        |     2 | 0.04 Ω ±1%,2W sense resistors (2512) IRC/TT LRC-LR-2512LF-01-R040-F   |

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| R8            |     0 | Not installed, resistor (0805)                             |
| R9            |     1 | 280k Ω ±1% resistor (0603)                                 |
| R10, R15      |     2 | 4.99k Ω ±1% resistors (0603)                               |
| R11           |     1 | 1k Ω ±1% resistor (0603)                                   |
| R12           |     1 | 3.32k Ω ±1% resistor (0603)                                |
| R13           |     1 | 42.2k Ω ±1% resistor (0603)                                |
| R14           |     1 | 100k Ω potentiometer (single turn)                         |
| U1            |     1 | Current-mode HBLED driver (32 TQFN-EP*) Maxim MAX16831ATJ+ |
| -             |     1 | Shunt (JU1)                                                |
| -             |     1 | PCB: MAX16831 Evaluation Kit+                              |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes, Inc.                           | 805-446-4800 | www.diodes.com              |
| International Rectifier                | 310-322-3331 | www.irf.com                 |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX16831 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 9V to 40V, 4A power supply
- Two digital voltmeters
- A series-connected LED string rated at 1A (28V max)
- A current probe to measure LED current

## Procedures

The MAX16831 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed and do not power up the MAX16831 EV kit without connecting a load to the LED+ and LED- PCB pads.

## Warning: Voltages exceeding 42V may exist on the LED+ and LED- output pads.

- 1) Verify  that  a  shunt  is  installed  across  jumper  JU1 (analog dimming control).
- 2) Connect the power supply's positive terminal to the VIN PCB pad on the EV kit. Connect the power supply's ground terminal to PGND PCB pad.
- 3) Connect the digital voltmeters across the VIN and PGND  PCB  pads  and  the  LED+  and  LEDPCB pads.
- 4) Connect  the  anode  of  the  LED  string  to  the LED+ pad.
- 5) Connect the cathode of the LED string to the LED- pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16831 Evaluation Kit

- 6) Clip the current probe across the LED+ wire to measure the LED current.
- 7) Turn on the power supply and increase the input voltage to 9V.
- 8) Adjust potentiometer R14 to obtain the desired LED current duty cycle.
- 9) Measure the voltage between the LED+ and LEDPCB pads.

## Detailed Description

The MAX16831 evaluation kit (EV kit) demonstrates the MAX16831 current-mode HBLED driver IC. The MAX16831 EV kit is configured in a step-down/step-up (buck-boost) topology with peak current control and average current control for a string of user-supplied external HBLEDs. The MAX16831 EV kit operates from a DC supply voltage of 9V to 40V and requires up to 4A. The circuit is configured to deliver 1A of current into series LED string with a maximum 28V forward voltage.

The EV kit sets the maximum series inductor current to 8.3A using parallel resistors R6 and R7. The average LED current is set to 1A using resistor R3. A CLKOUT PCB pad is available to monitor the oscillator frequency. A DIM PCB pad is also provided for PWM dimming operation of the external LEDs and to monitor the analog DC voltage applied at the MAX16831 IC DIM pin.

## Undervoltage Lockout (UVLO)

The MAX16831 EV kit's UVLO threshold is configured to 8.3V using resistors R1 and R2. The UVEN PCB pad can be used to disable the EV kit circuit by connecting UVEN to AGND. To configure the circuit to a different UVLO threshold,  refer  to  the Setting  the  UVLO Threshold section in the MAX16831 IC data sheet.

## Peak Inductor Current-Limit Setting

The parallel combination of current-sense resistors R6 and R7 sets the EV kit's peak inductor current limit to 8.3A. Use the following equation to calculate the total resistance needed to reconfigure the inductor peak current limit:

<!-- formula-not-decoded -->

where I PEAK is the inductor peak current and R TOTAL is the total  parallel  resistance  placed  at  the  R6  and  R7 PCB pads.

Refer to the ILIM and HICCUP Comparator  section in the MAX16831 IC data sheet for additional information on setting the peak current-limit threshold.

<!-- image -->

## Setting External LED Current

Resistor R3 sets the MAX16831 EV kit average LED current to 1A. Use the following equation to calculate R3 when reconfiguring the LED current:

<!-- formula-not-decoded -->

where I LED is the LED current.

## LED Dimming Control

LED dimming can be achieved on the MAX16831 EV kit by applying a digital PWM signal or an analog DC voltage at the DIM PCB input pad. Jumper JU1, potentiometer R14, resistor R15, and capacitor C15 configure the MAX16831 EV kit for analog-control PWM dimming operation.

Place a shunt across jumper JU1 to set the EV kit for analog-control PWM dimming and adjust potentiometer R14. The analog DC voltage at the DIM PCB pad sets the duty cycle of the LED current, which controls the external LED brightness. The MAX16831 IC DIM pin voltage can be monitored by placing a voltmeter across the DIM and AGND PCB pads.

Use the following equation to calculate the voltage at the DIM PCB pad, which is necessary to program the LED output current duty cycle, D:

<!-- formula-not-decoded -->

where DIM is the analog DC voltage at the MAX16831 EV kit DIM PCB pad in volts, and D is the duty cycle of the LED output current.

When operating the MAX16831 EV kit with analog-control PWM dimming, the LED dimming frequency is internally set by the MAX16831 IC to 200Hz.

Remove the shunt at jumper JU1 to control LED dimming using a digital PWM signal at the DIM PCB pad. Apply a digital PWM signal with a 3.2V to 15V logic-high level  in  the  80Hz  to  2kHz  frequency  range  and  adjust the duty cycle to adjust the LED brightness. See Table 1 for jumper JU1 setting for LED dimming operation.

## Table 1. MAX16831 LED Dimming Operation (Jumper JU1)

| SHUNT POSITION   | EV KIT DIMMING OPERATION             |
|------------------|--------------------------------------|
| Not installed    | PWM signal applied at DIM PCB pad    |
| Installed        | Analog DC voltage adjusted using R14 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16831 Evaluation Kit

## CLK OUTPUT

The MAX16831 EV kit features a buffered digital clock output, CLKOUT. The MAX16831 PWM clock frequency is programmed to 300kHz by resistor R13. To synchronize the MAX16831 EV kit to an external clock signal,  connect  a  clock  signal  with  a  2.8V  to  5.5V logic level and 125kHz to 500kHz square wave at the RTSYNC PCB pad. Refer to the Oscillator, Clock, and Synchronization section in  the  MAX16831 IC data sheet for information on setting the MAX16831 IC PWM frequency.

## Output Overvoltage Protection

The maximum voltage on the LED+ PCB pad is limited to 70.8V, with respect to GND, by a feedback network formed by resistors R9 and R10. When the voltage at LED+ exceeds the programmed 70.8V threshold, PWM switching is terminated and no further energy is transferred to the load connected between LED+ and LED-. Refer to the Setting the Overvoltage Threshold section in the MAX16831 IC data sheet for setting the overvoltage threshold.

If the EV kit is turned on with no load, the voltage at LED+ may rise to unsafe levels. Even though the EV kit  has  overvoltage protection, connect the specified load before powering up the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16831 Evaluation Kit

Figure 1. MAX16831 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16831 Evaluation Kit

Figure 2. MAX16831 EV Kit Component Placement Guide-Components Side

<!-- image -->

Figure 3. MAX16831 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16831 Evaluation Kit

<!-- image -->

Figure 4. MAX16831 EV Kit PCB Layout-GND Layer 2

<!-- image -->

Figure 5. MAX16831 EV Kit PCB Layout-VCC Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16831 Evaluation Kit

Figure 6. MAX16831 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16831 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------|-----------------|
|                 0 | 11/07           | Initial Release                  | -               |
|                 1 | 10/08           | Component C9 part number change. | 1               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9