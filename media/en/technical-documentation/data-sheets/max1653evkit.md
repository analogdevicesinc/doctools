<!-- lastmod 2022-08-02 -->
## General Description

The MAX1653 evaluation kit (EV kit) provides a +3.3V output voltage from a +4.5V to +28V input. It delivers up to 2A output current with greater than 95% efficiency, operates at 300kHz switching frequency, and has superior line- and load-transient response.

This EV kit can be used to evaluate other output voltages in the +2.5V to +5.5V range by changing feedback resistors R2 and R3. It can also be used to evaluate the MAX1655, which has a +1.0V to +5.5V output voltage range.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1            |     1 | 22µF, 35V, low-ESR tantalum capacitor AVX TPSE226M035R0300 or Sprague 593D226X0035E2W  |
| C2, C4        |     1 | 0.1µF ceramic capacitor                                                                |
| C3            |     1 | 4.7µF, 16V tantalum capacitor Sprague 595D475X0016A2T                                  |
| C5            |     1 | 0.33µF ceramic capacitor                                                               |
| C6            |     1 | 0.01µF ceramic capacitor                                                               |
| C7            |     1 | 220µF, 10V, low-ESR tantalum capacitor AVX TPSE227M010R0100 or Sprague 594D227X0010D2T |
| D1            |     1 | 100mA, 30V Schottky diode Central Semiconductor CMPSH-3                                |
| D2            |     1 | 0.5A, 30V Schottky diode Motorola MBR0530                                              |
| L1            |     1 | 15µH inductor Sumida CDRH104-150, or Coiltronics UP2B-150, or Coilcraft D03316P-153    |
| N1            |     1 | Dual, 30V, N-channel MOSFET International Rectifier IRF 7303 or Fairchild NDS8936      |
| R1            |     1 | 0.033 Ω , 1%, 1/2W resistor (2010) Dale WSL-2010-R033-F or IRC LR2010-R033-F           |
| R2            |     0 | Not installed                                                                          |
| R3            |     1 | 100k Ω , 1% resistor                                                                   |
| U1            |     1 | MAX1653EEE                                                                             |
| JU1-JU4       |     4 | 3-pin headers                                                                          |
| None          |     4 | Shunts                                                                                 |
| None          |     1 | MAX1653 PC board                                                                       |
| None          |     1 | MAX1652-MAX1655 data sheet                                                             |

<!-- image -->

Features

- ' +4.5V to +28V Input Voltage Range
- ' Selectable +3.3V or +5V Output Voltage
- ' +2.5V to +5.5V Adjustable Output (MAX1653) +1.0V to +5.5V Adjustable Output (MAX1655)
- ' 2A Output Current
- ' 3µA IC Shutdown Current
- ' 300kHz Switching Frequency
- ' Surface-Mount Construction
- ' Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | PIN-PACKAGE   |
|--------------|---------------|---------------|
| MAX1653EVKIT | 0°C to +70°C  | 16 QSOP       |

Note: To evaluate the MAX1655, request a MAX1655EEE free sample when ordering the MAX1653EVKIT.

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| AVX                     | 803-946-0690 | 803-626-3123 |
| Central Semiconductor   | 516-435-1110 | 516-435-1824 |
| Coilcraft               | 708-639-6400 | 708-639-1469 |
| Coiltronics             | 561-241-7876 | 561-241-9339 |
| Dale-Vishay             | 402-564-3131 | 402-563-6418 |
| Fairchild               | 408-822-2000 | 408-822-2102 |
| International Rectifier | 310-322-3331 | 310-322-3332 |
| IRC                     | 512-992-7900 | 512-992-3377 |
| Motorola                | 602-303-5454 | 602-994-6430 |
| Sprague                 | 603-224-1961 | 603-224-1430 |
| Sumida                  | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 |
| Vishay/Vitramon         | 203-268-6261 | 203-452-5670 |

Note: Please indicate that you are using the MAX1653 when contacting these component suppliers.

## Quick Start

The MAX1653V kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +4.5V to +28V supply voltage to the VIN pad. Connect ground to the GND pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800 For small orders, phone 408-737-7600 ext. 3468.

## MAX1653 Evaluation Kit

- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Verify that the shunts are across JU1 pins 2 and 3, JU2 pins 1 and 2, JU3 pins 1 and 2, and JU4 pins 2 and 3.
- 4) Turn on the power supply to the board. Verify that the output voltage is +3.3V. For a +5V output, remove the shunt from JU3 pins 1 and 2 and place it across JU3 pins 2 and 3.
- 5) Refer to the Evaluating Other Output Voltages section  to  modify  the  board  for  different  output  voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX1653 provides a +3.3V output from a +4.5V to +28V input voltage. It delivers up to 2A output current and operates at 300kHz. Other output voltages can be programmed by feedback resistors R2 and R3. The MAX1653 EV kit uses a two-layer PC board optimized for compact design and best performance. Refer to the Board Layout Considerations section in the MAX1652MAX1655 data sheet.

The EV kit's components are selected for 300kHz operation. To operate at other frequencies, component values might need to be changed (refer to the Design Procedure section in the MAX1652-MAX1655 data sheet). The oscillator can be synchronized to an external clock signal by driving the SYNC pad with a pulse train of 5V amplitude in the 190kHz to 340kHz frequency range. The 3-pin header JU4 selects either 150kHz or 300kHz switching frequency. Table 4 lists the selectable jumper options.

## Evaluating Other Output Voltages

To generate output voltages other than +3.3V or +5V in the  +2.5V to +5.5V range, remove the shunt from the JU3 pins, and select the external voltage-divider resistors R2 and R3. Refer to the Setting the Output Voltage section in the MAX1652-MAX1655 data sheet for instructions on calculating R2 and R3 values. A 100k Ω , 1% resistor is provided at the R3 location to prevent the feedback pin (FB) from floating if no shunt is installed on JU3.

## Evaluating the MAX1655

To generate output voltages in the +1.0V to +5.5V range, replace the MAX1653 with the MAX1655, remove the shunt from the JU3 pins, and select the external voltage-divider resistors R2 and R3. Refer to the Setting the Output Voltage section in the MAX1652MAX1655 data sheet for instructions on calculating R2 and R3 values.

For high-input-voltage and low-output-voltage combinations, you may need to operate at 150kHz with appropriate component changes (see the Duty-Factor Limitation section in the MAX1652-MAX1655 data sheet).

Table 1. Jumper JU1 (Shutdown)

| SHUNT LOCATION   | SHDN PIN         | MAX1653 OUTPUT                       |
|------------------|------------------|--------------------------------------|
| 1 and 2          | Connected to GND | Shutdown mode, VOUT = 0V             |
| 2 and 3          | Connected to VIN | MAX1653 enabled, VOUT = +3.3V or +5V |

## Table 2. Jumper JU2 (Skip Mode)

| SHUNT LOCATION   | SKIP PIN         | MODE OF OPERATION                                                       |
|------------------|------------------|-------------------------------------------------------------------------|
| 1 and 2          | Connected to GND | Idle mode, pulse-skip- ping operation for highest light-load efficiency |
| 2 and 3          | Connected to VL  | Low-noise mode, fixed 300kHz frequency PWM operation                    |

## Table 3. Jumper JU3 (Output Voltage)

| SHUNT LOCATION   | FB PIN                                    | MAX1653 OUTPUT                          |
|------------------|-------------------------------------------|-----------------------------------------|
| 1 and 2          | Connected to GND                          | V OUT = +3.3V                           |
| 2 and 3          | Connected to VL                           | V OUT = +5V                             |
| Not installed    | Connected to feedback resistors R2 and R3 | V OUT = adjustable +2.5V to +5.5V range |

## Table 4. Jumper JU4 (Switching Frequency)

| SHUNT LOCATION   | SYNC PIN         | FREQUENCY (kHz)   |
|------------------|------------------|-------------------|
| 1 and 2          | Connected to GND | 150               |
| 2 and 3          | Connected to REF | 300               |
| Not installed    | Drive externally | 190 to 340        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 1. MAX1653 EV Kit Schematic

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1653 Evaluation Kit

<!-- image -->

Figure 2.  MAX1653 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX1653 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX1653 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600