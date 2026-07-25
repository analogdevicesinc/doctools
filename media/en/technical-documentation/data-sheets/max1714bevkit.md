<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX1714B evaluation kit (EV kit) demonstrates a standard 4A application circuit. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage rail for use as chipset, dynamic random-access memory (DRAM), and other low-voltage supplies.

The MAX1714B EV kit provides a 2.5V output voltage from a +4.5V to +24V battery input range. It delivers up to  4A  output  current  with  greater  than  90%  efficiency while operating at a 300kHz switching frequency, and has superior line- and load-transient response.

This EV kit is a fully assembled and tested circuit board. It also allows evaluation of other output voltages in the 1.0V to 5.5V range by changing feedback resistors R1 and R2.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                            |
|---------------|-------|--------------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 25V ceramic capacitor (1812) Taiyo Yuden TMK432BJ106KM or Tokin C34Y5U1E106Z                     |
| C2            |     1 | 330µF, 6.3V low-ESR capacitor Sanyo 6TPB330M or Kemet T510X337M010AS                                   |
| C3            |     1 | 0.1µF ceramic capacitor (0805)                                                                         |
| C4            |     1 | 0.22µF ceramic capacitor (1206)                                                                        |
| C5            |     1 | 4.7µF, 10V X5R ceramic cap (1206) Taiyo Yuden LMK316BJ475ML                                            |
| C6            |     1 | 3.3µF, 10V X5R ceramic cap (1206) Taiyo Yuden LMK316BJ335ML                                            |
| C7            |     1 | 2200pF ceramic capacitor (0805)                                                                        |
| D1            |     1 | 1A Schottky diode Nihon EP10QY03 or EC10QS03, Motorola MBRS130LT3, or International Rectifier 10MQ040N |
| D2            |     1 | 100mA, 30V Schottky diode Central Semiconductor CMPSH-3                                                |

- ♦ +4.5V to +24V Input Voltage Range
- ♦ Preset 2.5V Output Voltage
- ♦ 1.0V to 5.5V Adjustable Output
- ♦ 4A Output Current
- ♦ 94% Efficient (VOUT = 2.5V, VBATT = 7V, I LOAD = 2A)
- ♦ 300kHz Switching Frequency
- ♦ No Current-Sense Resistor
- ♦ Power-Good Output
- ♦ 16-Pin QSOP Package
- ♦ Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP. RANGE   | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX1714BEVKIT | 0°C to +70°C  | 16 QSOP      |

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                                                                    |
|----------------|-------|--------------------------------------------------------------------------------------------------------------------------------|
| JU1, JU2       |     2 | 2-pin headers                                                                                                                  |
| L1             |     1 | 4.7µH power inductor Sumida CDRH124-4R7MC (shielded), Coiltronics UP2B-4R7 (unshielded), or Coilcraft DO3316P-472 (unshielded) |
| N1A, N1B       |     1 | Dual N-channel MOSFET Fairchild FDS6982A                                                                                       |
| R1, R2, R3, R9 |     0 | Not installed                                                                                                                  |
| R4             |     1 | 100k Ω ±5% resistor (0805)                                                                                                     |
| R5, R6         |     2 | 1M Ω ±5% resistors (0805)                                                                                                      |
| R7             |     1 | 20 Ω ±5% resistor (0805)                                                                                                       |
| R8             |     1 | 200 Ω ±5% resistor (0805)                                                                                                      |
| U1             |     1 | MAX1714BEEE (16-pin QSOP)                                                                                                      |
| None           |     1 | Shunt (JU1)                                                                                                                    |
| None           |     1 | MAX1714B PC board                                                                                                              |
| None           |     1 | MAX1714 data sheet                                                                                                             |
| None           |     1 | MAX1714B EV kit data sheet                                                                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

Features

## MAX1714B Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| Central Semiconductor   | 516-435-1110 | 516-435-1824 |
| Coilcraft               | 708-639-6400 | 708-639-1469 |
| Coiltronics             | 561-241-7876 | 561-241-9339 |
| Fairchild               | 408-721-2181 | 408-721-1635 |
| International Rectifier | 310-322-3331 | 310-322-3332 |
| Motorola                | 602-303-5454 | 602-994-6430 |
| Nihon                   | 847-843-7500 | 847-843-2798 |
| Sanyo                   | 619-661-6835 | 619-661-1055 |
| Sumida                  | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 |
| Tokin                   | 408-432-8020 | 408-434-0375 |

Note: Please indicate that you are using the MAX1714B when contacting these component suppliers.

## Recommended Equipment

- +5V to +24V power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 100mA
- Dummy load capable of sinking 4A
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope

## Quick Reference

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 2) Verify that the shunt is placed across JU1.
- 3) Turn on the battery power before the +5V bias power; otherwise, the output undervoltage lockout (UVLO) timer will time out and the FAULT latch will be set, disabling the regulator until +5V power is cycled or shutdown is toggled.
- 4) Observe the 2.5V output with the DMM and/or oscilloscope. Look at the LX switching node and MOSFET gate-drive signals while varying the load current.

## Detailed Description

## Jumper Settings

Tables 1-4 show the functions you can achieve with various jumper settings.

## Evaluating Other Output Voltages

The EV kit output is preset to +2.5V. However, the output voltage can also be adjusted between 1.0V and 5.5V by selecting R1 and R2 values. Cut the PC board trace shorting R2; then select feedback resistor R2 in the 2k Ω to 20k Ω range. R1 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.0V.

If  a  3.3V  output  is  desired,  cut  the  trace  shorting  R2, then short JU7.

## Table 1. Jumper JU1 Functions (Shutdown Mode)

| SHUNT LOCATION   | SHDN PIN         | MAX1714B OUTPUT          |
|------------------|------------------|--------------------------|
| On               | Connected to VCC | MAX1714B enabled         |
| Off              | Connected to GND | Shutdown mode, V OUT = 0 |

## Table 2. Jumper JU2 Functions

## (Low-Noise Mode)

| SHUNT LOCATION   | SKIP PIN         | OPERATIONAL MODE                                                                                                           |
|------------------|------------------|----------------------------------------------------------------------------------------------------------------------------|
| On               | Connected to VCC | Low-noise mode, forced fixed- frequency PWM operation                                                                      |
| Off              | Connected to GND | Normal operation, allows auto- matic PWM/PFM switchover for pulse skipping at light load, resulting in highest efficiency. |

## Table 3. Jumper JU3 Functions

## (Fixed/Adjustable Current-Limit Selection)

| SHUNT LOCATION   | ILIM PIN                                                                                                                                                 | CURRENT-LIMIT THRESHOLD       |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| On               | Connected to VCC                                                                                                                                         | 100mV (default)               |
| Off              | Connected to REF through voltage-divider R3/R9. Refer to the Current-Limit Circuit section in the MAX1714 data sheet for information on selecting R3/R9. | Adjustable from 50mV to 200mV |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1714B Evaluation Kit

Table 4. Jumper JU4/JU5/JU6 Functions (Switching-Frequency Selection)

| JUMPER        | SHUNT LOCATION   | TON PIN          |   FREQUENCY (kHz) |
|---------------|------------------|------------------|-------------------|
| JU4, JU5, JU6 | Off              | Floating         |               300 |
| JU4           | On               | Connected to VCC |               200 |
| JU5, JU6      | Off              | Connected to VCC |               200 |
| JU5           | On               | Connected to REF |               450 |
| JU4, JU6      | Off              | Connected to REF |               450 |
| JU6           | On               | Connected to GND |               600 |
| JU4, JU5      | Off              | Connected to GND |               600 |

IMPORTANT: Don't change the operating frequency without first recalculating component values because the frequency has a significant effect on the preferred inductor value, peak current-limit level, MOSFET heating, PFM/PWM switchover point, output noise, efficiency, and other critical parameters.

Table 5. Troubleshooting Guide

| SYMPTOM                                                                                                                                                 | POSSIBLE PROBLEM                                                                                   | SOLUTION                                                                                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Circuit won't start when power is applied.                                                                                                              | Power-supply sequencing: +5V bias supply was applied first                                         | Cycle SHDN by removing and reinstalling JU1.                                                                                                                                                        |
| Circuit won't start when SHDN and +5V bias supply are cycled.                                                                                           | Output overvoltage due to shorted high-side MOSFET                                                 | Replace the MOSFET.                                                                                                                                                                                 |
| Circuit won't start when SHDN and +5V bias supply are cycled.                                                                                           | Output overvoltage due to load recovery overshoot                                                  | Reduce the inductor value, raise the switching frequency, or add more output capacitance.                                                                                                           |
| Circuit won't start when SHDN and +5V bias supply are cycled.                                                                                           | Overload condition                                                                                 | Remove the excessive load or raise the ILIM threshold by changing R3/R9.                                                                                                                            |
| Circuit won't start when SHDN and +5V bias supply are cycled.                                                                                           | Broken connection, bad MOSFET, or other catastrophic problem                                       | Troubleshoot the power stage. Are the DH and DL gate- drive signals present? Is the 2V V REF present?                                                                                               |
| On-time pulses are erratic or have unexpected changes in period.                                                                                        | VBATT power source has poor impedance characteristic                                               | Add a bulk electrolytic bypass capacitor across the bench- top power supply, or substitute a real battery.                                                                                          |
| Load-transient V OUT waveform shows excess ringing. OR LX switching waveform exhibits double-pulsing (pulses separat- ed only by a 400ns min off-time). | Instability due to low-ESR ceramic or polymer capacitors placed across fast feedback path (FB-GND) | Add parasitic PC board trace resistance between the LX-FB connection and the ceramic capacitor. OR Substitute a different capacitor type (OS-CONs, tantalums, or aluminum electrolytics work well). |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1714B Evaluation Kit

Figure 1. MAX1714B EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1714B Evaluation Kit

<!-- image -->

Figure 2. MAX1714B EV Kit Component Placement GuideComponent Side

Figure 3. MAX1714B EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4. MAX1714B EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1714B Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

- [ ] © 1999 Maxim Integrated Products