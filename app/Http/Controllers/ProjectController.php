<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use PhpParser\Node\Expr\FuncCall;

class ProjectController extends Controller
{

    private static $progress = 0;

    public function create(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'main_image' => 'required|string',
            'creator' => 'required|string',
        ]);

        $project = Project::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'main_image' => $data['main_image'],
            'creator' => $data['creator']
        ]);

        return response([
            'project' => $project
        ]);
    }

    public function get()
    {
        return Project::all();
    }

    public function show(Project $project)
    {
        return $project;
    }


}
