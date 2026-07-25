<!-- lastmod 2022-08-02 -->
## General Description

The MAX8582 evaluation kit (EV kit) evaluates the MAX8582 1.5MHz pulse-width modulated (PWM) stepdown DC-DC converter. The circuit is optimized for powering power amplifiers (PAs) in wireless applications. The MAX8582 EV kit output voltage is adjustable from 0.4V to VIN using the REFIN input and can deliver 600mA of load current in low-power mode. In highpower mode the output is shorted to the input by an internal MOSFET. The MAX8582 EV kit can also evaluate the MAX8581. To evaluate the MAX8581, order a free sample along with this EV kit.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1, C2        |     2 | 2.2µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J225K |
| JU1, JU2      |     2 | 3-pin headers                                                        |
| L1            |     1 | 3.3µH inductor (2.5mm x 2mm) FDK MIPF2520D3R3                        |
| U1            |     1 | MAX8582ETB+                                                          |
| -             |     2 | Shunts (2 position)                                                  |
| -             |     1 | PCB: MAX8582 Evaluation Kit+                                         |

## Quick Start

## Recommended Equipment

- 2.7V to 5.5V power supply capable of delivering 600mA (further referred to as PS1)
- 0 to 5.5V power supply capable of delivering 100mA (further referred to as PS2)
- Digital multimeter (DMM)
- 500mA load
- Ammeter (optional)

## Procedure

The MAX8582 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Preset PS1 to 3.6V.
- 2) Turn off PS1.
- 3) Preset PS2 to 0.75V.
4. ♦ 600mA Step-Down Converter
5. ♦ 60m Ω (typ) Bypass Mode with Integrated MOSFET
6. ♦ Dynamically Adjustable Output from 0.4V to VIN
7. ♦ Up to 94% Efficiency
8. ♦ Low Output Ripple at All Loads
9. ♦ 2.7V to 5.5V Input-Voltage Range
10. ♦ 0.1µA Shutdown Mode
11. ♦ Output Short-Circuit Protection
12. ♦ Thermal-Shutdown Protection
13. ♦ 10-Pin, 3mm x 3mm, TDFN Package

<!-- image -->

Features

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE          |
|---------------|--------------|---------------------|
| MAX8582EVKIT+ | 0°C to +70°C | 10 TDFN (3mm x 3mm) |

## Component Suppliers

| SUPPLIER             | PHONE        | WEBSITE        |
|----------------------|--------------|----------------|
| FDK                  | 408-432-8331 | www.fdk.com    |
| Murata Mfg. Co. Ltd. | 814-237-1431 | www.murata.com |

Note: Indicate that you are using the MAX8582 when contacting these component suppliers.

- 4) Turn off PS2.
- 5) Verify  that  the  shunt  on  JU1  is  connected  to  pins 1-2 (ON). Verify that the shunt on JU2 is connected to pins 2-3 (LP).
- 6) Connect the PS1 positive power-supply terminal to the pad on the EV kit labeled IN.
- 7) Connect the PS1 power-supply ground terminal to the pad on the EV kit labeled GND.
- 8) Connect the PS2 positive power-supply terminal to the pad on the EV kit labeled REFIN.
- 9) Connect the PS2 power-supply ground terminal to the pad on the EV kit labeled GND.
- 10) Connect a DMM across the OUT and GND pads on the EV kit.
- 11) Turn on PS1.
- 12) Turn on PS2.

1

## MAX8582 Evaluation Kit

- 13) Verify  that  the  DMM  is  reading  between 1.5V and 1.55V.
- 14) Remove the shunt from pins 1-2 (ON) of JU1 and place it on pins 2-3 (OFF) of JU1.
- 15) Verify that the DMM is reading 0V.
- 16) Remove the shunt from pins 2-3 (OFF) of JU1 and place it on pins 1-2 (ON) of JU1.
- 17) Connect the 500mA load between OUT and GND.
- 18) Verify that the DMM is reading between 1.49V and 1.53V.
- 19) Remove the shunt from pins 2-3 (LP) of JU2 and place it on pins 1-2 (HP) of JU2.
- 20) Verify that the DMM is reading near 3.6V.
- 21) Remove the shunt from pins 1-2 (HP) of JU2 and place it on pins 2-3 (LP) of JU2.
- 22) Verify that the DMM is reading between 1.49V and 1.53V.
- 23) Adjust PS2 to 1V.
- 24) Verify  that  the  DMM  is  reading  between 1.9V and 2.2V.
- 25) Adjust PS2 to 2V.
- 26) Verify that the DMM is reading near 3.6V.

## Detailed Description

The MAX8582 step-down converter delivers over 600mA to  dynamically power the PA in CDMA handsets. The hysteretic PWM control scheme switches with nearly fixed frequency at 1.5MHz allowing high efficiency and tiny external components. A 60m Ω bypass mode connects the PA directly to the battery during highpower transmission.

## Bypass Mode

During high-power transmission, the bypass mode's low on-resistance provides low dropout, long battery

Figure 1. MAX8582 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

life,  and  high  output-current  capability.  Bypass  mode connects IN directly to OUT with the internal 65m Ω (typ)  bypass FET, while the step-down converter is forced into 100% duty-cycle operation to slightly lower total on-resistance to 60m Ω (typ).

## Forced and Automatic Bypass Mode

Invoke forced bypass mode by driving HP high or connect a shunt to pins 1-2 of JU2. Invoke automatic bypass by applying a high voltage to REFIN. To prevent excessive output ripple as the step-down converter approaches dropout, the MAX8582 preemptively enters bypass mode automatically when VREFIN &gt; 0.465VIN.

## Shutdown Mode

Connect SHDN to GND or connect a shunt to pins 2-3 of  JU1  to  place  the  MAX8582 in shutdown mode and reduce supply current to 0.1µA. In shutdown mode, the control circuitry,  internal  switching  MOSFET, and synchronous rectifier turn off and LX becomes high impedance. Connect SHDN to IN or connect a shunt to pins 1-2 of JU1 for normal operation.

## Analog REFIN Control

The MAX8582 uses REFIN to set the output voltage and to switch to bypass mode. The set output voltage is two times the voltage applied at REFIN, minus half the load regulation caused by the inductor's DC resistance. This allows the converter to operate in applications where dynamic voltage control is required.

## Evaluating the MAX8581

For evaluating the MAX8581, carefully remove the MAX8582 (U1) and install the MAX8581. The inductor also needs to be replaced with a 1.5µH inductor. Contact the factory for a sample of the FDK 1.5µH (2.5mm x 2mm) MIPF2520DIR5. C1 and C2 remain the same.

<!-- image -->

Figure 2. MAX8582 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8582 Evaluation Kit

Figure 3. MAX8582 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX8582 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3