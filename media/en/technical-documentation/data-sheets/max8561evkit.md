<!-- lastmod 2022-08-02 -->
## General Description

The MAX8561 evaluation kit (EV kit) demonstrates the MAX8561/MAX8562s' up to 4MHz pulse-width modulated (PWM) step-down DC-DC converters. The two circuits are optimized for powering the DSP/microprocessor or the power amplifiers (PAs) in wireless applications. The MAX8561 circuit provides two adjustable output voltages in the 0.6V to 2.5V range from a 2.7V to 5.5V input, and can deliver 500mA of load current. In comparison, the MAX8562 circuit provides an adjustable voltage in the 0.6V to 2.5V range and a bypass mode where the output voltage is shorted to the input by an external MOSFET.

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE             |
|--------------|------------------|------------------------|
| MAX8561EVKIT | 0 ° C to +70 ° C | 8 Thin DFN (3mm x 3mm) |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1, C4        |     2 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475K                              |
| C2, C5        |     2 | 2.2µF ±10%, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107BJ225KA or TDK C1608X5R0J225K |
| C3            |     1 | 150pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H151JT or equivalent                  |
| C6            |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H101JT or equivalent                  |
| JU1-JU4       |     4 | 3-pin headers                                                                                  |
| L1            |     1 | 2.2µH inductor Murata LQH32CN2R2M51                                                            |

<!-- image -->

## Features

- ♦ 2.7V to 5.5V Input Voltage Range
- ♦ 0.6V to 2.5V Adjustable Output Voltage Range
- ♦ VOUT1 = 1.8V/1.5V at 500mA (MAX8561)
- ♦ VOUT2 = 1.2V at 400mA or Bypass Mode (MAX8562)
- ♦ 2MHz PWM Switching Frequency (MAX8561)
- ♦ 4MHz PWM Switching Frequency (MAX8562)
- ♦ 0.1µA (typ) Shutdown Current
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| L2            |     1 | 1.0µH inductor (0806) Taiyo Yuden LB2016B1R0M          |
| P1            |     1 | P-channel MOSFET (SC70) Vishay Si1417EDH (top mark BB) |
| R1            |     1 | 150k Ω ±1% resistor (0603)                             |
| R2            |     1 | 301k Ω ±1% resistor (0603)                             |
| R3, R4, R5    |     3 | 100k Ω ±1% resistors (0603)                            |
| U1            |     1 | MAX8561ETA (8-pin thin DFN 3mm x 3mm) top mark AHD     |
| U2            |     1 | MAX8562ETA (8-pin thin DFN 3mm x 3mm) top mark AHE     |
| U3            |     0 | Not installed                                          |
| None          |     4 | Shunts                                                 |
| None          |     1 | MAX8561/MAX8562 PC board                               |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay      | 203-268-6261 | 203-452-5670 | www.vishay.com        |

Please indicate that you are using the MAX8561/MAX8562 when contacting these component suppliers.

Note:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX8561 Evaluation Kit

## Quick Start

The MAX8561 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is connected across pins 1 and 2 of jumper JU1/JU3 (output enabled).
- 2) Verify that a shunt is connected across pins 2 and 3 of jumper JU2/JU4.
- 3) Connect a voltmeter across the VOUT1/VOUT2 and the  GND1/GND2  pads  to  monitor  the  output voltage(s).
- 4) Connect a 2.7V to 5.5V power supply to the BATT1/BATT2 pad. Connect the power-supply ground terminal to the GND1/GND2 pad.
- 5) Turn on the power supply and verify that VOUT1 = 1.5V/VOUT2 = 1.2V.

## Detailed Description

The MAX8561 EV kit circuit board demonstrates both the MAX8561 (upper circuit) and the MAX8562 (lower circuit). The MAX8561 circuit is optimized for DSP or microprocessor application, and its switching frequency is set at  approximately 2MHz. The MAX8562 circuit is optimized to power the PA in wireless applications, and its switching frequency is set to 4MHz. The EV kit requires a power supply in the 2.7V to 5.5V range. The EV kit board features jumpers that enable the user to configure the shutdown mode and open-drain output control.

## Shutdown Mode

The EV kit contains jumpers JU1 and JU3 to allow the user to switch the MAX8561 and MAX8562 converters from enable to shutdown mode. Shutdown mode reduces the supply current to 0.1µA (typ) and sets the output voltage to 0V. See Table 1 for JU1 and JU3 configurations.

## Open-Drain Control

Jumper JU2 allows the user to set VOUT1 at either 1.8V or 1.5V. Jumper JU4 allows the user to enable the converter to regulate at 1.2V or set the output voltage VOUT2 to equal the input voltage BATT2 under the bypass mode. See Table 2 for JU2 and JU4 configurations.

## Evaluating Other Voltage Outputs

The MAX8561 EV kit circuit board comes with two independent circuits, the MAX8561 (upper circuit) and the MAX8562 (lower circuit). The MAX8561 circuit can provide two adjustable output voltages, and the EV kit default voltages of VOUT1 are set at 1.8V and 1.5V. To evaluate other voltages at VOUT1, use 150k Ω at R1, and calculate R2 and R3 using the following two equations:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where VFB = 0.6V and VOUT1(HIGH) and VOUT1(LOW) are the two desired output voltages.

The EV kit default output voltage of VOUT2 is set at 1.2V. To evaluate other voltage outputs on the MAX8562 circuit, keep R4 as 100k Ω . Then R5 is given by:

<!-- formula-not-decoded -->

where VFB = 0.6V and VOUT2 is the desired output voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8561 Evaluation Kit

Table 1. Jumpers JU1 and JU3 Functions ( SHDN )

| JU1/JU3 SHUNT LOCATION   | SHDN PIN              | MAX8561/MAX8562 OUTPUT                                                                     |
|--------------------------|-----------------------|--------------------------------------------------------------------------------------------|
| Pins 1 and 2             | Connected to BATT_    | Output enabled                                                                             |
| Pins 2 and 3             | Connected to GND      | Output disabled                                                                            |
| None                     | Connected to SHDN pad | Output controlled by the user (user-supplied control signal must be connected to SHDN pad) |

Table 2. Jumpers JU2 and JU4 Functions (ODI1/ODI2)

| JU2/JU4 SHUNT LOCATION   | ODI1/ODI2 PIN              | MAX8561 OUTPUT                                                                              | MAX8562 OUTPUT                                                                              |
|--------------------------|----------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Pins 1 and 2             | Connected to VIN           | VOUT1 = 1.8V                                                                                | VOUT2 = BATT2                                                                               |
| Pins 2 and 3             | Connected to GND           | VOUT1 = 1.5V                                                                                | VOUT2 = 1.2V                                                                                |
| None                     | Connected to ODI1/ODI2 pad | Output controlled by the user (user- supplied control signal must be connected to ODI1 pad) | Output controlled by the user (user- supplied control signal must be connected to ODI2 pad) |

Table 3. Recommended R2 and R3 Values for Typical Dynamic Output Voltages

| MAX8561 OUTPUTS   | MAX8561 OUTPUTS   |   R2 VALUE (k Ω ) |   R3 VALUE (k Ω ) |
|-------------------|-------------------|-------------------|-------------------|
| VOUT1 LOW (V)     | VOUT1 HIGH (V)    |                   |                   |
| 0.9               | 1.3               |               226 |               301 |
| 1.1               | 1.3               |               432 |               182 |
| 0.9               | 1.5               |               150 |               301 |
| 1.1               | 1.5               |               221 |               182 |
| 1.2               | 1.5               |               301 |               150 |

Note:

R1 = 150k Ω , L1 = 2.2µH, and C3 = 150pF.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8561 Evaluation Kit

Figure 1. MAX8561 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX8561 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8561 Evaluation Kit

Figure 3. MAX8561 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX8561/MAX8562

## MAX8561 Evaluation Kit

Figure 4. MAX8561 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600