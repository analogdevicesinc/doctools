<!-- lastmod 2022-10-10 -->
<!-- image -->

## 4-Pin µP Voltage Monitors with Pin-Selectable Power-On Reset Timeout Delay

## General Description

The MAX821/MAX822 microprocessor (µP) supervisory circuits  monitor  power  supplies in µP and digital systems. They provide excellent circuit reliability and low cost by eliminating external components and adjustments when used with 5V-powered or 3V-powered circuits.  The  MAX821/MAX822 also provide a power-on reset timeout delay that is pin selectable to 1ms (max), 20ms (min), or 100ms (min).

These devices perform a single function: they assert a reset signal whenever the VCC supply voltage falls below a preset threshold, and they keep reset asserted for  the  pin-selected  reset  timeout  delay  after  VCC has risen above the reset threshold. The only difference between the two devices is that the MAX821 has an active-low RESET output (which is guaranteed to be in the correct state for VCC down to 1V), while the MAX822 has an active-high RESET output. The reset comparator is designed to ignore fast transients on VCC. Reset thresholds suitable for operation with a variety of supply voltages are available.

Low supply current makes the MAX821/MAX822 ideal for use in portable equipment. These devices come in a 4-pin SOT143 package.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Bar-Code Scanners

Computers

Controllers

Intelligent Instruments

Critical µP and µC Power Monitoring

Portable/Battery-Powered Equipment

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

## MAXIM

## Features

- ♦ Pin-Selectable, Precision Power-On Reset Delay: 1ms (max), 20ms (min), or 100ms (min)
- ♦ Precision Monitoring of +3V to +5V Power-Supply Voltages
- ♦ 2.5µA Supply Current
- ♦ Guaranteed Over Temperature (-40°C to +125°C)
- ♦ Guaranteed RESET Valid to VCC = 1V (MAX821)
- ♦ Power-Supply Transient Immunity
- ♦ No External Components
- ♦ SOT143 Package

## Ordering Information

| PART         |   NOMINAL V TH (V) | TOP MARK*   |
|--------------|--------------------|-------------|
| MAX821 LUS-T |               4.63 | AZ_ _       |
| MAX821MUS-T  |               4.38 | BA_ _       |
| MAX821PUS-T  |               4.00 | BM_ _       |
| MAX821TUS-T  |               3.08 | BB_ _       |
| MAX821SUS-T  |               2.93 | BC_ _       |
| MAX821UUS-T  |               2.78 | BL_ _       |
| MAX821RUS-T  |               2.63 | BD_ _       |
| MAX822 LUS-T |               4.63 | BF_ _       |
| MAX822MUS-T  |               4.38 | BG_ _       |
| MAX822TUS-T  |               3.08 | BH_ _       |
| MAX822SUS-T  |               2.93 | BJ_ _       |
| MAX822RUS-T  |               2.63 | BK_ _       |

## Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## 4-Pin µP Voltage Monitors with Pin-Selectable Power-On Reset Timeout Delay

## ABSOLUTE MAXIMUM RATINGS

Terminal Voltage (with respect to GND)

VCC ......................................................................-0.3V to 6.0V

All Other Inputs.......................................-0.3V to (V CC + 0.3V)

Input Current, VCC, SRT......................................................20mA

Output Current, RESET or RESET

.......................................20mA

Continuous Power Dissipation (TA = +70°C)

SOT143-4 (derate 4mW/°C above +70°C)...................320mW

Operating Temperature Range .........................-40°C to +125°C

Storage Temperature Range.............................-65°C to +160°C

Lead Temperature (soldering, 10sec) .............................+300°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = full range, TA = -40°C to +125°C, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                    | SYMBOL   | CONDITIONS                                      | CONDITIONS            | MIN     | TYP     | MAX      | UNITS   |
|------------------------------|----------|-------------------------------------------------|-----------------------|---------|---------|----------|---------|
| V CC Range                   |          | T A = 0°C to +70°C                              | T A = 0°C to +70°C    | 1.0     |         | 5.5      | V       |
| V CC Range                   |          | T A = -40°C to +85°C                            | T A = -40°C to +85°C  | 1.2     |         | 5.5      | V       |
| Supply Current               | I CC     | MAX82_L/M/P,                                    | T A = +25°C           |         | 2.5     | 7.0      | µA      |
| Supply Current               | I CC     | V CC = 5.5V, I OUT = 0                          | T A = T MIN to T MAX  |         |         | 12       | µA      |
| Supply Current               | I CC     | MAX82_R/S/T/U, V CC = 5.5V, I OUT = 0           | T A = +25°C           |         | 1.8     | 5.5      | µA      |
| Supply Current               | I CC     | MAX82_R/S/T/U, V CC = 5.5V, I OUT = 0           | T A = T MIN to T MAX  |         |         | 9        | µA      |
| Reset Threshold (Note 1)     | V TH     | MAX82_L                                         | T A = +25°C           | 4.56    | 4.63    | 4.70     | V       |
| Reset Threshold (Note 1)     | V TH     | MAX82_L                                         | T A = -40°C to +125°C | 4.50    |         | 4.75     | V       |
| Reset Threshold (Note 1)     | V TH     | MAX82_M                                         | T A = +25°C           | 4.31    | 4.38    | 4.45     | V       |
| Reset Threshold (Note 1)     | V TH     | MAX82_M                                         | T A = -40°C to +125°C | 4.25    |         | 4.50     | V       |
| Reset Threshold (Note 1)     | V TH     | MAX82_P                                         | T A = +25°C           | 3.97    | 4.00    | 4.04     |         |
| Reset Threshold (Note 1)     | V TH     | MAX82_P                                         | T A = -40°C to +125°C | 3.91    |         | 4.09     |         |
| Reset Threshold (Note 1)     | V TH     | MAX82_T                                         | T A = +25°C           | 3.04    | 3.08    | 3.11     |         |
| Reset Threshold (Note 1)     | V TH     | MAX82_T                                         | T A = -40°C to +125°C | 3.00    |         | 3.15     |         |
| Reset Threshold (Note 1)     | V TH     | MAX82_S                                         | T A = +25°C           | 2.89    | 2.93    | 2.96     |         |
| Reset Threshold (Note 1)     | V TH     | MAX82_S                                         | T A = -40°C to +125°C | 2.85    |         | 3.00     |         |
| Reset Threshold (Note 1)     | V TH     | MAX82_U                                         | T A = +25°C           | 2.74    | 2.78    | 2.81     |         |
| Reset Threshold (Note 1)     | V TH     | MAX82_U                                         | T A = -40°C to +125°C | 2.70    |         | 2.85     |         |
| Reset Threshold (Note 1)     | V TH     | MAX82_R                                         | T A = +25°C           | 2.59    | 2.63    | 2.66     |         |
| Reset Threshold (Note 1)     | V TH     | MAX82_R                                         | T A = -40°C to +125°C | 2.55    |         | 2.70     |         |
| Reset Threshold Tempco       |          |                                                 |                       |         | 30      |          | ppm/°C  |
| V CC to Reset Delay (Note 1) |          | V CC falling at 1mV/µs                          |                       |         | 50      |          | µs      |
| Reset Active Timeout Period  | t RP     | SRT = GND                                       |                       | 0.5     | 0.8     | 1        | ms      |
| Reset Active Timeout Period  | t RP     | SRT = V CC                                      |                       | 20      | 32      | 40       | ms      |
| Reset Active Timeout Period  | t RP     | SRT = unconnected                               |                       | 100     | 160     | 200      | ms      |
| SRT Input Current (Note 2)   |          | RESET = low for MAX821, RESET = high for MAX822 | SRT = GND             | -100    |         |          | µA      |
| SRT Input Current (Note 2)   |          | RESET = low for MAX821, RESET = high for MAX822 | SRT = V CC            |         |         | 100      | µA      |
| SRT Input Current (Note 2)   |          | RESET = low for MAX821, RESET = high for MAX822 | SRT = unconnected     | -1      |         | 1        | µA      |
| SRT Input Threshold          | V IL     |                                                 |                       |         |         | 0.07V CC | V       |
| SRT Input Threshold          | V IH     | RESET = low for MAX821, RESET = high for MAX822 |                       | 0.9V CC |         |          | V       |
| SRT Input Threshold          | V OPEN   |                                                 |                       |         | 0.5V CC |          | V       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 4-Pin µP Voltage Monitors with Pin-Selectable Power-On Reset Timeout Delay

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = full range, TA = -40°C to +125°C, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                                                    | SYMBOL   | CONDITIONS                                             |                                                        | MIN       | TYP       | MAX       | UNITS   |
|------------------------------------------------------------------------------|----------|--------------------------------------------------------|--------------------------------------------------------|-----------|-----------|-----------|---------|
| SRT Input Capacitance (Note 3) (see Setting the Reset Timeout Delay section) |          | Internal                                               |                                                        |           |           | 20        | pF      |
| RESET Output Voltage (MAX821)                                                | V OL     | MAX821L/M/P only, I SINK = 3.2mA, V CC = V TH(MIN)     | MAX821L/M/P only, I SINK = 3.2mA, V CC = V TH(MIN)     |           |           | 0.4       | V       |
| RESET Output Voltage (MAX821)                                                | V OL     | MAX821R/S/T/U only, I SINK = 1.2mA, V CC = V TH(MIN)   | MAX821R/S/T/U only, I SINK = 1.2mA, V CC = V TH(MIN)   |           |           | 0.3       | V       |
| RESET Output Voltage (MAX821)                                                | V OL     | I SINK = 50µA                                          | T A = 0°C to +70°C, V CC ≥ 1V                          |           |           | 0.3       | V       |
| RESET Output Voltage (MAX821)                                                | V OL     | I SINK = 50µA                                          | T A = -40°C to +85°C, V CC ≥ 1.2V                      |           |           | 0.3       | V       |
| RESET Output Voltage (MAX821)                                                | V OH     | MAX821L/M/P only, I SOURCE = 800µA, V CC ≥ V TH(MAX)   | MAX821L/M/P only, I SOURCE = 800µA, V CC ≥ V TH(MAX)   | V CC -1.5 | V CC -1.5 | V CC -1.5 | V       |
| RESET Output Voltage (MAX821)                                                | V OH     | MAX821R/S/T/U only, I SOURCE = 500µA, V CC ≥ V TH(MAX) | MAX821R/S/T/U only, I SOURCE = 500µA, V CC ≥ V TH(MAX) | 0.8V CC   | 0.8V CC   | 0.8V CC   | V       |
| RESET Output Voltage (MAX822)                                                | V OL     | MAX822L/M only, I SINK = 3.2mA, V CC = VTH(MAX)        | MAX822L/M only, I SINK = 3.2mA, V CC = VTH(MAX)        |           |           | 0.4       | V       |
| RESET Output Voltage (MAX822)                                                | V OL     | MAX822R/S/T only, I SINK = 1.2mA, V CC = V TH(MAX)     | MAX822R/S/T only, I SINK = 1.2mA, V CC = V TH(MAX)     |           |           | 0.3       | V       |
| RESET Output Voltage (MAX822)                                                | V OH     | I SOURCE = 150µA, 1.4V ≤ V CC ≤ V TH(MIN)              | I SOURCE = 150µA, 1.4V ≤ V CC ≤ V TH(MIN)              | 0.8V CC   | 0.8V CC   | 0.8V CC   | V       |

Note 1: RESET output for MAX821; RESET output for MAX822.

Note 2: During reset active timeout period only.

Note 3: Guaranteed by design.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(TA = +25°C, unless otherwise noted.)

MAXIM

<!-- image -->

## 4-Pin µP Voltage Monitors with Pin-Selectable Power-On Reset Timeout Delay

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(TA = +25°C, unless otherwise noted.)

MAX82\_R/S/T POWER-DOWN RESET DELAY vs. TEMPERATURE

<!-- image -->

<!-- image -->

<!-- image -->

MAX82\_L/M POWER-DOWN RESET DELAY vs. TEMPERATURE

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN    | PIN    | NAME   | FUNCTION                                                                                                                                                                                                                        |
|--------|--------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX821 | MAX822 | NAME   | FUNCTION                                                                                                                                                                                                                        |
| 1      | 1      | GND    | Ground                                                                                                                                                                                                                          |
| 2      | -      | RESET  | Active-Low Reset Output. RESET is low while V CC is below the reset threshold. It remains low for the reset timeout period after the reset condition is terminated. The reset timeout period is determined by the SRT input.    |
| -      | 2      | RESET  | Active-High Reset Output. RESET is high while V CC is below the reset threshold. It remains high for the reset timeout period after the reset condition is terminated. The reset timeout period is determined by the SRT input. |
| 3      | 3      | SRT    | Set Reset Timeout Input. Connect to GND for 1ms (max) delay; connect to V CC for 20ms (min) delay; leave unconnected for 100ms (min) delay.                                                                                     |
| 4      | 4      | V CC   | Supply Voltage                                                                                                                                                                                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 4-Pin µP Voltage Monitors with Pin-Selectable Power-On Reset Timeout Delay

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Reset Output

A microprocessor's (µP's) reset input starts the µP in a known state. These µ P supervisory circuits assert reset to  prevent code-execution errors during power-up, power-down, or brownout conditions. They also provide a reset timeout delay that is pin programmable to 1ms (max), 20ms (min), or 100ms (min). This feature allows flexibility  in  designing  bar-code  scanners,  hand-held devices, and other applications that require quick or nonstandard power-up times.

The MAX821's RESET output is guaranteed to be a logic  low  for  VCC &gt; 1V. Once VCC exceeds the reset threshold, an internal timer keeps RESET low for the reset timeout period, as determined by the Set Reset Timeout (SRT) input. See the Setting the Reset Timeout Delay section.

If  a  brownout  condition occurs (VCC dips below the reset threshold), RESET goes low. Any time VCC goes below the reset threshold, the internal timer resets to zero, and RESET goes low. The internal timer begins counting after VCC returns above the reset threshold, and RESET remains low for the reset timeout period.

The MAX822 has an active-high RESET output that is the inverse of the MAX821's RESET output.

## Setting the Reset Timeout Delay

Use the three-level Set Reset Timeout (SRT) input to set the reset timeout delay. Connect SRT to GND for a 1ms (max) delay; connect it to VCC for a 20ms (min) delay; or leave it unconnected for a 100ms (min) delay.

If you choose to drive the SRT pin with an external signal, make sure the signal source can charge/discharge the capacitance on SRT quickly enough (&lt;500µs) to avert an unintended reset timeout delay.

To ensure proper operation when selecting the 100ms timeout (SRT = unconnected), minimize capacitive loading on the SRT pin (&lt; 200pF). Excessive capacitive loading can select an unintended faster timeout mode.

## Reset Threshold Accuracy

The MAX821/MAX822 are designed to meet their worstcase specifications over their entire operating temperature  range. Choose a reset threshold guaranteed to assert at a voltage below the power supply's regulation range and above the minimum specified operating voltage range for the system's ICs.

<!-- image -->

Figure 1.  Maximum Transient Duration Without Causing a Reset Pulse vs. Comparator Overdrive

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Negative-Going VCC Transients

While designed to issue a reset to the microprocessor (µP) during power-up, power-down, and brownout conditions,  the  MAX821/MAX822 are relatively immune to short-duration, negative-going VCC transients (glitches).

Figure 1 shows the maximum transient duration vs. reset comparator overdrive for which the MAX821/MAX822 typically do not generate a reset pulse. This graph was generated using a negative-going pulse applied to VCC, starting above the actual reset threshold and ending below it by the magnitude indicated (reset comparator overdrive). The graph indicates the typical maximum pulse width a negative-going VCC transient may have without causing a reset pulse to be issued. As the magnitude of the transient increases (goes farther below the reset threshold), the maximum allowable pulse width decreases. Typically, for the MAX821/MAX822, a VCC transient that goes 100mV below the reset threshold and lasts 12µs or less will not cause a reset pulse to be issued. A 0.1µF capacitor mounted as close as possible to  VCC can provide additional transient immunity, if desired.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 4-Pin µP Voltage Monitors with Pin-Selectable Power-On Reset Timeout Delay

## Ensuring a Valid RESET Output Down to VCC = 0V

When VCC falls below 1V, the MAX821 RESET output no longer sinks current-it becomes an open circuit. Therefore, high-impedance CMOS logic inputs connected to the RESET output can drift to undetermined voltages. This presents no problem in most applications,  since  most µ P and other circuitry is inoperative with VCC below 1V. However, in applications where the RESET output must be valid down to 0V, adding a pulldown resistor to the RESET pin will  cause any stray leakage currents to flow to ground, holding RESET low (Figure 2a). R1's value is not critical; 100k Ω is  large enough not to load RESET ,  and  small  enough to pull RESET to ground.

A 100k Ω pull-up resistor to VCC is also recommended for the MAX822 if RESET is required to remain valid for VCC &lt; 1V (Figure 2b).

## Interfacing to µPs with Bidirectional Reset Pins

µPs with bidirectional reset pins (such as the Motorola 68HC11 series) can contend with the MAX821 reset output. For example, if the MAX821 RESET output is asserted high and the µP wants to pull it low, indeterminate logic levels may result. To correct such cases, connect a 4.7k Ω resistor between the MAX821 RESET output and the µP reset I/O (Figure 3). Buffer the reset output to other system components.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT: 492

Figure 2. RESET/ RESET Valid to VCC = Ground Circuit

<!-- image -->

Figure 3.  Interfacing to µPs with Bidirectional Reset I/O

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 4-Pin µP Voltage Monitors with Pin-Selectable Power-On Reset Timeout Delay

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

SOT-143 4L.EPS

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7