'use client';

import React, { useState, useEffect } from 'react';

const skills = [
  { id: 1, name: 'React', damage: 10, speed: 1000, color: 'bg-blue-500' },
  { id: 2, name: 'Node.js', damage: 15, speed: 1200, color: 'bg-green-500' },
  { id: 3, name: 'TypeScript', damage: 12, speed: 800, color: 'bg-yellow-500' },
  { id: 4, name: 'Git', damage: 8, speed: 2000, color: 'bg-red-500' },
];

const initialEnemies = [
  { id: 1, health: 30, speed: 4, x: 0, y: 50 },
  { id: 2, health: 20, speed: 5, x: 0, y: 60 },
  { id: 3, health: 25, speed: 4.5, x: 0, y: 70 },
];

const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [wave, setWave] = useState(1);
  const [placedTowers, setPlacedTowers] = useState<any[]>([]);
  const [enemyState, setEnemyState] = useState(initialEnemies);
  const [projectiles, setProjectiles] = useState<any[]>([]);
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [hoveredTower, setHoveredTower] = useState<number | null>(null);

  useEffect(() => {
    const gameInterval = setInterval(() => {
      moveEnemies();
      attackEnemies();
    }, 100);

    const waveInterval = setInterval(() => {
      spawnNewWave();
      setWave((prev) => prev + 1);
    }, 20000);

    return () => {
      clearInterval(gameInterval);
      clearInterval(waveInterval);
    };
  }, [enemyState, placedTowers]);

  const placeTower = (x: number, y: number, skill: any) => {
    setPlacedTowers([
      ...placedTowers,
      { id: Math.random(), x, y, skill, lastAttack: Date.now() },
    ]);
  };

  const handleMapClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    placeTower(x, y, selectedSkill);
  };

  const moveEnemies = () => {
    setEnemyState((prevState) => {
      const updatedEnemies = prevState.map((enemy) => {
        if (enemy.x >= 500) {
          setLives((prevLives) => prevLives - 1);
          return null; // Mark this enemy as to be removed
        }
        return { ...enemy, x: enemy.x + enemy.speed };
      });
  
      // Filter out the `null` enemies and return only the valid ones
      return updatedEnemies.filter((enemy): enemy is NonNullable<typeof enemy> => enemy !== null);
    });
  };
  

  const attackEnemies = () => {
    setEnemyState((prevEnemies) => {
      return prevEnemies.map((enemy) => {
        const towerInRange = placedTowers.find(
          (tower) =>
            enemy.x >= tower.x &&
            enemy.x <= tower.x + 50 &&
            Date.now() - tower.lastAttack > tower.skill.speed
        );
        if (towerInRange && enemy.health > 0) {
          setProjectiles((prev) => [
            ...prev,
            { x: towerInRange.x, y: towerInRange.y, target: enemy.id },
          ]);

          enemy.health -= towerInRange.skill.damage;
          if (enemy.health <= 0) {
            setScore((prevScore) => prevScore + 10);
          }
          towerInRange.lastAttack = Date.now();
        }
        return enemy;
      });
    });
  };

  const spawnNewWave = () => {
    setEnemyState((prevEnemies) => [
      ...prevEnemies,
      ...Array.from({ length: 5 }, (_, i) => ({
        id: Math.random(),
        health: 20 + wave * 5,
        speed: 4 + wave * 0.5,
        x: 0,
        y: Math.random() * 80,
      })),
    ]);
  };

  if (lives <= 0) {
    return <div className="text-center text-white text-2xl">Game Over! Final Score: {score}</div>;
  }

  return (
    <div className="w-full h-screen bg-gray-800 relative">
      {/* Score and Lives */}
      <div className="absolute top-0 left-0 p-5 text-white font-bold text-lg">
        <span>Score: {score}</span>
        <br />
        <span>Lives: {lives}</span>
        <br />
        <span>Wave: {wave}</span>
      </div>

      {/* Skill Selector */}
      <div className="absolute top-0 right-0 p-5 text-white space-y-2">
        <h2 className="font-bold">Select Skill:</h2>
        {skills.map((skill) => (
          <button
            key={skill.id}
            className={`px-3 py-2 ${skill.color} rounded-lg`}
            onClick={() => setSelectedSkill(skill)}
          >
            {skill.name}
          </button>
        ))}
      </div>

      {/* Map/Grid */}
      <div
        className="absolute inset-0"
        onClick={handleMapClick}
      >
        {/* Towers */}
        {placedTowers.map((tower, index) => (
          <div
            key={index}
            className={`absolute w-16 h-16 ${tower.skill.color} rounded-xl`}
            style={{
              top: `${tower.y}px`,
              left: `${tower.x}px`,
            }}
            onMouseEnter={() => setHoveredTower(tower.id)}
            onMouseLeave={() => setHoveredTower(null)}
          >
            {hoveredTower === tower.id && (
              <div
                className="absolute w-32 h-32 bg-blue-200 opacity-50 rounded-full"
                style={{
                  top: `-40px`,
                  left: `-40px`,
                }}
              ></div>
            )}
            <div className="flex justify-center items-center h-full text-white">
              {tower.skill.name}
            </div>
          </div>
        ))}

        {/* Enemies */}
        {enemyState.map((enemy, index) => (
          <div
            key={index}
            className="absolute w-8 h-8"
            style={{
              top: `${enemy.y}px`,
              left: `${enemy.x}px`,
            }}
          >
            <div className="w-full bg-gray-300 h-1 rounded-full relative">
              <div
                className="bg-green-500 h-1 rounded-full"
                style={{ width: `${(enemy.health / (20 + wave * 5)) * 100}%` }}
              ></div>
            </div>
            <div className="w-8 h-8 bg-red-600 rounded-full"></div>
          </div>
        ))}

        {/* Projectiles */}
        {projectiles.map((proj, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-white rounded-full"
            style={{
              top: `${proj.y}px`,
              left: `${proj.x}px`,
              transition: 'all 0.5s linear',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;