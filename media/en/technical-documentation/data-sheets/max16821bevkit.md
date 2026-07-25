<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16821B evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) designed to evaluate the MAX16821B pulsewidth-modulation (PWM) LED driver controller in a boost configuration.

The MAX16821B EV kit operates from a DC supply voltage of 7V to 24V. The EV kit's output is configured to deliver  660mA of current into series LED string with a maximum forward voltage of 28V. The LED brightness can be dimmed using a digital PWM signal.

The  EV  kit  provides  an  option  to  configure  the MAX16821B IC's overvoltage protection, switching frequency, and frequency compensation. The MAX16821B EV kit also features a clock output PCB pad to drive a second LED current regulator out-of-phase.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1, C5, C6    |     3 | 10µF±10%, 50V X7S ceramic capacitors (1210) Taiyo Yuden UMK325BJHI06K |
| C2            |     1 | 0.1µF±10%, 50V X7R ceramic capacitor (1206) Murata GRM319R71H104K     |
| C3, C4        |     2 | 1000pF±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E102K   |
| C7            |     1 | 0.022µF±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H223K   |
| C8            |     1 | 4.7µF±10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J475K    |
| C9, C10       |     2 | 0.1µF±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K    |
| D1            |     1 | 3A, 60V Schottky diode (SMA) Diodes Inc. B360A-13-F                   |

Features

- ♦ 7V to 24V Input-Voltage Range
- ♦ 660mA Output Current
- ♦ Pulse-Width-Modulated LED Current Dimming
- ♦ Resistor-Adjustable Overvoltage Protection and Switching Frequency
- ♦ Clock Output
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16821BEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| L1            |     1 | 8.8µH, 4A inductor Sumida CDEP105-8R8                                       |
| N1-N4         |     4 | 60V, 115mA n-channel MOSFETs (SOT23) Central Semiconductor 2N7002 LEAD-FREE |
| N5            |     1 | 40V, 4.9A n-channel MOSFET (8-pin SO) Vishay Si4446DY                       |
| N6            |     1 | 60V, 3.2A n-channel MOSFET (6-pin TSOP) Vishay Si3458DV-E3                  |
| R1            |     1 | 249k Ω ±1% resistor (0603)                                                  |
| R2, R5, R10   |     3 | 10k Ω ±1% resistors (0603)                                                  |
| R3            |     0 | Not installed, resistor-shorted (0603)                                      |
| R4            |     1 | 124k Ω ±1% resistor (0603)                                                  |
| R6            |     1 | 0.007 Ω ±2%, 0.5W sense resistor (1206) IRC LRC-LRF1206LF-01-R007-G         |

## MAX16821B Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| R7            |     1 | 0.15 Ω ±1%, 0.5W sense resistor (1206) IRC LRC-LRC1206LF-01-R150-F |
| R8            |     1 | 1 Ω ±5% resistor (0603)                                            |
| R9            |     1 | 2k Ω ±1% resistor (0603)                                           |
| R11           |     1 | 2.49k Ω ±1% resistor (0603)                                        |
| R12           |     1 | 1.24k Ω ±1% resistor (0603)                                        |

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| R13           |     1 | 1k Ω ±1% resistor (0603)                                                               |
| U1            |     1 | Maxim PWM LED driver controller MAX16821BATI+ (28-pin thin QFN-EP*, 5mm x 5mm x 0.8mm) |
| -             |     1 | PCB: MAX16821B Evaluation Kit+                                                         |

## Procedure

The MAX16821B EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the positive terminal of the power supply to the VIN pad on the EV kit. Connect the negative terminal of the power supply to the PGND pad next to the VIN pad.
- 2) Connect the anode end of the LED string to the LED+ pad.
- 3) Connect the cathode end of the LED string to the LED- pad.

## Component Suppliers

| SUPPLIER                    | PHONE        | WEBSITE             |
|-----------------------------|--------------|---------------------|
| Central Semiconductor Corp. | 631-435-1110 | www.centralsemi.com |
| Diodes Inc.                 | 805-446-4800 | www.diodes.com      |
| IRC Inc.                    | 361-992-7900 | www.irctt.com       |
| Murata Mfg. Co., Ltd.       | 770-436-1300 | www.murata.com      |
| Sumida Corp.                | 847-545-6700 | www.sumida.com      |
| Taiyo Yuden                 | 800-348-2496 | www.t-yuden.com     |
| Vishay                      | 203-268-6261 | www.vishay.com      |

Note: Indicate that you are using the MAX16821B when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 7V to 24V, 4A DC power supply
- One series-connected LED string rated at 660mA (28V maximum LED voltage)
- One current probe to measure LED current
- One voltmeter
- 4) Clip the current probe across the string wires to measure the LED current.
- 5) Turn on the power supply and increase the voltage to 7V or above.
- 6) Verify  that  the  LED  string  DC  current  is  approximately 660mA.
- 7) Measure the voltage between the LED+ to LEDPCB pads.

## Detailed Description

The MAX16821B EV kit circuit is designed to evaluate the MAX16821B PWM LED driver controller. The EV kit is configured in a boost topology and provides 660mA LED current for a string of user-supplied external highbrightness LEDs (HBLEDs) rated up to 28V. The MAX16821B EV kit operates from a DC supply voltage of 7V to 28V.

The EV kit average input current is set to 3.75A using resistor R6. The LED current is set to 660mA using resistor  R7.  A  PWMDIM PCB pad is provided for PWM dimming operation of the external LEDs. A CLKOUT PCB pad is also available to drive a second LED current regulator 180° out-of-phase with the first EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16821B Evaluation Kit

## LED Output Current

The MAX16821B delivers 660mA into an LED string rated up to a maximum of 28V. Resistor R7 sets the MAX16821B EV kit LED output current. Use the following equation to calculate R7 when reconfiguring the LED current:

<!-- formula-not-decoded -->

where 100mV is the MAX16821B regulated SENSE+ to SENSE- differential current-sense voltage and ILED is the desired LED current.

## Input Current-Limit Setting

Current-sense resistor R6 sets the EV kit's circuit average input current limit to 3.75A. During an overload condition at low line, the MAX16821B regulates the average input current to 3.75A. Use the following equation to calculate a new R6 value when reconfiguring the input current limit:

<!-- formula-not-decoded -->

where IIN is the input current limit.

For additional information, refer to the Average Current Limit section in the MAX16821A/MAX16821B/MAX16821C IC data sheet for setting the input current limit when configuring the MAX16821B in a boost configuration.

## LED Brightness Dimming

The LED brightness can be dimmed using a PWM signal  with  a  5V  logic-high  level  and  frequency  range  of 100Hz to 5kHz. Connect the PWM signal to the PWMDIM and SGND PCB pads to control the LEDs' brightness.

## Output Overvoltage Protection

The maximum voltage on the LED+ pin is limited to 33V, with  respect to GND, by a resistor feedback network formed by resistors R1 and R2. When the voltage at LED+ exceeds the programmed 33V threshold, the low-side driver turns off to prevent current through the LED string connected between LED+ and LED-. Use the  following  equation  to  calculate  R1  and  R2  resistor values for a new overvoltage threshold:

<!-- image -->

<!-- formula-not-decoded -->

where VOV\_LIM is the desired overvoltage threshold, R2 is typically 10k Ω , and VOV is 1.276V.

## Switching Frequency

The MAX16821B EV kit switching frequency (fSW) is configured to 500kHz by resistor R4. To reconfigure the MAX16821B switching frequency from 125kHz to 1.5MHz, use the equations below to calculate the new value for R4:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where fSW is the desired switching frequency.

When reconfiguring the MAX16821B EV kit switching frequency, other components may need to be changed for proper stable operation.

## Clock Output

The MAX16821B EV kit also features a clock output signal  that  is  180° out-of-phase with respect to MOSFET N5. The clock output is available at the CLKOUT PCB pad. Use the SGND PCB pad as a reference ground for the CLKOUT signal.

## Output Enable (EN)

The MAX16821B is enabled through pullup resistor R5. To disable the MAX16821B EV kit, connect the EN PCB pad to the SGND pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16821B Evaluation Kit

Figure 1. MAX16821B EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16821B Evaluation Kit

Figure 2. MAX16821B EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX16821B EV Kit PCB Layout-Component Side

Figure 4. MAX16821B EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5