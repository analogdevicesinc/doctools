<!-- lastmod 2022-08-04 -->
## General Description

The MAX1800 evaluation kit (EV kit) accepts 1.8V to 5.5V battery voltages and provides all of the output voltages required in digital still cameras (DSC). The EV kit consists of the MAX1800 multi-output master converter and the MAX1801 slave step-up converter.

The EV kit provides 10 separate output voltages. The MAX1800 provides one main-system step-up converter (3.3V/400mA), one linear regulator for the DSP core (1.8V/200mA), one step-up converter for the backlight (7V/100mA), three flyback outputs for the CCD (14.3V/10mA, 5V/50mA, -8.15V/10mA), and three flyback outputs for the LCD (13.85V/10mA, 5V/50mA, -16.23V/10mA). In addition, the MAX1801 provides one step-up converter for the motor (5V/500mA).

The EV kit's outputs are adjustable and are suitable for applications running from 2- or 3-cell alkaline, NiCd, or NiMH batteries or from a single lithium-on (Li+) battery.

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| C1, C22       |     2 | 10µF, 10V ceramic capacitors (1210) TDK C3225X5R1A106M                               |
| C2            |     1 | 100pF, ceramic capacitor (0603)                                                      |
| C3, C15, C21  |     3 | 0.1µF ceramic capacitors (0603)                                                      |
| C4, C18       |     2 | 4.7µF, 10V ceramic capacitors (1206) TDK C3216X5R1A475M or Taiyo Yuden LMK316BJ475ML |
| C5 - C8, C20  |     5 | 1000pF ceramic capacitors (0603)                                                     |
| C9 - C14      |     6 | 1µF, 25V ceramic capacitors (1206) TDK C3216X7R1E105KT                               |
| C16           |     1 | 4.7µF, 6.3V ceramic capacitor (0805) TDK C2012X5R0J475K                              |

## MAXIM

- ♦
- 10 Outputs

One Synchronous Rectified Step-Up Converter Two Step-Up Converters One Low-Dropout Linear Regulator Output Six Flyback Outputs

- ♦ 1.8V to 5.5V Input Voltage Range
- ♦ All Converters Synchronized to Single Oscillator
- ♦ 100kHz to 1MHz Switching Frequency
- ♦ Main Power-OK Output
- ♦ Independent Shutdown of Each Converter
- ♦ Short-Circuit-Protected Flyback Outputs
- ♦ Soft-Start on Each Output
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE       |
|--------------|------------------|------------------|
| MAX1800EVKIT | 0 ° C to +70 ° C | 32 TQFP, 8 SOT23 |

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                     |
|----------------|-------|---------------------------------------------------------------------------------|
| C17            |     1 | 220µF, 10V, 100m Ω low-ESR (E case) AVX TPSE227M010R0100                        |
| C19            |     1 | 47µF, 6.3V, 100m Ω low-ESR (C case) Sanyo 6TPA47M                               |
| C24            |     1 | 0.01µF ceramic capacitor (0603)                                                 |
| D1, D4, D6     |     3 | PN junction diodes (SOT323) Central Semiconductor CMSD-4448                     |
| D2, D3, D5, D9 |     4 | Schottky diodes (SOT323) Central Semiconductor CMSSH-3                          |
| D7, D8         |     2 | Schottky diodes (SOD-123) Motorola MBR0520L or Fairchild Semiconductor MBR0520L |
| D10            |     1 | Schottky diode (CASE 403A- 03 SMB) Motorola MBRS130LT3                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

## MAX1800 Evaluation Kit

| DESIGNATION                            |   QTY | DESCRIPTION                                           |
|----------------------------------------|-------|-------------------------------------------------------|
| JU1 - JU6                              |     6 | 3-pin headers                                         |
| JU7 - JU12                             |     6 | 2-pin headers                                         |
| L1                                     |     1 | 1.4µH inductor Sumida CR43-1R4                        |
| L2                                     |     1 | 10µH inductor Sumida CDRH6D38-100                     |
| L3                                     |     1 | 0.5µH inductor Sumida CR43 Type Sample 4757-T019      |
| Q1, Q2, Q3, Q5                         |     4 | N-channel MOSFETs Fairchild Semiconductor FDN337N     |
| Q4                                     |     1 | P-channel MOSFET Fairchild Semiconductor NDS336P      |
| R37, R38, R42, R43                     |     4 | 200 Ω ± 5% resistors (1206)                           |
| R1                                     |     1 | 40.2k Ω ± 1% resistor (0603)                          |
| R2, R29, R31, R33                      |     4 | Shorted in the PC board layout (0402) (not installed) |
| R3, R12 - R15, R26, R28, R30, R32, R34 |    10 | Open, not installed (0402)                            |
| R4                                     |     1 | 464k Ω ± 1% resistor (0603)                           |
| R5, R10, R17, R19, R22, R25            |     6 | 100k Ω ± 1% resistors (0603)                          |
| R6                                     |     1 | 200k Ω ± 5% resistor (0402)                           |

## Quick Start

## Recommended Equipment

- 1.8V to 5.5V battery or power supply
- Digital voltmeter (DVM)

## Connections and Setup

- 1) Make sure jumpers JU1-JU6 are connected in the 12 (ON) position. This ensures that all converters will turn-on at power-up.
- 2) Before loading any output, check the output voltage and output current capability shown in Table 1. See the  Startup  Input  Voltage  vs.  MAIN  Output  Current

## Component List (continued)

| DESIGNATION                  |   QTY | DESCRIPTION                                   |
|------------------------------|-------|-----------------------------------------------|
| R7, R8, R9, R27              |     4 | 10k Ω ± 5% resistors (0402)                   |
| R11, R16, R24                |     3 | 301k Ω ± 1% resistors (0603)                  |
| R18                          |     1 | 44.2k Ω ± 1% resistor (0603)                  |
| R20                          |     1 | 4.7 Ω ± 5% resistor (0402)                    |
| R21                          |     1 | 165k Ω ± 1% resistor (0603)                   |
| R23                          |     1 | 1M Ω ± 5% resistor (0402)                     |
| R35, R36, R40, R41, R44, R45 |     6 | 3k Ω ± 5% resistors (1206)                    |
| R39                          |     1 | 750 Ω ± 5% resistor (1206)                    |
| R46                          |     1 | 100k Ω ± 5% resistor (0402)                   |
| T1                           |     1 | Transformer Sumida 'Sample Number': 6333-T330 |
| T2                           |     1 | Transformer Sumida 'Sample Number': 6333-T329 |
| U1                           |     1 | MAX1800EHJ (32-pin TQFP)                      |
| U2                           |     1 | MAX1801EKA (8-pin SOT23)                      |
| None                         |    12 | Shunts                                        |

- graph in the Typical Operating Characteristics in the MAX1800 data sheet before loading MAIN.
- 3)  Make sure jumpers JU7-JU12 are connected if no external loads are attached to the OUT1A, OUT1B, OUT1C, OUT2A, OUT2B, and OUT2C outputs.
- 4) Attach a 1.8V to 5.5V battery or power supply to IN.
- 5) Using the DVM, measure the voltage at MAIN, LDO, OUT1\_, OUT2\_, OUT3 and OUT4.

## Detailed Description

The main output (MAIN) powers the MAX1800's internal circuitry.  MAIN must be regulated before any of the other outputs function.

To enable MAIN, place jumper JU2 in the 1-2 position. Apply 1.8V to 5.5V between IN and GND. The voltage between MAIN and GND should be approximately 3.3V if  IN  is  &lt;3.3V.  Because the IC is powered from MAIN, the IC does not work at maximum efficiency until MAIN is in regulation. Thus, at low battery voltages and heavy loads, MAIN may not have sufficient power to start. The output current capability shown in Table 1 is valid for input voltages down to 1.8V. The circuit operates for

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Output Voltage and Current Capability

| LABEL   | VOLTAGE/CURRENT   |
|---------|-------------------|
| MAIN    | 3.3V at 400mA     |
| LDO     | 1.8V at 200mA     |
| OUT1A   | 14.3V at 10mA     |
| OUT1B   | 5V at 50mA        |
| OUT1C   | -8.15V at 10mA    |
| OUT2A   | 13.85V at 10mA    |
| OUT2B   | 5V at 50mA        |
| OUT2C   | -16.23V at 10mA   |
| OUT3    | 7V at 100mA       |
| OUT4    | 5V at 500mA       |

input voltages below 1.8V but with reduced output current capability. Refer to the MAX1800 data sheet for the minimum allowable input voltage for the part to start at a given load.

When the MAIN output is in regulation, the MAIN\_OK output will be pulled up to the MAIN output voltage. If the MAIN\_OK output is low (near ground), MAIN is not in regulation.

## LDO Output

The LDO output is linearly regulated from MAIN to 1.8V. Note that the load current on LDO is produced from MAIN. Drawing more than 200mA out of LDO reduces the current capability at MAIN.

To enable LDO, place jumper JU3 in the 1-2 (ON) position.

## OUT1\_ (Flyback Outputs)

The voltages at OUT1\_ are typical of CCD bias voltages. The output voltages are 14.3V/10mA, 5V/50mA, and -8.15V/10mA. These voltages are generated through a custom flyback transformer. OUT1B (5V) is used to regulate the flyback circuit. The other output voltages (14.3V and -8.15V) are controlled by the turnsratio of the flyback transformer. If the 14.3V and -8.15V outputs are not loaded at the fixed 10mA load, then the output voltage will change from the nominal loaded output voltage. Loads are included on the MAX1800 EV kit by shorting jumpers JU7 through JU12. If external loads are used, disable the built-in loads by removing these jumpers.

To enable OUT1\_, place jumper JU4 to the 1-2 (ON) position. To disable OUT1\_, place jumper JU4 to the 2-

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1800 Evaluation Kit

3 (OFF) position. To enable/disable the output voltages using an external signal, see the Logic Control of the Output Voltages section.

If a different set of output voltages is required, see the Setting the Flyback Circuit Voltages (OUT1\_ and OUT2\_) section.

## OUT2\_ (Flyback Outputs)

The voltages at OUT2\_ are typical of LCD bias voltages. The output voltages are 13.85V/10mA, 5V/50mA, and -16.23V/10mA. These voltages are generated through a custom flyback transformer. OUT2B (5V) is used to regulate the flyback circuit. The other output voltages (13.85V and -16.23V) are controlled by the turns-ratio of the flyback transformer. If the 13.85V and -16.23V outputs are not loaded at the fixed 10mA load, then the output voltage will change from the nominal loaded output voltage. Loads are included on the MAX1800 EV kit by shorting jumpers JU7 through JU12. If external loads are used, disable the built-in loads by removing these jumpers.

To enable OUT2\_, place jumper JU5 to the 1-2 (ON) position. To disable OUT2\_, place jumper JU5 to the 23 (OFF) position. To enable/disable the output voltages using an external signal, see the Logic Control of the Output Voltages section.

If a different set of output voltages is required, see the Setting the Flyback Circuit Voltages (OUT1\_ and OUT2\_) section.

## OUT3

The voltage at OUT3 is typical of that required by a CCFL backlight inverter. To enable OUT3, place jumper JU6 to the 1-2 (ON) position.  Place the external load between OUT3 and GND. To change the output voltage of  OUT3, see the Setting the Step-Up Output Voltage (OUT3 and OUT4) section.

OUT3 can be configured to drive a white LED backlight instead of a CCFL backlight.

## OUT4

The voltage at OUT4 is a general-purpose 5V output that  can  be  used  for  powering  a  small  motor  or  other peripheral circuitry and can supply up to 500mA. To enable OUT4, place jumper JU1 to the 1-2 (ON) position. Place the external load between OUT4 and GND. To change the output voltage of OUT4, see the Setting the Step-Up Output Voltage (OUT3 and OUT4) section.

## MAX1800 Evaluation Kit

## Customizing the MAX1800 EV Kit

## Setting the Main Output Voltage

MAIN is set by a voltage divider, which drops the output voltage to the 1.25V feedback threshold voltage. To change the 3.3V setting of MAIN, change the resistor divider ratio by changing R21. Use:

<!-- formula-not-decoded -->

The MAIN output voltage may be set to any voltage between 2.7V and 5.5V. For additional information, see the MAX1800 data sheet.

## Setting the LDO Output Voltage

The LDO output voltage is set by a voltage divider, which drops the output voltage to the 1.25V feedback threshold voltage. To change the 1.8V setting of LDO, change the resistor divider ratio by changing R18. Use:

<!-- formula-not-decoded -->

The LDO output voltage may be set to any voltage between 1.25V and 5.5V but must remain less than the voltage at MAIN when powered from MAIN. The MAX1800 EV kit is configured so that MAIN powers the LDO input; however, opening up the short across R33 and shorting R34 will allow LDO to be powered from IN.

## Setting the Flyback Circuit Voltages (OUT1\_ and OUT2\_)

A flyback circuit generates OUT1\_ and OUT2\_. This allows multiple, positive, or negative voltages to be generated by a single converter and allows the voltages to drop to 0V when the converter is disabled. The transformer must be designed for a given set of output voltages.

On the flyback circuits, only a single output voltage is used to regulate all the voltages.  All other voltages are controlled by the turns-ratio of the transformer. If another set of output voltages is required, a transformer with a different secondary turns-ratio must be used. Consult

## Table 2. Flyback Converter Feedback Resistors

| OUTPUT   | OUT1_   | OUT2_   |
|----------|---------|---------|
| OUT_A    | R13     | R14     |
| OUT_B    | R11     | R16     |
| OUT_C    | R12     | R15     |

the transformer manufacturer for details. Typically the highest power, positive voltage output of the flyback transformer is fed back to the controller. To change the regulated output voltage, use a different resistor in the voltage divider. Table 2 lists the resistors used for each output. Leave the resistors off (open) for unregulated outputs.

For a given output voltage, the resistor value (Table 2) is:

<!-- formula-not-decoded -->

## Setting the Step-Up Output Voltage (OUT3 and OUT4)

The output voltage of the step-up circuit voltages (OUT3 and OUT4) may be set to any voltage above 1.25V. Note that if the battery voltage is greater than the step-up regulation voltage, the output voltage will rise above the regulation voltage. To set the output voltage, choose the voltage divider resistors. For OUT3, choose:

<!-- formula-not-decoded -->

For OUT4, choose:

R24 = 80k Ω / V ✕ ( VOUT4 - 1.25V )

## Setting the Maximum Duty Cycle

DCON1, DCON2, and DCON3 set the maximum duty cycle for controllers 1, 2, and 3, respectively. A resistor divider from REF to DCON\_ sets the corresponding maximum duty cycle up to 90%. The EV kit has DCON\_ shorted to REF, producing a default duty cycle of 84%. See the MAX1800 data sheet for additional information.

## Setting the Switching Frequency

All  of  the  switching  regulators  are  synchronized  to  a single oscillator frequency. The oscillator capacitor (C2) is charged through R1 and discharged internally by the MAX1800. The EV kit is designed to operate at 440kHz with MAIN set to 3.3V. If a different MAIN voltage is used, or if a different oscillator frequency is desired, change resistor R1 or capacitor C2. Consult the MAX1800 data sheet for the correct values to use for R1 and C2.

## Logic Control of the Output Voltages

Each controller may be independently turned off or on using jumpers (JU1-JU6) or with logic voltages. To control an output using an external logic signal, remove the ON/OFF jumper for that output, and place the control  signal  on  the  corresponding  ON\_ pad. To enable the output, make sure that the voltage of the control signal at the corresponding ON\_ pad is &gt;1.6V. To disable it,  make sure the voltage at the corresponding ON\_ pad is &lt;0.3V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Also, note that the voltages at MAIN, OUT3, and OUT4 will  drop  slightly  below  the  battery  voltage  when  OFF, due to the DC current path through the inductor and output rectifier.  For  the  step-up  outputs,  a  switch  may be added between the output voltage and the load to disconnect them while the output is disabled.

## High Input Voltage Operation

The MAIN output is designed to operate with an input voltage above or below the output regulation voltage. Since MAIN is a step-up converter, when the input voltage is above the regulation voltage, the output will be nearly that of the input voltage. If the input battery voltage ranges above and below the regulation voltage, follow  the  MAIN output with the LDO output to form a step-up/step-down regulator. In this case, when the battery voltage is low, the step-up converter raises the battery voltage to the regulation voltage.  When the battery  voltage  is  above  the  regulation  voltage,  the  LDO regulator controls the output voltage.

For high input voltages, if the power is applied abruptly, the MAIN output capacitor charges quickly, causing the L2 inductor current to rise above the 2A current limit. To prevent damage to the MAX1800, diode D10 is used to charge main output capacitor C17, preventing excessive current in the inductor. Components R46, C24, and D9 delay turn-on of the MAIN converter when power is applied. This prevents damage to the switches caused by switching with excessive inductor current at turn-on. If the MAX1800 is used exclusively with low input voltage, components R46, C24, D9, and D10 may be omitted.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1800 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| AVX                     | 803-946-0690 | 803-626-3123 |
| Central Semiconductor   | 631-435-1110 | 631-435-1824 |
| Fairchild Semiconductor | 408-721-2181 | 408-721-1635 |
| Motorola                | 602-303-5454 | 602-994-6430 |
| Sumida                  | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 |
| TDK                     | 847-803-6100 | 847-803-6296 |

Note: Please indicate that you are using the MAX1800/ MAX1801 when contacting these suppliers.

## MAX1800 Evaluation Kit

Figure 1. MAX1800 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAXIM

<!-- image -->

Figure 2. MAX1800 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1800 EV Kit PC Board Layout-Inner Layer 2 (AGND)

<!-- image -->

## MAX1800 Evaluation Kit

Figure 3. MAX1800 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1800 EV Kit PC Board Layout-Inner Layer 3 (VCC)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1800 Evaluation Kit

Figure 6. MAX1800 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8