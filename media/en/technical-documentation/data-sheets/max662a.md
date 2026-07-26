<!-- lastmod 2022-08-02 -->
<!-- image -->

## +12V, 30mA Flash Memory Programming Supply

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX662A is a regulated +12V, 30mA-output, chargepump DC-DC converter. It provides the necessary +12V ±5% output to program byte-wide flash memories, and requires no inductors to deliver a guaranteed 30mA output from inputs as low as 4.75V. It fits into less than 0.1in 2 of board space. The MAX662A is a pin-compatible upgrade to the MAX662, and is recommended for new designs. The MAX662A offers lower quiescent and shutdown currents, and guarantees the output current over all temperature ranges.

The MAX662A is the first charge-pump boost converter to provide a regulated +12V output. It requires only a few inexpensive capacitors, and the entire circuit is completely surface-mountable.

A logic-controlled shutdown pin that interfaces directly with microprocessors reduces the supply current to only 0.5µA. The MAX662A comes in 8-pin narrow SO and DIP packages.

For higher-current flash memory programming solutions, refer to the data sheets for the MAX734 (120mA output current, guaranteed) and MAX732 (200mA output current, guaranteed) PWM, switch-mode DC-DC converters. Or, refer to the MAX761 data sheet for a 150mA, PFM switch-mode DC-DC converter that operates from inputs as low as 2V.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

+12V Flash Memory Programming Supplies Compact +12V Op-Amp Supplies Switching MOSFETs in Low-Voltage Systems Dual-Output +12V and +20V Supplies

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

- ' Regulated +12V ±5% Output Voltage
- ' 4.5V to 5.5V Supply Voltage Range
- ' Fits in 0.1in 2
- ' Guaranteed 30mA Output
- ' No Inductor-Uses Only 4 Capacitors
- ' 185µA Quiescent Current
- ' Logic-Controlled 0.5µA Shutdown
- ' 8-Pin Narrow SO and DIP Packages

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART       | TEMP. RANGE     | PIN-PACKAGE   |
|------------|-----------------|---------------|
| MAX662ACPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX662ACSA | 0°C to +70°C    | 8 SO          |
| MAX662AC/D | 0°C to +70°C    | Dice*         |
| MAX662AEPA | -40°C to +85°C  | 8 Plastic DIP |
| MAX662AESA | -40°C to +85°C  | 8 SO          |
| MAX662AMJA | -55°C to +125°C | 8 CERDIP**    |

*    Dice are tested at TA = +25°C.
- **  Contact factory for availability and processing to MIL-STD-883.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## +12V, 30mA Flash Memory Programming Supply

## ABSOLUTE MAXIMUM RATINGS

| V CC to GND................................................................-0.3V to 6V   |
|------------------------------------------------------------------------------------------|
| SHDN..........................................................-0.3V to (V CC + 0.3V)     |
| I OUT Continuous..................................................................50mA   |
| Continuous Power Dissipation (T A = +70°C)                                               |
| Plastic DIP (derate 9.09mW/°C above +70°C) ............727mW                             |
| SO (derate 5.88mW/°C above +70°C).........................471mW                          |
| CERDIP (derate 8.00mW/°C above +70°C).................640mW                              |

| Operating Temperature Ranges                                                |
|-----------------------------------------------------------------------------|
| MAX662AE_A ..................................................-40°C to +85°C |
| MAX662AMJA................................................-55°C to +125°C   |
| Storage Temperature Range.............................-65°C to +160°C       |
| Lead Temperature (soldering, 10sec) .............................+300°C     |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(Circuit of Figure 3a, VCC = 4.5V to 5.5V, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER                       | SYMBOL   | CONDITIONS                       | CONDITIONS                               |   MIN |   TYP |   MAX | UNITS   |
|---------------------------------|----------|----------------------------------|------------------------------------------|-------|-------|-------|---------|
| Output Voltage                  | V OUT    | MAX662AC/E                       | 0mA ≤ I OUT ≤ 30mA, V CC = 4.75V to 5.5V |  11.4 |    12 |  12.6 | V       |
| Output Voltage                  |          | MAX662AC/E                       | 0mA ≤ I OUT ≤ 20mA                       |  11.4 |    12 |  12.6 | V       |
| Output Voltage                  |          | MAX662AM                         | 0mA ≤ I OUT ≤ 24mA, V CC = 4.75V to 5.5V |  11.4 |    12 |  12.6 | V       |
| Output Voltage                  |          | MAX662AM                         | 0mA ≤ I OUT ≤ 16mA                       |  11.4 |    12 |  12.6 | V       |
| Supply Current                  | I CC     | No load, V SHDN = 0V             | No load, V SHDN = 0V                     |       |   185 |   500 | µA      |
| Shutdown Current                |          | No load, V SHDN = V CC           | No load, V SHDN = V CC                   |       |   0.5 |    10 | µA      |
| Oscillator Frequency            | f OSC    | V CC = 5V, I OUT = 30mA          | V CC = 5V, I OUT = 30mA                  |       |   500 |       | kHz     |
| Power Efficiency                |          | V CC = 5V, I OUT = 30mA          | V CC = 5V, I OUT = 30mA                  |       |    76 |       | %       |
| V CC -to-V OUT Switch Impedance | R SW     | V CC = V SHDN = 5V, I OUT = 30mA | MAX662AC/E                               |       |     1 |     2 | k Ω     |
| V CC -to-V OUT Switch Impedance |          | V CC = V SHDN = 5V, I OUT = 30mA | MAX662AM                                 |       |     1 |   2.5 | k Ω     |
| Shutdown Input Threshold        | V IH     |                                  |                                          |   2.4 |       |       | V       |
| Shutdown Input Threshold        | V IL     |                                  |                                          |       |       |   0.4 | V       |
| SHDN Pin Current                |          | V CC = 5V, V SHDN = 0V           | V CC = 5V, V SHDN = 0V                   |   -50 |   -15 |    -5 | µA      |
| SHDN Pin Current                |          | V CC = V SHDN = 5V               | V CC = V SHDN = 5V                       |       |     0 |       | µA      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(Circuit of Figure 3a, TA = +25°C, unless otherwise noted.)

<!-- image -->

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +12V, 30mA Flash Memory Programming Supply

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 3a, TA = +25°C, unless otherwise noted.)

<!-- image -->

1ms/div

A:  OUTPUT CURRENT, 20mA/div, I OUT  = 0mA to 30mA

B:  OUTPUT VOLTAGE RIPPLE, 100mV/div, VCC = 5.0V

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

|   PIN | NAME   | FUNCTION                                                                                                                                                                                      |
|-------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | C1-    | Negative terminal for the first charge- pump capacitor                                                                                                                                        |
|     2 | C1+    | Positive terminal for the first charge- pump capacitor                                                                                                                                        |
|     3 | C2-    | Negative terminal for the second charge-pump capacitor                                                                                                                                        |
|     4 | C2+    | Positive terminal for the second charge-pump capacitor                                                                                                                                        |
|     5 | V CC   | Supply Voltage                                                                                                                                                                                |
|     6 | V OUT  | +12V Output Voltage. V OUT = V CC when in shutdown mode.                                                                                                                                      |
|     7 | GND    | Ground                                                                                                                                                                                        |
|     8 | SHDN   | Active-high CMOS-logic level Shutdown Input. SHDN is internally pulled up to V CC . Connect to GND for normal operation. In shutdown mode, the charge pumps are turned off and V OUT = V CC . |

<!-- image -->

A:  SUPPLY VOLTAGE, 2V/div, V CC  = 4.5V to 5.5V, I OUT  = 30mA

B:  OUTPUT VOLTAGE RIPPLE, 200mV/div

Figure 1.  Block Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## +12V, 30mA Flash Memory Programming Supply

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Operating Principle

The MAX662A provides a regulated 12V output voltage at 30mA from a 5V ±5% power supply, making it ideal for  flash  EEPROM programming applications. It uses internal charge pumps and external capacitors to generate +12V, eliminating inductors. Regulation is provided by a pulse-skipping scheme that monitors the output voltage level and turns on the charge pumps when the output voltage begins to droop.

Figure 1 shows a simplified block diagram of the MAX662A. When the S1 switches are closed and the S2 switches are open, capacitors C1 and C2 are charged up to VCC. The S1 switches are then opened and the S2 switches are closed so that capacitors C1 and C2 are connected in series between VCC and VOUT. This performs a voltage tripling function. A pulseskipping feedback scheme adjusts the output voltage to 12V ±5%. The efficiency of the MAX662A with VCC = 5V  and  IOUT =  30mA is  typically  76%.  See  the Efficiency vs. Load Current graph in the Typical Operating Characteristics.

During one oscillator cycle, energy is transferred from the charge-pump capacitors to the output filter capacitor  and the load. The number of cycles within a given time frame increases as the load current increases or as the input supply voltage decreases. In the limiting case, the charge pumps operate continuously, and the oscillator frequency is nominally 500kHz.

Figure 2.  MAX662A Exiting Shutdown

<!-- image -->

## Shutdown Mode

The MAX662A enters shutdown mode when SHDN is a logic high. SHDN is a TTL/CMOS-compatible input signal that is internally pulled up to VCC. In shutdown mode, the charge-pump switching action is halted and VIN is connected to VOUT through a 1k Ω switch. When entering shutdown, VOUT declines to VCC in typically 13ms. Connect SHDN to ground for normal operation. When VCC = 5V, it takes typically 400µs for the output to reach 12V after SHDN goes low (Figure 2).

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Compatibility with MAX662

The MAX662A is a 100%-compatible upgrade of the MAX662. The MAX662A does not require capacitor C3, although its presence does not affect performance.

## Capacitor Selection

## Charge-Pump Capacitors, C1 and C2

The capacitance values of the charge-pump capacitors C1 and C2 are critical. Use ceramic or tantalum capacitors in the 0.22µF to 1.0µF range. For applications requiring operation over extended and/or military temperature ranges, use 1.0µF tantalum capacitors for C1 and C2 (Figure 3b).

## Input and Output Capacitors, C4 and C5

The type of input bypass capacitor (C4) and output filter capacitor (C5) affects performance. Tantalums, ceramics or aluminum electrolytics are suggested. For smallest size, use Sprague 595D475X9016A7 surface-mount capacitors, which are 3.51mm x 1.81mm. For lowest ripple, use lowESR through-hole ceramic or tantalum capacitors. For lowest cost, use aluminum electrolytic or tantalum capacitors.

Figure 3a shows the component values for proper operation over the commercial temperature range using minimum board space. The input bypass capacitor (C4) and output filter capacitor (C5) should both be at least 4.7µF when using Sprague's miniature 595D series of tantalum chip capacitors. Figure 3b shows the suggested component values for applications over extended and/or military temperature ranges.

The values of C4 and C5 can be reduced to 2µF and 1µF, respectively, when using ceramic capacitors. If using aluminum electrolytics, choose capacitance values of 10µF or larger for C4 and C5. Note that as VCC increases above 5V and the output current decreases, the amount of ripple at VOUT increases due to the slower oscillator frequency combined with the higher input voltage. Increase the input and output bypass capacitance to reduce output ripple.

Table 1 lists various capacitor suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 1.  Capacitor Suppliers

| Supplier         | Phone Number                  | Fax Number                    | Capacitor                         | Capacitor Type*                         |
|------------------|-------------------------------|-------------------------------|-----------------------------------|-----------------------------------------|
| Murata Erie      | (814) 237-1431                | (814) 238-0490                | GRM42-6Z5U224M50 RPE123Z5U105M50V | 0.22µF Ceramic (SM) 1.0µF Ceramic (TH)  |
| Sprague Electric | (603) 224-1961 (207) 324-4140 | (603) 224-1430 (207) 324-7223 | 595D475X9016A7 595D105X9016A7     | 4.7µF Tantalum (SM) 1.0µF Tantalum (SM) |

*Note:  (SM) denotes surface-mount component, (TH) denotes through-hole component.

<!-- image -->

Figure 3a.  Flash EEPROM Programming Power Supply for Commercial Temperature Range Applications

<!-- image -->

Figure 3b.  Flash EEPROM Programming Power Supply for Extended and/or Military Temperature Range Applications

<!-- image -->

## Layout Considerations

Layout is critical, due to the MAX662A's high oscillator frequency. Good layout ensures stability and helps maintain the output voltage under heavy loads. For best performance, use very short connections to the capacitors. The order of importance is:  C4, C5, C1, C2.

## Flash EEPROM Applications

The circuit of Figure 3a is a +12V ±5% 30mA flash EEPROM programming power supply. A microprocessor controls the programming voltage via the SHDN pin.  When SHDN is low, the output voltage (which is connected to the flash memory VPP supply-voltage pin) rises to +12V to facilitate programming the flash memory. When SHDN is high, the output voltage is connected to VIN through an internal 1k Ω resistor.

## Paralleling Devices

Two MAX662As can be placed in parallel to increase output drive capability. The VCC, VOUT, and GND pins can be paralleled, reducing pin count. Use a single bypass capacitor and a single output filter capacitor with twice the capacitance value if the two devices can be placed close to each other. If the MAX662As cannot be placed close together, use separate bypass and output capacitors. The amount of output ripple observed will determine whether single input bypass and output filter capacitors can be used. Under certain conditions, one device may supply the total output current. Therefore, regardless of the number of devices in parallel,  the  maximum continuous current must not exceed 50mA.

12V and 20V Dual-Output Power Supply Using the charge-pump voltage-doubler circuit of Figure 4, the MAX662A can produce a +20V supply from a single +5V supply. Figure 5 shows the current capability of the +20V supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +12V, 30mA Flash Memory Programming Supply

MAX662A

## +12V, 30mA Flash Memory Programming Supply

<!-- image -->

Figure 4.  +12V and +20V Dual Supply from a +5V Input Figure 5.  +20V Supply Output Current Capability

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Topography

<!-- image -->

TRANSISTOR COUNT:  225 SUBSTRATE CONNECTED TO VOUT

## 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_