<!-- lastmod 2022-08-04 -->
<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX709 provides a system reset during power-up, power-down, and brownout conditions.  When V CC falls below the reset threshold, RESET goes low and holds the µP in reset for 140ms min after V CC rises above the threshold.

The RESET output is guaranteed to be in the correct state with V CC down to 1V.  The MAX709 provides excellent circuit  reliability  and  low  cost  by  eliminating external components and adjustments when used with +5V, +3.3V, or +3V powered systems.  The MAX709 is available 8-pin DIP, µMAX, and SO packages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Minimum Component Count, Low-Cost Processor Systems

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ +5V, +3.3V, and +3V Versions
- ♦ No External Components
- ♦ Low Cost
- ♦ Precise Power-Down Reset Threshold
- ♦ 140ms Min Power-On Reset Delay
- ♦ Immune to Short Negative V CC Transients
- ♦ 8-Pin DIP, µMAX, and SO Packages
- ♦ Low Supply Current: 35µA - MAX709R/S/T

65µA - MAX709L/M

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART       | TEMP. RANGE    | PIN-PACKAGE   |
|------------|----------------|---------------|
| MAX709_CPA | 0°C to +70°C   | 8 Plastic DIP |
| MAX709_CUA | 0°C to +70°C   | 8 µMAX        |
| MAX709_CSA | 0°C to +70°C   | 8 SO          |
| MAX709_C/D | 0°C to +70°C   | Dice          |
| MAX709_EPA | -40°C to +85°C | 8 Plastic DIP |
| MAX709_EUA | -40°C to +85°C | 8 µMAX        |
| MAX709_ESA | -40°C to +85°C | 8 SO          |

Devices are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering.

* Dice are specified at TA = +25°C, DC parameters only.

Note: This part offers a choice of five different reset threshold voltages.  Select the letter corresponding to the desired nominal reset threshold voltage, and insert it into the blank to complete the part number.

| RESET THRESHOLD   | RESET THRESHOLD   |
|-------------------|-------------------|
| SUFFIX            | VOLTAGE (V)       |
| L                 | 4.65              |
| M                 | 4.40              |
| T                 | 3.08              |
| S                 | 2.93              |
| R                 | 2.63              |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## MAX709

## Power-Supply Monitor with Reset

## ABSOLUTE MAXIMUM RATINGS

| Terminal Voltage (with respect to GND)                       | Terminal Voltage (with respect to GND)                |
|--------------------------------------------------------------|-------------------------------------------------------|
| V CC . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . . . . . . . . . . . . . . . . . . . . -0.3V to 6.0V |
| RESET....................................-0.3V               | to (V CC + 0.3V)                                      |
| Input Current, V CC                                          | ..........................................20mA        |
| Output Current, RESET                                        | .....................................20mA             |
| Rate-of-Rise, V CC                                           | .........................................100V/µs      |
| Continuous Power Dissipation (T A = +70°C)                   |                                                       |
| Plastic DIP (derate 9.09mW/°C above +70°C)                   | ........727mW                                         |
| µMAX (derate 4.10mW/°C above +70°C)                          | .............330mW                                    |
| SO (derate 5.88mW/°C above                                   | +70°C).................471mW                          |

| Operating Temperature Ranges   | Operating Temperature Ranges                    |
|--------------------------------|-------------------------------------------------|
| MAX709_C___                    | ...................................0°C to +70°C |
| MAX709_E___ .                  | ................................-40°C to +85°C  |
| Storage Temperature Range      | ..................-65°C to +160°C               |
| Lead Temperature (soldering,   | 10sec)....................+300°C                |

Stresses beyond those listed under 'Absolute Maximum Ratings" may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(V CC = full range, T A = T MIN to T MAX , unless otherwise noted.)

| PARAMETER                   | CONDITIONS                                                     |                                                                | MIN        | TYP        | MAX        | UNITS   |
|-----------------------------|----------------------------------------------------------------|----------------------------------------------------------------|------------|------------|------------|---------|
| V CC Range                  | MAX709_C                                                       | MAX709_C                                                       | 1.0        |            | 5.5        | V       |
| V CC Range                  | MAX709_E                                                       | MAX709_E                                                       | 1.2        |            | 5.5        | V       |
| Supply Current (Note 1)     | MAX709R/S/T only                                               | MAX709_C, V CC < 3.6V                                          |            | 35         | 85         | µA      |
| Supply Current (Note 1)     | MAX709R/S/T only                                               | MAX709_E, V CC < 3.6V                                          |            | 35         | 110        | µA      |
| Supply Current (Note 1)     | All versions                                                   | MAX709_C, V CC < 5.5V                                          |            | 65         | 150        | µA      |
| Supply Current (Note 1)     | All versions                                                   | MAX709_E, V CC < 5.5V                                          |            | 65         | 200        | µA      |
| RESET Threshold, V TH       | MAX709L                                                        | MAX709L                                                        | 4.50       | 4.65       | 4.75       | V       |
| RESET Threshold, V TH       | MAX709M                                                        | MAX709M                                                        | 4.25       | 4.40       | 4.50       | V       |
| RESET Threshold, V TH       | MAX709T                                                        | MAX709T                                                        | 3.00       | 3.08       | 3.15       | V       |
| RESET Threshold, V TH       | MAX709S                                                        | MAX709S                                                        | 2.85       | 2.93       | 3.00       | V       |
| RESET Threshold, V TH       | MAX709R                                                        | MAX709R                                                        | 2.55       | 2.63       | 2.70       | V       |
| V CC to RESET Delay         | V CC = reset threshold max to reset threshold min              | V CC = reset threshold max to reset threshold min              |            | 20         |            | µs      |
| Reset Active Timeout Period | V CC = reset threshold max, V CC rising                        | V CC = reset threshold max, V CC rising                        | 140        | 280        | 560        | ms      |
| RESET Output Voltage        | I SINK = 1.2mA, V CC = reset threshold min, MAX709R/S/T only   | I SINK = 1.2mA, V CC = reset threshold min, MAX709R/S/T only   |            |            | 0.3        | V       |
| RESET Output Voltage        | I SINK = 3.2mA, V CC = reset threshold min, MAX709L/M only     | I SINK = 3.2mA, V CC = reset threshold min, MAX709L/M only     |            |            | 0.4        | V       |
| RESET Output Voltage        | I SINK = 50µA, V CC ≥ 1.0V, MAX709_C                           | I SINK = 50µA, V CC ≥ 1.0V, MAX709_C                           |            |            | 0.3        | V       |
| RESET Output Voltage        | I SINK = 100µA, V CC ≥ 1.2V, MAX709_E                          | I SINK = 100µA, V CC ≥ 1.2V, MAX709_E                          |            |            | 0.4        | V       |
| RESET Output Voltage        | I SOURCE = 500µA, V CC ≥ reset threshold max, MAX709R/S/T only | I SOURCE = 500µA, V CC ≥ reset threshold max, MAX709R/S/T only | 0.8 x V CC | 0.8 x V CC | 0.8 x V CC | V       |
| RESET Output Voltage        | I SOURCE = 800µA, V CC ≥ reset threshold max, MAX709L/M only   | I SOURCE = 800µA, V CC ≥ reset threshold max, MAX709L/M only   | V CC - 1.5 | V CC - 1.5 | V CC - 1.5 | V       |

Note 1: Supply current is measured with V CC = 3.6V for MAX709R/S/T, and V CC = 5.5V for all versions.

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Power-Supply Monitor with Reset

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## Power-Supply Monitor with Reset

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN           | NAME   | FUNCTION                                                                                                                    |
|---------------|--------|-----------------------------------------------------------------------------------------------------------------------------|
| 1, 4, 5, 6, 8 | N.C.   | No Connect. There is no internal connection to this pin.                                                                    |
| 2             | V CC   | +5V, +3.3V, or +3V Supply Voltage                                                                                           |
| 3             | GND    | Ground                                                                                                                      |
| 7             | RESET  | Reset Output remains low while V CC is below the reset threshold, and for 280ms after V CC rises above the reset threshold. |

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Negative-Going V CC Transients

In  addition  to  issuing  a  reset  to  the  microprocessor (µP) during power-up, power-down, and brownout conditions, the MAX709 is relatively immune to short duration negative-going V CC transients (glitches).

Figure 1 shows typical transient duration vs. reset comparator overdrive, for which the MAX709 does not generate a reset pulse.  The graph was generated using a negative-going pulse applied to V CC , starting 1.5V above the actual reset threshold and ending below it by the magnitude indicated (reset comparator overdrive).  The graph indicates the typical maximum pulse width that a negative-going V CC transient may have without causing a reset pulse to be issued.  As the magnitude of the transient increases (goes farther below the reset threshold), the maximum allowable pulse width decreases. Typically, for the MAX709L/MAX709M, a V CC transient that goes 100mV below the reset threshold and lasts 40µs or less will not cause a reset pulse to be issued.

4

Figure 1. Maximum Transient Duration without Causing a Reset Pulse vs. Reset Comparator Overdrive

<!-- image -->

A 0.1µF bypass capacitor mounted as close as possible to pin 2 (V CC ) provides additional transient immunity.

## Ensuring a Valid RESET Output Down to V CC = 0V

When V CC falls  below  1V,  the  MAX709  RESET output no longer sinks current-it becomes an open circuit. Therefore, high-impedance CMOS logic inputs connected to the RESET output can drift to undermined voltages.  This presents no problem in most applications,  since  most  µP  and  other  circuitry  is  inoperative with V CC below 1V.  However, in applications where the RESET output must be valid down to 0V, adding a pulldown resistor to the RESET pin will cause any stray leakage currents to flow to ground, holding RESET low (see Figure 2).  The resistance value of R1 is not critical.  It should be about 100k Ω , which is large enough not to load RESET and small enough to pull RESET to ground.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Power-Supply Monitor with Reset

Figure 2. RESET Valid to V CC = Ground Circuit

<!-- image -->

<!-- image -->

## Interfacing to µPs with Bidirectional Reset Pins

Microprocessors with bidirectional reset pins (such as the Motorola 68HC11 series) can contend with the MAX709 reset output.  If, for example the MAX709 RESET output is asserted high and the µP wants to pull it low, indeterminate logic levels may result.  To correct this,  connect a 4.7k Ω resistor  between the MAX709 RESET output and the µP reset I/O (see Figure 3). Buffer the MAX709 RESET output to other system components.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. Interfacing to µPs with Bidirectional Reset I/O

## Power-Supply Monitor with Reset

|                  |                             |                                |                                       |                        |                    |                          | _____________________________________________________µP Supervisory   | _____________________________________________________µP Supervisory   | _____________________________________________________µP Supervisory   | _____________________________________________________µP Supervisory   | _____________________________________________________µP Supervisory   |
|------------------|-----------------------------|--------------------------------|---------------------------------------|------------------------|--------------------|--------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|
| Part Number      | Nominal Reset Threshold (V) | Minimum Reset Pulse Width (ms) | Nominal Watchdog Timeout Period (sec) | Backup- Battery Switch | CE - Write Protect | Power- Fail Com- parator | Manual- Reset Input                                                   | Watch- dog Output                                                     | Low- Line Output                                                      | Active- High Reset                                                    | Battery- On Output                                                    |
| MAX690A/692A     | 4.65/4.40                   | 140                            | 1.6                                   | ✔                      |                    | ✔                        |                                                                       |                                                                       |                                                                       |                                                                       |                                                                       |
| MAX691A/693A     | 4.65/4.40                   | 140/adj.                       | 1.6/adj.                              | ✔                      | ✔ /10ns            | ✔                        |                                                                       | ✔                                                                     | ✔                                                                     | ✔                                                                     | ✔                                                                     |
| MAX696           | Adj.                        | 35/adj.                        | 1.6/adj.                              | ✔                      |                    | ✔                        |                                                                       | ✔                                                                     | ✔                                                                     | ✔                                                                     | ✔                                                                     |
| MAX697           | Adj.                        | 35/adj.                        | 1.6/adj.                              |                        | ✔                  | ✔                        |                                                                       | ✔                                                                     | ✔                                                                     | ✔                                                                     |                                                                       |
| MAX700           | 4.65/adj.                   | 200                            | -                                     |                        |                    |                          | ✔                                                                     |                                                                       |                                                                       | ✔                                                                     |                                                                       |
| MAX703/704       | 4.65/4.40                   | 140                            | -                                     | ✔                      |                    | ✔                        | ✔                                                                     |                                                                       |                                                                       |                                                                       |                                                                       |
| MAX705/706       | 4.65/4.40                   | 140                            | 1.6                                   |                        |                    | ✔                        | ✔                                                                     | ✔                                                                     |                                                                       |                                                                       |                                                                       |
| MAX706P          | 2.63                        | 140                            | 1.6                                   |                        |                    | ✔                        | ✔                                                                     | ✔                                                                     |                                                                       | ✔                                                                     |                                                                       |
| MAX706R/S/T      | 2.63/2.93/ 3.08             | 140                            | 1.6                                   |                        |                    | ✔                        | ✔                                                                     | ✔                                                                     |                                                                       |                                                                       |                                                                       |
| MAX707/708       | 4.65/4.40                   | 140                            | -                                     |                        |                    | ✔                        | ✔                                                                     |                                                                       |                                                                       | ✔                                                                     |                                                                       |
| MAX708R/S/T      | 2.63/2.93/ 3.08             | 140                            | -                                     |                        |                    | ✔                        | ✔                                                                     |                                                                       |                                                                       | ✔                                                                     |                                                                       |
| MAX709L/M/ R/S/T | 4.65/4.40/ 2.63/2.93/3.08   | 140                            | -                                     |                        |                    |                          |                                                                       |                                                                       |                                                                       |                                                                       |                                                                       |
| MAX791           | 4.65                        | 140                            | 1                                     | ✔                      | ✔ /10ns            | ✔                        | ✔                                                                     | ✔                                                                     | ✔                                                                     | ✔                                                                     | ✔                                                                     |
| MAX792L/M/ R/S/T | 4.65/4.40/ 2.63/2.93/3.08   | 140                            | 1                                     |                        | ✔ /10ns            | ✔                        | ✔                                                                     | ✔                                                                     | ✔                                                                     | ✔                                                                     |                                                                       |
| MAX800L/M        | 4.60/4.40                   | 140                            | 1.6/adj.                              | ✔                      | ✔ /10ns            | ✔ /±2%                   |                                                                       | ✔                                                                     | ✔                                                                     | ✔                                                                     | ✔                                                                     |
| MAX802L/M        | 4.60/4.40                   | 140                            | 1.6                                   | ✔                      |                    | ✔ /±2%                   |                                                                       |                                                                       |                                                                       |                                                                       |                                                                       |
| MAX805L          | 4.65                        | 140                            | 1.6                                   | ✔                      |                    | ✔                        |                                                                       |                                                                       |                                                                       | ✔                                                                     |                                                                       |
| MAX813L          | 4.65                        | 140                            | 1.6                                   |                        |                    | ✔                        | ✔                                                                     | ✔                                                                     |                                                                       | ✔                                                                     |                                                                       |
| MAX820L/M/ R/S/T | 4.65/4.40/ 2.63/2.93/3.08   | 140                            | 1                                     |                        | ✔ /10ns            | ✔ /±2%                   | ✔                                                                     | ✔                                                                     | ✔                                                                     | ✔                                                                     |                                                                       |
| MAX1232          | 4.37/4.62                   | 250                            | 0.15/0.60/1.2                         |                        |                    |                          | ✔                                                                     |                                                                       |                                                                       |                                                                       |                                                                       |
| MAX1259          | -                           | -                              | -                                     | ✔                      |                    | ✔                        |                                                                       |                                                                       |                                                                       |                                                                       |                                                                       |

## 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Power-Supply Monitor with Reset

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Topography

<!-- image -->

TRANSISTOR COUNT:  380

SUBSTRATE CONNECTED TO VCC

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7

## Power-Supply Monitor with Reset

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit  patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600